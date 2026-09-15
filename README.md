# Benjamin Wrinn — Engineering Portfolio

A static portfolio site. No build step, no framework — just `index.html`
(the main page), `resume.html` (a second page embedding a resume PDF),
`style.css`, `script.js`, and `assets/`.

## Running it locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

(Opening `index.html` directly by double-clicking also works in most
browsers, since there's no build step or bundler.)

## Editing content

All project content — titles, tags, stats, description, and which images
belong to each project — lives in one place: the `PROJECTS` array at the
top of `script.js`. Add a new project by copying an existing object in that
array and swapping in new text/images; nothing else needs to change, the
grid and the click-through modal are both generated from that array.

Drop new images into `assets/images/` and reference them from `PROJECTS`
(e.g. `IMG + "my-new-photo.jpg"`). Keep hero images roughly 1600–1800px on
the long edge — large enough to look sharp, small enough to load fast.

## Editing the look

Every color in the site is a CSS variable at the top of `style.css`
(the `:root { ... }` and `[data-theme="dark"] { ... }` blocks) — light
theme, dark theme, borders, text, the accent color. Change those and the
whole site re-skins itself; nothing else in the CSS needs to change.

### Fonts

The site is set up for three fonts, via the `--font-head`, `--font-body`,
and `--font-ui` variables at the top of `style.css`:

- **Proxima Sera** — headings (`--font-head`)
- **Merriweather** — body copy / descriptions (`--font-body`)
- **Proxima Nova** — nav, buttons, labels, tags (`--font-ui`)

Merriweather is free and already loading from Google Fonts in `index.html`.
**Proxima Nova and Proxima Sera are commercial fonts** (sold via Adobe Fonts
/ fonts.com, among others) — there's no free CDN that hosts them, so this
project can't fetch them automatically. Until you add your own licensed
copy, both fall back to **Montserrat** (also loaded from Google Fonts), a
free look-alike for Proxima Nova.

To use the real fonts once you have a license: if you have an Adobe Fonts
kit that includes Proxima Nova/Sera, add the kit's `<link>` (or `<script>`)
tag in `index.html`'s `<head>`, above `style.css` — the `--font-*`
variables already reference "Proxima Nova"/"Proxima Sera" by name, so
nothing else needs to change. If you instead have licensed font *files*,
drop them in `assets/fonts/` and add an `@font-face` block for each at the
top of `style.css`.

## Deploying

This is a plain static site, so it deploys anywhere that serves static
files:

- **GitHub Pages**: push this folder to a repo, enable Pages on the
  `main` branch (root), done.
- **Netlify / Vercel**: drag-and-drop the folder, or connect the repo —
  no build command needed (or set it to a no-op).
- **Your own domain**: point it at whichever of the above you use, or
  upload the folder over (S)FTP to any static host.

## Contact info

LinkedIn is a hard-coded icon link in the nav bar in `index.html` — update
it there if it changes.

Email and phone both work the same way: hovering (or focusing) the icon
shows a popover with the value; clicking the icon *or* the value in the
popover copies it to the clipboard and shows a toast confirming it. That
logic is the "Email / phone icons" block near the bottom of `script.js` —
`EMAIL_DISPLAY` and `PHONE_DISPLAY` there are the only two places you'd
need to change if either changes (they're also echoed in the buttons'
`title`/`aria-label` attributes in `index.html` for the tooltip text).

## Resume page

The "Resume" link in the nav and hero (and, on mobile, in the hamburger
menu) opens the PDF in an in-page modal — no page navigation required, so
it works the same everywhere the site is viewed, including inside the
hosted preview. `resume.html` also still exists as a standalone page with
the same embed, in case you ever want a page you can link to directly
(e.g. `yoursite.com/resume.html`).

**Both expect a file at `assets/resume.pdf`.** Drop your resume PDF in
`assets/` under that exact name and everything below works immediately —
nothing else needs to change.

The inline preview itself is a pre-rendered image, `assets/resume-preview.png`,
not the PDF embedded live in an `<iframe>`. That's deliberate: a PDF framed
inline is rendered by whatever the *visitor's* browser hands PDFs to —
Chrome's own built-in viewer, Firefox's, or (for a lot of people) a
third-party PDF extension like Adobe Acrobat's, each with its own toolbar
and sidebar chrome that a page has very little control over, so the exact
same embed can look completely different (and cluttered) from one visitor
to the next. A plain image sidesteps all of that: it always looks exactly
like it does in your editor, full width, no toolbar, no sidebar, for every
visitor. "Open in new tab" and "Download" still point at the real PDF, so
nothing about actually reading or saving the resume is lost.

**If you update `assets/resume.pdf`, regenerate the preview image to match** —
otherwise the preview and the real PDF will drift out of sync. With
[poppler](https://poppler.freedesktop.org/) installed (`pdftocairo`, often
already present on macOS/Linux, or via `brew install poppler` /
`apt install poppler-utils`):

```
pdftocairo -png -r 250 -singlefile assets/resume.pdf assets/resume-preview
```

That renders page 1 at 250 DPI, which stays crisp even shown quite large.

Both places also have a "Download" text link and a download icon button
next to "Open in new tab" — either one saves the PDF to the visitor's
machine. That's `assets/resume-download.js`, shared by both pages: on a
normal static host it's a plain download-attribute link click; inside the
hosted Claude preview (which has no direct filesystem access) it uses the
platform's own download capability instead, so the visitor sees a
confirmation prompt there. You don't need to do anything for this to work
on your deployed site — it's automatic either way.

`resume.html` shares `style.css` and the same theme toggle as the main
page (see below), so it stays visually and behaviorally in sync
automatically.

## Shared theme logic

Both `index.html` and `resume.html` load two small shared scripts instead
of duplicating theme code:

- `assets/theme-init.js` — runs before first paint, so the page never
  flashes the wrong theme on load. **Dark is the default**: a first-time
  visitor with nothing saved yet gets dark mode; once someone explicitly
  picks a theme it's saved to `localStorage` and that choice always wins
  after that. To flip the default back to light, change the one condition
  at the bottom of that file.
- `assets/theme-toggle.js` — wires up the `#themeToggle` nav button,
  persists the choice to `localStorage`, and exposes it to other scripts as
  `window.siteTheme` (`.get()`, `.set("dark"|"light")`, `.toggle()`) — it
  also fires a `themechange` event on `document` whenever the theme
  changes, from any source, so other UI can stay in sync. Every switch
  (nav button or the hero lamp) also plays a little click — `assets/
  sounds/light-on.mp3` going to light, `assets/sounds/light-off.mp3`
  going to dark. Swap either file to change the sound; nothing else
  needs to change.

If you add more pages later, include both scripts the same way (init in
`<head>`, toggle at the end of `<body>`) and the dark-mode toggle will work
without any extra code.

**The switch itself is instant, not a fade.** Every time `setTheme()` runs,
it adds a `theme-switching` class to `<html>` for exactly one frame — a
rule at the top of `style.css` uses that class to force every transition on
the page to `none !important` for that instant, then the class comes back
off once the swap has painted. The one thing deliberately excluded from
that kill-switch is the hero lamp (`.lamp` and everything inside it), so
its own fill/press animation keeps playing normally even though the rest
of the page snaps instead of fades.

## The hero lamp

The doodle light bulb in the top-right of the hero is a second, playful way
to toggle dark mode — the plain `#themeToggle` icon in the nav still works
the same as always, and both stay in sync via `window.siteTheme` above.
It's `assets/lamp-toggle.js`, index.html-only (not loaded on resume.html).
Two separate pieces, both in the same `<svg>`:

- The **bulb** hangs from its own fixed wire, with a simple doodle
  filament inside it. It reflects the current theme: outline only (no
  fill, no rays) in dark mode — the bulb is fully *off* — filled in with
  `--lamp-on` (a warm yellow, independent of `--accent`) plus a fan of
  light rays underneath it in light mode. The rays only live in the
  bottom half of the bulb (`.lamp__rays` in `index.html`), not wrapped
  all the way around, so it reads as light spilling downward rather than
  a sunburst.
- **Toggling** is a plain click (or tap, or Enter/Space when focused) —
  click anywhere on the bulb and it flips the theme. There's no
  drag/pull-chain any more; that turned out to be more fiddly than fun,
  so it was removed in favor of a simple, obvious click target
  (`assets/lamp-toggle.js` is now just a click handler plus the
  `is-on`/theme-sync logic — no physics, no animation loop).
- Hidden below 760px width — the nav's small toggle icon covers that
  case, since the extra graphic isn't worth the space on a phone.

The bulb's outline, cap, and filament are hand-traced SVG paths in
`index.html` (search for `lamp__bulb`) rather than an imported image, so
they inherit the site's theme colors automatically — edit the `d`
attributes there if you want to adjust the doodle's shape further.

## About Me section

`index.html` now has an `#about` section (reached from the hero's "About
Me" button) with placeholder copy — a comment right above it in the HTML
marks exactly what to replace. It's intentionally left blank rather than
guessed at; swap in your own bio whenever you're ready.
