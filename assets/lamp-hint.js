/* Hero lamp hint — a small hand-drawn-style note pointing at the bulb, so
   first-time visitors know it's clickable. The message matches whatever
   theme is currently showing (it describes what clicking will DO), and
   it disappears the moment the bulb is clicked — but that's purely
   in-memory state, not saved anywhere, so every fresh page load starts
   over and shows the hint again. Only present in index.html's hero —
   not loaded on resume.html. */
(function () {
  var hint = document.getElementById("heroHint");
  var textEl = document.getElementById("heroHintText");
  var lamp = document.getElementById("lampToggle");
  if (!hint || !textEl || !lamp) return;

  var dismissed = false;

  function dismiss() {
    dismissed = true;
    hint.classList.add("is-dismissed");
  }

  function updateText() {
    if (dismissed) return;
    var isDark = window.siteTheme ? window.siteTheme.get() === "dark" : true;
    textEl.textContent = isDark ? "let's brighten up" : "let's dim it down";
  }

  updateText();

  // Keep the message in sync with the theme (e.g. if it's changed via the
  // nav's plain toggle instead) right up until the bulb itself is clicked.
  document.addEventListener("themechange", updateText);

  lamp.addEventListener("click", dismiss);
  lamp.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    dismiss();
  });
})();
