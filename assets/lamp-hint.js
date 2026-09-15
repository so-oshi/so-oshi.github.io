/* Hero lamp hint — a small hand-drawn-style note pointing at the bulb, so
   first-time visitors know it's clickable. The message matches whatever
   theme is currently showing (it describes what clicking will DO), and
   once the visitor has clicked the bulb once we assume they've learned
   the trick: the hint is dismissed for good (persisted in localStorage),
   even across later theme switches or reloads. Only present in
   index.html's hero — not loaded on resume.html. */
(function () {
  var hint = document.getElementById("heroHint");
  var textEl = document.getElementById("heroHintText");
  var lamp = document.getElementById("lampToggle");
  if (!hint || !textEl || !lamp) return;

  var STORAGE_KEY = "lampHintDismissed";

  function isDismissed() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
    hint.classList.add("is-dismissed");
  }

  function updateText() {
    if (isDismissed()) return;
    var isDark = window.siteTheme ? window.siteTheme.get() === "dark" : true;
    textEl.textContent = isDark ? "let's brighten up" : "let's dim it down";
  }

  if (isDismissed()) {
    hint.classList.add("is-dismissed");
  } else {
    updateText();
  }

  // Keep the message in sync with the theme (e.g. if it's changed via the
  // nav's plain toggle instead) right up until the bulb itself is clicked.
  document.addEventListener("themechange", updateText);

  lamp.addEventListener("click", dismiss);
  lamp.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    dismiss();
  });
})();
