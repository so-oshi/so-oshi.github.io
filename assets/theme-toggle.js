/* Shared theme state: exposes window.siteTheme = {get, set, toggle} and
   dispatches a "themechange" CustomEvent on `document` whenever the theme
   changes, from ANY source — so other scripts (like the hero lamp) can
   both trigger a change and stay in sync with changes made elsewhere.
   Also wires up the #themeToggle button itself when one is present on the
   page, and plays a little on/off click sound on every switch. Shared by
   index.html and resume.html — include this at the end of <body>, after
   the button markup (if any) exists. */
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");

  // Preloaded once and replayed from the start each time (rather than
  // `new Audio()` per click) so rapid toggling never overlaps itself.
  // Only ever triggered from a real click/keypress handler below, so
  // browser autoplay restrictions don't come into play — but .play()'s
  // promise is still swallowed defensively in case a browser blocks it
  // or the file fails to load.
  var sounds = { light: new Audio("assets/sounds/light-on.mp3"), dark: new Audio("assets/sounds/light-off.mp3") };

  function playSwitchSound(mode) {
    var audio = sounds[mode];
    if (!audio) return;
    try {
      audio.currentTime = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }

  function getTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(mode) {
    // Kill every transition for one frame so the theme swap is instant
    // instead of fading, except the hero lamp (see the .theme-switching
    // rule at the top of style.css) — its own fill/press animation should
    // keep playing normally.
    root.classList.add("theme-switching");

    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", mode);
    if (toggle) toggle.setAttribute("aria-pressed", String(mode === "dark"));
    playSwitchSound(mode);
    document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: mode } }));

    // Wait a frame for the instant swap to actually paint, then remove the
    // class so ordinary hover/press transitions elsewhere keep working.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove("theme-switching");
      });
    });
  }

  window.siteTheme = {
    get: getTheme,
    set: setTheme,
    toggle: function () {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    }
  };

  if (toggle) {
    toggle.addEventListener("click", function () {
      window.siteTheme.toggle();
    });
    // Reflect whatever theme-init.js already set before paint.
    toggle.setAttribute("aria-pressed", String(getTheme() === "dark"));
  }
})();
