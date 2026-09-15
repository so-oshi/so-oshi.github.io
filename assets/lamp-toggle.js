/* The hero lamp: a doodle light bulb, a second playful way to toggle dark
   mode alongside the plain #themeToggle icon in the nav (they stay in sync
   via window.siteTheme from theme-toggle.js). Click, tap, or press
   Enter/Space anywhere on it to flip the theme. Only present in
   index.html's hero — not loaded on resume.html. */
(function () {
  var wrap = document.getElementById("lampToggle");
  if (!wrap) return;

  function syncVisualState() {
    var isOn = window.siteTheme ? window.siteTheme.get() === "light" : true;
    wrap.classList.toggle("is-on", isOn);
    wrap.setAttribute("aria-pressed", String(!isOn)); // matches #themeToggle's convention: pressed = dark mode
  }

  function toggleTheme() {
    if (window.siteTheme) window.siteTheme.toggle();
  }

  wrap.addEventListener("click", toggleTheme);
  wrap.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    e.preventDefault();
    toggleTheme();
  });

  document.addEventListener("themechange", syncVisualState);
  syncVisualState();
})();
