/* Resume PDF runtime: download button behavior, plus a fallback for the
   inline <iframe> preview when it can't be embedded. Shared by index.html
   (the resume modal) and resume.html (the standalone page) so behavior
   stays identical everywhere; include this script at the end of <body>,
   after the relevant elements exist.

   Both concerns below split the same way: inside the hosted Claude
   artifact preview there's no direct filesystem access and the page is
   framed inside the platform's own sandboxed viewer, so some things that
   work on a normal static host don't; on a normal static host (GitHub
   Pages, your own domain, etc.) everything just works natively. We detect
   "am I inside the hosted preview?" once, via whether `window.claude`
   exists — it's injected synchronously by that viewer, independent of
   whether any particular capability ends up granted. */
(function () {
  var RESUME_PDF = "assets/resume.pdf";
  var RESUME_FILENAME = "Benjamin-Wrinn-Resume.pdf";

  function inHostedPreview() {
    return !!(window.claude && typeof window.claude.use === "function");
  }

  /* ---- Download button(s): "Download" text link + download icon ---- */

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

  /* ---- Inline <iframe> preview ----
     The iframe below is built with [data-src] instead of [src] so it never
     auto-loads — we decide what to do with it here, once, instead of
     letting the browser start fetching it as soon as the tag is parsed.
     Inside the hosted preview, framing a PDF inline is blocked by that
     viewer's own sandboxing (Chrome shows "This page has been blocked by
     Chrome" in the frame), even though the exact same markup renders the
     PDF fine on a real static host — so there, swap in a plain message and
     link instead of ever attempting the frame. On a real static host,
     just activate the iframe normally. */

  document.querySelectorAll(".resume-embed, .resume-modal__embed").forEach(function (container) {
    var iframe = container.querySelector("iframe[data-src]");
    if (!iframe) return;
    if (inHostedPreview()) {
      iframe.remove();
      var fallback = document.createElement("div");
      fallback.className = "resume-embed__fallback";
      fallback.innerHTML =
        "<p>Inline preview isn&rsquo;t available in this hosted preview.</p>" +
        '<a href="' + RESUME_PDF + '" target="_blank" rel="noopener">Open the PDF in a new tab &#8599;</a>';
      container.appendChild(fallback);
    } else {
      /* PDF open parameters (Chrome/Edge's built-in viewer, and mostly
         Firefox's — Safari largely ignores these): navpanes=0 hides the
         thumbnail/outline sidebar, toolbar=0 hides the viewer's own
         toolbar (redundant with our Open/Download buttons above the
         frame), and view=FitH scales the page to fill the frame's width
         so it reads as large as possible. */
      iframe.src = iframe.getAttribute("data-src") + "#toolbar=0&navpanes=0&view=FitH";
    }
  });
})();
