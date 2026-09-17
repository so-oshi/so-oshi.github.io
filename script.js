/* ==========================================================================
   Benjamin Wrinn — Engineering Portfolio
   All project content lives in the PROJECTS array below.
   To add / edit a project, add / edit an object here — the grid and the
   modal are both generated from this data, nothing else needs to change.
   ========================================================================== */

const IMG = "assets/images/";

const PROJECTS = [
  {
    id: "vero-enclosure",
    org: "Vero Electric",
    category: "Vero Electric",
    title: "Industrial Battery Enclosure",
    tagline: "240 kWh / 120 kW BESS enclosure, thermally validated with FEA",
    tags: ["Mechanical Design", "Thermal FEA", "DFM", "SolidWorks"],
    stats: [],
    hero: IMG + "vero-enclosure-hero.jpg",
    gallery: [
      { src: IMG + "vero-enclosure-hero.jpg", caption: "Enclosure interior, door open — 5-module battery stack" },
      { src: IMG + "vero-enclosure-full-render.jpg", caption: "Full enclosure assembly — investor-facing CAD render" },
      { src: IMG + "vero-enclosure-team-unbox.jpg", caption: "Unboxing and inspecting a battery module" },
      { src: IMG + "vero-enclosure-fea.jpg", caption: "Front door panel FEA — von Mises stress" },
      { src: IMG + "vero-enclosure-thermal-chart.jpg", caption: "Panel temperature comparison across shielding configurations" },
      { src: IMG + "vero-enclosure-internal.jpg", caption: "High-voltage box — internal layout" },
      { src: IMG + "vero-enclosure-cutaway.jpg", caption: "High-voltage box — cutaway view" },
      { src: IMG + "vero-enclosure-workstation.jpg", caption: "Modeling the enclosure in SolidWorks" }
    ],
    desc: [
      "Contracted to create a custom 240 kWh/120kW BESS enclosure fit for UL 9540A Standards.",
      "7.2 × 4.5 × 3 ft, 2.75 tons.",
      "Used thermal simulation and FEA to drive design decisions — including thermal shielding panels and panel stiffening — validating that shielded panel temperatures ran well below unshielded and insulated configurations.",
      "Produced investor-facing CAD renders and a custom high-voltage box, still in development.",
      "Custom high voltage box for more efficient packaging.",
      "Targeting a UL 9540A burn test by the end of the calendar year."
    ]
  },
  {
    id: "vero-board",
    org: "Vero Electric",
    category: "Vero Electric",
    title: "BMS Node & CAN Bus Board Design",
    tagline: "4-layer, 64-series-cell BMS node PCB designed in KiCad",
    tags: ["PCB Design", "KiCad", "4-Layer"],
    stats: [],
    hero: IMG + "vero-board-hero.jpg",
    gallery: [
      { src: IMG + "vero-board-hero.jpg", caption: "BMS Node v1.1 — four-board strip, assembled" },
      { src: IMG + "vero-board-node-closeup.jpg", caption: "BMS Node — board detail" },
      { src: IMG + "vero-board-team-package.jpg", caption: "Boxed and ready — BMS Node and CAN Consolidator boards" },
      { src: IMG + "vero-board-team-reaction.jpg", caption: "First look at the assembled boards" },
      { src: IMG + "vero-board-bms-render-angled.jpg", caption: "BMS Node — CAD render, side" },
      { src: IMG + "vero-board-can-photo.jpg", caption: "CAN Consolidator board, assembled" },
      { src: IMG + "vero-board-can-render-angled.jpg", caption: "CAN Consolidator — CAD render, side" }
    ],
    desc: [
      "Designed a 4-layer, high-voltage BMS Node PCB in KiCad, using four cell-monitor ICs to cover 64 series cells.",
      "Designed a simple CAN bus consolidator / breakout board for the enclosure's EMS, with differential-pair routing and a center-hub layout.",
      "Both boards were fabricated, hand-assembled, and bring-up tested."
    ]
  },
  {
    id: "dynamometer",
    org: "Penn Electric Racing",
    category: "Penn Electric Racing",
    title: "Electric Dynamometer",
    tagline: "Custom brake-absorption dyno for gearbox validation",
    tags: ["SolidWorks", "Powertrain", "Ongoing"],
    stats: [],
    hero: IMG + "per-dyno-hero.jpg",
    gallery: [
      { src: IMG + "per-dyno-hero.jpg", caption: "Brake-absorption dynamometer — CAD assembly" }
    ],
    desc: [
      "Designing a custom, brake-absorption dynamometer for design validation and gearbox wear-in testing.",
      "Mechanical design supports future regenerative-braking testing and gearbox changes without a rebuild.",
      "Load cell measures within ±1 N·m, allowing us to quantify gearbox efficiency changes as it wears.",
      "Sized to accommodate max loads of 500 N·m shaft torque, and max RPM of 20,000."
    ]
  },
  {
    id: "drs",
    org: "Penn Electric Racing",
    category: "Penn Electric Racing",
    title: "Drag Reduction System (DRS)",
    tagline: "Servo-actuated rear wing flaps, validated with CFD",
    tags: ["CFD", "Mechanism Design", "Rookie Project", "Paused"],
    stats: ["37% drag reduction (calc.)", "2× actuated airfoils"],
    hero: IMG + "per-drs-hero.jpg",
    gallery: [
      { src: IMG + "per-drs-hero.jpg", caption: "DRS mechanism mounted to the rear wing" },
      { src: IMG + "per-drs-cfd.jpg", caption: "CFD streamlines around the car" },
      { src: IMG + "per-drs-linkage.jpg", caption: "Actuation linkage detail" }
    ],
    desc: [
      "Rookie project: a Drag Reduction System (DRS) for the car's rear wing that actuates two rear airfoils via an electric servo and custom linkage design.",
      "Ran an angle-of-attack sweep in Luminary Cloud CFD to find the optimal airfoil angle, calculating a 37% reduction in drag on straightaways.",
      "Integration didn't align with the 2026 summer timeline — on the roadmap for 2027."
    ]
  },
  {
    id: "arc",
    org: "American Rocketry Challenge",
    category: "Other",
    title: "Flight Computer & Apogee Control",
    tagline: "Custom 4-layer flight computer + CFD-driven apogee control",
    tags: ["PCB Design", "CFD", "ESP32-S3", "Embedded"],
    stats: ["ESP32-S3", "4-Layer PCB", "IMU + Pressure Sensor"],
    hero: IMG + "arc-hero.jpg",
    gallery: [
      { src: IMG + "arc-hero.jpg", caption: "CFD velocity streamlines over the airframe" },
      { src: IMG + "arc-flightcomputer-photo.jpg", caption: "Assembled flight computer PCB" },
      { src: IMG + "arc-board-layers.jpg", caption: "Flight computer PCB — four layer copper pours" },
      { src: IMG + "arc-acs.jpg", caption: "Active Control System (ACS) flap mechanism" },
      { src: IMG + "arc-dcs.jpg", caption: "Descent Control System housing" }
    ],
    desc: [
      "Solely responsible for designing the team's custom 4-layer flight computer — ESP32-S3 with external flash and crystal, a linear-actuator motor driver, voltage step-down, pressure sensor, IMU, and status LEDs — manufactured by JLCPCB.",
      "The flight computer drives a linear actuator that moves Active Control System (ACS) flaps to control apogee, and was designed to integrate with a Descent Control System (DCS).",
      "Ran CFD in Autodesk CFD and Ansys across flap angle and airspeed to build a 3rd-degree polynomial regression lookup table, letting the flight computer pick the best ACS configuration in flight.",
      "The PCB and ACS design are still flying with the team in 2026."
    ]
  },
  {
    id: "cam-assay",
    org: "cc-TDI Internship",
    category: "Other",
    title: "CAM Assay Rapid Prototyping",
    tagline: "Low-cost camera monitoring for quail embryo drug trials",
    tags: ["OpenCV", "Python", "3D Printing"],
    stats: [],
    hero: IMG + "cam-video-thumb.jpg",
    gallery: [
      { src: IMG + "cam-video-macro.mp4", type: "video", poster: IMG + "cam-video-macro-poster.jpg", caption: "Live macro-lens footage of the CAM assay" },
      { src: IMG + "cam-video-contour.mp4", type: "video", poster: IMG + "cam-video-contour-poster.jpg", caption: "OpenCV contour tracking — live bounding-box detection" },
      { src: IMG + "cam-tracking.jpg", caption: "OpenCV frame-difference tracking" },
      { src: IMG + "cam-hero.jpg", caption: "Quail CAM assay under the camera rig" },
      { src: IMG + "cam-camera-rig.jpg", caption: "GoPro + macro lens rig, 3D-printed mounts" },
      { src: IMG + "cam-sensor.jpg", caption: "Wyze camera used for continuous incubator monitoring" },
      { src: IMG + "cam-pixeldiff-chart.jpg", caption: "Pixel-diff signal across frames — motion/time-of-death detection" },
      { src: IMG + "cam-video-incubator.mp4", type: "video", poster: IMG + "cam-video-incubator-poster.jpg", caption: "Wyze incubator camera feed, overnight monitoring" }
    ],
    desc: [
      "Tested feasibility of camera-based monitoring for quail embryo / CAM assay drug-trial at cc-TDI.",
      "Built low-cost camera rigs from Wyze security cameras and GoPros, with 3D-printed mounts for both macro-lenses and incubator IR / visible lighting.",
      "Wrote Python / OpenCV image analysis to track embryo movement and monitor embryo health from frame-to-frame pixel change.",
      "The prototype helped give cc-TDI confidence in the approach to pursue it as a commercial product."
    ]
  },
  {
    id: "wind-up-toy",
    org: "Coursework",
    category: "Other",
    title: "Wind up Toy",
    tagline: "Dissected a wind-up toy in SolidWorks",
    tags: ["SolidWorks", "Animation", "Reverse Engineering"],
    stats: [],
    hero: IMG + "wind-up-toy-cad.jpg",
    gallery: [
      { src: IMG + "wind-up-toy-cad.gif", caption: "SolidWorks animation of the reassembled model" },
      { src: IMG + "wind-up-toy-photo.jpg", caption: "The toy, mid-teardown" },
      { src: IMG + "wind-up-toy-reference.jpg", caption: "Reference photo used for measurements" }
    ],
    desc: [
      "Disassembled a wind-up toy to measure and design each part in SolidWorks. Including gear ratios.",
      "Reassembled the toy model in a SolidWorks animation."
    ]
  },
  {
    id: "per-rookie",
    org: "Penn Electric Racing",
    category: "Penn Electric Racing",
    title: "Rookie Year: Fab, Composites & Renders",
    tagline: "Welding jigs, carbon-fiber layups, and Aero package renders",
    tags: ["SolidWorks", "Composites", "Keyshot", "Chassis jigs", "Carbon-fiber layups"],
    stats: [],
    hero: IMG + "per-rookie-full-car.jpg",
    gallery: [
      { src: IMG + "per-rookie-team.jpg", caption: "Wet-layup trip to Leading Edge Composites" },
      { src: IMG + "per-rookie-fea.jpg", caption: "Brake reservoir mounting tab FEA" },
      { src: IMG + "per-rookie-jig.jpg", caption: "MDF welding jig for chassis tabs" },
      { src: IMG + "per-rookie-full-car.jpg", caption: "Full car — Keyshot render" },
      { src: IMG + "per-rookie-vehicle-views.jpg", caption: "Vehicle views — top, side, and front" },
      { src: IMG + "per-rookie-hero.jpg", caption: "Rear wing, exploded carbon-fiber assembly render" }
    ],
    desc: [
      "Designed tabs and jigs in SolidWorks: MDF jigs for precise welding of chassis components.",
      "Learned FEA for my brake reservoir mounting tab.",
      "Traveled to our sponsor Leading Edge Composites to perform wet layups for the car's carbon-fiber body panels.",
      "Created formal design renders for the Aero package and full car in Keyshot, and built manufacturing cost reports and bills of materials for the team's Design and Cost presentation."
    ]
  }
];

/* ==========================================================================
   Render project grid
   ========================================================================== */

const grid = document.getElementById("projectsGrid");

PROJECTS.forEach((p, index) => {
  const tile = document.createElement("button");
  tile.className = "tile";
  tile.setAttribute("data-index", index);
  tile.setAttribute("data-category", p.category);
  tile.setAttribute("data-id", p.id);
  tile.innerHTML = `
    <img class="tile__img" src="${p.hero}" alt="${p.title}" loading="lazy">
    <div class="tile__scrim"></div>
    <div class="tile__content">
      <p class="tile__org">${p.org}</p>
      <h3 class="tile__title">${p.title}</h3>
      <p class="tile__tagline">${p.tagline} <span class="tile__tagline-arrow">&rarr;</span></p>
    </div>
  `;
  tile.addEventListener("click", () => openModal(index));
  grid.appendChild(tile);
});

/* ==========================================================================
   Project filter chips
   Click a chip to toggle it on/off. With one or more chips active, only
   tiles whose category matches ANY active chip stay visible (an "or"
   across chips, since they're all the same facet — which team/category a
   project belongs to). With none active, every tile shows. To add a new
   keyword later: add a matching <button class="filter-chip" data-filter="...">
   in index.html's #filterBar, and give the relevant PROJECTS entries that
   same string as their `category` — nothing else here needs to change.
   ========================================================================== */

const filterBar = document.getElementById("filterBar");
const activeFilters = new Set();

function applyFilters() {
  const tiles = grid.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    const show = activeFilters.size === 0 || activeFilters.has(tile.getAttribute("data-category"));
    tile.hidden = !show;
  });
}

if (filterBar) {
  filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.getAttribute("data-filter");
      const nowActive = !chip.classList.contains("is-active");
      chip.classList.toggle("is-active", nowActive);
      chip.setAttribute("aria-pressed", String(nowActive));
      if (nowActive) activeFilters.add(key);
      else activeFilters.delete(key);
      applyFilters();
    });
  });
}

/* ==========================================================================
   Modal
   ========================================================================== */

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const modalOrg = document.getElementById("modalOrg");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalStats = document.getElementById("modalStats");
const modalDesc = document.getElementById("modalDesc");
const galDots = document.getElementById("galDots");

let activeProject = null;
let activeImage = 0;

function openModal(index) {
  activeProject = PROJECTS[index];
  activeImage = 0;
  modalOrg.textContent = activeProject.org;
  modalTitle.textContent = activeProject.title;
  modalTags.innerHTML = activeProject.tags.map(t => `<span>${t}</span>`).join("");
  modalStats.innerHTML = activeProject.stats.map(s => `<span>${s}</span>`).join("");
  modalStats.style.display = activeProject.stats.length ? "" : "none";
  modalDesc.innerHTML = activeProject.desc.map(d => `<p>${d}</p>`).join("");
  renderDots();
  showImage(0);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalVideo.pause();
}

function showImage(i) {
  if (!activeProject) return;
  const total = activeProject.gallery.length;
  activeImage = (i + total) % total;
  const item = activeProject.gallery[activeImage];
  modalVideo.pause();
  if (item.type === "video") {
    modalImage.hidden = true;
    modalImage.src = "";
    modalVideo.hidden = false;
    modalVideo.poster = item.poster || "";
    modalVideo.src = item.src;
    modalVideo.setAttribute("aria-label", item.caption || activeProject.title);
  } else {
    modalVideo.hidden = true;
    modalVideo.src = "";
    modalImage.hidden = false;
    modalImage.src = item.src;
    modalImage.alt = item.caption || activeProject.title;
  }
  [...galDots.children].forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === activeImage);
  });
}

function renderDots() {
  galDots.innerHTML = "";
  if (!activeProject || activeProject.gallery.length < 2) return;
  activeProject.gallery.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", (e) => { e.stopPropagation(); showImage(idx); });
    galDots.appendChild(dot);
  });
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.getElementById("galPrev").addEventListener("click", () => showImage(activeImage - 1));
document.getElementById("galNext").addEventListener("click", () => showImage(activeImage + 1));

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") showImage(activeImage - 1);
  if (e.key === "ArrowRight") showImage(activeImage + 1);
});

/* ==========================================================================
   Resume modal
   ========================================================================== */

const resumeModal = document.getElementById("resumeModal");

function openResumeModal() {
  resumeModal.classList.add("is-open");
  resumeModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  resumeModal.classList.remove("is-open");
  resumeModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("resumeModalClose").addEventListener("click", closeResumeModal);
document.getElementById("resumeModalBackdrop").addEventListener("click", closeResumeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && resumeModal.classList.contains("is-open")) closeResumeModal();
});

// The "Resume" links in the nav and hero point at resume.html as a real,
// shareable page (and that's what a middle-click / cmd-click / right-click
// "open in new tab" will still use) — but a plain left-click opens the PDF
// right here in a modal instead, so it always works without relying on a
// second page loading inside whatever is hosting this preview.
function wireResumeLink(id) {
  const link = document.getElementById(id);
  if (!link) return;
  link.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    openResumeModal();
  });
}
wireResumeLink("navResumeLink");
wireResumeLink("heroResumeLink");

/* ==========================================================================
   Nav: scroll shadow + mobile toggle
   ========================================================================== */

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

/* Theme toggle itself is wired up by assets/theme-toggle.js (shared with
   resume.html) — nothing to do here. */

/* ==========================================================================
   Toast (small feedback bubble, e.g. "Copied ...")
   ========================================================================== */

const toast = document.getElementById("toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

/* ==========================================================================
   Email / phone icons: click (the icon, or the text in its hover popover)
   copies the value to the clipboard
   ========================================================================== */

const EMAIL_DISPLAY = "wrinnbc@engineering.upenn.edu";
const PHONE_DISPLAY = "+1 (503) 810-1656";

function copyToClipboard(value) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(value).then(() => showToast("Copied " + value));
  }
}

const copyEmail = () => copyToClipboard(EMAIL_DISPLAY);
const copyPhone = () => copyToClipboard(PHONE_DISPLAY);

document.getElementById("emailBtn").addEventListener("click", copyEmail);
document.getElementById("emailPopoverBtn").addEventListener("click", copyEmail);
document.getElementById("phoneBtn").addEventListener("click", copyPhone);
document.getElementById("phonePopoverBtn").addEventListener("click", copyPhone);

const contactEmailBtn = document.getElementById("contactEmailBtn");
const contactEmailPopoverBtn = document.getElementById("contactEmailPopoverBtn");
const contactPhoneBtn = document.getElementById("contactPhoneBtn");
const contactPhonePopoverBtn = document.getElementById("contactPhonePopoverBtn");
if (contactEmailBtn) contactEmailBtn.addEventListener("click", copyEmail);
if (contactEmailPopoverBtn) contactEmailPopoverBtn.addEventListener("click", copyEmail);
if (contactPhoneBtn) contactPhoneBtn.addEventListener("click", copyPhone);
if (contactPhonePopoverBtn) contactPhonePopoverBtn.addEventListener("click", copyPhone);

/* ==========================================================================
   Civilian life slideshow + lightbox
   Captions are placeholders ("placeholder1", "placeholder2", ...) until real
   captions are written — just update the `caption` field per photo below.
   ========================================================================== */

const CIVIL_PHOTOS = [
  { src: IMG + "ben-contact.jpg", caption: "Tap the arrows for more" },
  { src: IMG + "civil-1.jpg" },
  { src: IMG + "civil-2.jpg" },
  { src: IMG + "civil-3.jpg" },
  { src: IMG + "civil-4.jpg" },
  { src: IMG + "civil-5.jpg" },
  { src: IMG + "civil-6.jpg" },
  { src: IMG + "civil-7.jpg" },
  { src: IMG + "civil-8.jpg" },
  { src: IMG + "civil-9.jpg" }
].map((p, i) => ({ ...p, caption: p.caption || "placeholder" + (i + 1) }));

let civilIndex = 0;

const civilImage = document.getElementById("civilImage");
const civilCaption = document.getElementById("civilCaption");
const civilPrev = document.getElementById("civilPrev");
const civilNext = document.getElementById("civilNext");
const civilSlideBtn = document.getElementById("civilSlideBtn");

const civilLightbox = document.getElementById("civilLightbox");
const civilLightboxImage = document.getElementById("civilLightboxImage");
const civilLightboxCaption = document.getElementById("civilLightboxCaption");
const civilLightboxPrev = document.getElementById("civilLightboxPrev");
const civilLightboxNext = document.getElementById("civilLightboxNext");
const civilLightboxClose = document.getElementById("civilLightboxClose");
const civilLightboxBackdrop = document.getElementById("civilLightboxBackdrop");

function renderCivilSlide() {
  const total = CIVIL_PHOTOS.length;
  civilIndex = (civilIndex + total) % total;
  const item = CIVIL_PHOTOS[civilIndex];
  civilImage.src = item.src;
  civilImage.alt = item.caption;
  civilCaption.textContent = item.caption;
  if (civilLightbox.classList.contains("is-open")) {
    renderCivilLightbox();
  }
}

function renderCivilLightbox() {
  const item = CIVIL_PHOTOS[civilIndex];
  civilLightboxImage.src = item.src;
  civilLightboxImage.alt = item.caption;
  civilLightboxCaption.textContent = item.caption;
}

function openCivilLightbox() {
  renderCivilLightbox();
  civilLightbox.classList.add("is-open");
  civilLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCivilLightbox() {
  civilLightbox.classList.remove("is-open");
  civilLightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (civilSlideBtn) {
  civilPrev.addEventListener("click", () => { civilIndex--; renderCivilSlide(); });
  civilNext.addEventListener("click", () => { civilIndex++; renderCivilSlide(); });
  civilSlideBtn.addEventListener("click", openCivilLightbox);

  civilLightboxClose.addEventListener("click", closeCivilLightbox);
  civilLightboxBackdrop.addEventListener("click", closeCivilLightbox);
  civilLightboxPrev.addEventListener("click", () => { civilIndex--; renderCivilSlide(); });
  civilLightboxNext.addEventListener("click", () => { civilIndex++; renderCivilSlide(); });

  document.addEventListener("keydown", (e) => {
    if (!civilLightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeCivilLightbox();
    if (e.key === "ArrowLeft") { civilIndex--; renderCivilSlide(); }
    if (e.key === "ArrowRight") { civilIndex++; renderCivilSlide(); }
  });

  renderCivilSlide();
}

/* ==========================================================================
   Misc
   ========================================================================== */

document.getElementById("year").textContent = new Date().getFullYear();
