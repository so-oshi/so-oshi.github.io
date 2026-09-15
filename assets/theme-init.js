/* Set theme before first paint to avoid a flash of the wrong theme.
   Loaded synchronously in <head> on every page, before style.css finishes
   loading. Shared by index.html and resume.html — keep this file page-agnostic.

   Dark mode is the default: a first-time visitor (nothing saved yet) gets
   dark. Once someone explicitly picks a theme (nav icon or the hero lamp),
   that choice is saved to localStorage and always wins after that — this
   only decides what a visitor sees before they've ever chosen. */
(function () {
  var saved = localStorage.getItem("theme");
  if (saved !== "light") document.documentElement.setAttribute("data-theme", "dark");
})();
