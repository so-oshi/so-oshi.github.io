/* Resume PDF runtime: download button behavior. Shared by index.html (the
   resume modal) and resume.html (the standalone page) so behavior stays
   identical everywhere; include this script at the end of <body>, after
   the relevant elements exist.

   The inline preview itself is a plain pre-rendered <img> (see
   assets/resume-preview.png) rather than a PDF embedded in an <iframe> —
   that sidesteps every browser/extension inconsistency in how PDFs get
   displayed (native viewer vs. a PDF-handling extension like Adobe
   Acrobat's, each with its own toolbar/sidebar chrome that a page can't
   reliably control) and guarantees every visitor sees the same clean,
   full-size preview. The actual PDF is still what "Open in new tab" and
   "Download" point to.

   The download button has one wrinkle: inside the hosted Claude artifact
   preview there's no direct filesystem access, so a plain download link
   doesn't work there — we detect "am I inside the hosted preview?" via
   whether `window.claude` exists (injected synchronously by that viewer)
   and use its downloads capability instead. On a normal static host
   (GitHub Pages, your own domain, etc.) the plain download link just
   works natively. */
(function () {
  var RESUME_PDF = "assets/resume.pdf?v=2";
  var RESUME_FILENAME = "Benjamin-Wrinn-Resume.pdf";

  function inHostedPreview() {
    return !!(window.claude && typeof window.claude.use === "function");
  }

  function fallbackDownload() {
    var a = document.createElement("a");
    a.href = RESUME_PDF;
    a.download = RESUME_FILENAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function downloadResume() {
    if (inHostedPreview()) {
      try {
        var downloads = await window.claude.use("downloads");
        if (downloads) {
          var resp = await fetch(RESUME_PDF);
          var blob = await resp.blob();
          await downloads.save({ filename: RESUME_FILENAME, data: blob });
          return;
        }
      } catch (err) {
        // Declined, rate-limited, unavailable, etc. — the platform already
        // showed (or dismissed) its own prompt, so there's nothing more to
        // surface here.
        return;
      }
    }
    fallbackDownload();
  }

  document.querySelectorAll("[data-download-resume]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      downloadResume();
    });
  });
})();
