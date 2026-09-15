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
    stats: ["7.2 × 4.5 × 3 ft", "2.75 tons", "240 kWh / 120 kW"],
    hero: IMG + "vero-enclosure-hero.jpg",
    gallery: [
      { src: IMG + "vero-enclosure-hero.jpg", caption: "Enclosure interior, door open — 5-module battery stack" },
      { src: IMG + "vero-enclosure-front.jpg", caption: "Closed enclosure, front view" },
      { src: IMG + "vero-enclosure-internal.jpg", caption: "Top-down internal layout" },
      { src: IMG + "vero-enclosure-cutaway.jpg", caption: "Internal cutaway with battery + electronics bays" },
      { src: IMG + "vero-enclosure-fea.jpg", caption: "Front door panel FEA — von Mises stress" },
      { src: IMG + "vero-enclosure-thermal-chart.jpg", caption: "Panel temperature comparison across shielding configurations" }
    ],
    desc: [
      "Designed a 240 kWh / 120 kW battery energy storage system (BESS) enclosure for Powertown, a Harvard-based energy storage startup.",
      "Used thermal simulation and FEA to drive design decisions — including thermal shielding panels and panel stiffening — validating that shielded panel temperatures ran well below unshielded and insulated configurations.",
      "Produced investor-facing CAD renders and a custom high-voltage box, still in development."
    ]
  },
  {
    id: "vero-board",
    org: "Vero Electric",
    category: "Vero Electric",
    title: "BMS & CAN Bus Board Design",
    tagline: "4-layer, 64-series-cell BMS node PCB designed in KiCad",
    tags: ["PCB Design", "KiCad", "High-Voltage", "4-Layer"],
    stats: ["64S BMS Node", "4× BQ79616", "4-Layer PCB"],
    hero: IMG + "vero-board-hero.jpg",
    gallery: [
      { src: IMG + "vero-board-hero.jpg", caption: "BMS Node v1.1 — four-board strip, assembled" },
      { src: IMG + "vero-board-bms-layout.jpg", caption: "KiCad routing — BMS Node v1.1" },
      { src: IMG + "vero-board-can-photo.jpg", caption: "CAN Consolidator board, assembled" },
      { src: IMG + "vero-board-can-layout.jpg", caption: "KiCad routing — CAN Consolidator v1.2" }
    ],
    desc: [
      "Designed a 4-layer, high-voltage BMS Node PCB in KiCad, using four BQ79616 battery-monitor ICs to cover 64 series cells.",
      "Designed a simple CAN bus consolidator / breakout board for the enclosure's EMS, with differential-pair routing and a center-hub layout.",
      "Both boards were fabricated, hand-assembled, and bring-up tested."
    ]
  },
  {
    id: "dynamometer",
    org: "Penn Electric Racing",
    category: "Penn Electric Racing",
    title: "Regen-Capable Dynamometer",
    tagline: "Custom brake-absorption dyno for gearbox validation",
    tags: ["Mechanical Design", "Powertrain", "Ongoing"],
    stats: ["500 N·m shaft torque", "20,000 RPM max"],
    hero: IMG + "per-dyno-hero.jpg",
    gallery: [
      { src: IMG + "per-dyno-hero.jpg", caption: "Brake-absorption dynamometer — CAD assembly" }
    ],
    desc: [
      "Designing a custom, brake-absorption dynamometer for design validation and gearbox wear-in testing on Penn Electric Racing's FSAE-Electric powertrain.",
      "Mechanical design supports future regenerative-braking testing and gearbox changes without a full rebuild.",
      "Sized to accommodate max loads of 500 N·m shaft torque at 20,000 RPM."
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
      { src: IMG + "arc-board-red.jpg", caption: "Flight computer layout, rev. A" },
      { src: IMG + "arc-board-green.jpg", caption: "Flight computer layout, rev. B" },
      { src: IMG + "arc-board-gold.jpg", caption: "Flight computer layout, rev. C" },
      { src: IMG + "arc-board-blue.jpg", caption: "Flight computer layout, rev. D" },
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
    tags: ["Rapid Prototyping", "OpenCV", "Python", "3D Printing"],
    stats: ["OpenCV + Python", "3D-printed macro mounts"],
    hero: IMG + "cam-hero.jpg",
    gallery: [
      { src: IMG + "cam-hero.jpg", caption: "Quail CAM assay under the camera rig" },
      { src: IMG + "cam-camera-rig.jpg", caption: "GoPro + macro lens rig, 3D-printed mounts" },
      { src: IMG + "cam-sensor.jpg", caption: "Wyze camera used for continuous incubator monitoring" },
      { src: IMG + "cam-tracking.jpg", caption: "OpenCV frame-difference tracking" }
    ],
    desc: [
      "Tested the feasibility of camera-based monitoring for quail CAM (chorioallantoic membrane) drug-trial assays at cc-TDI.",
      "Built low-cost camera rigs from Wyze security cameras and GoPros, with 3D-printed macro-lens mounts and visible / IR lighting inside the incubator.",
      "Wrote Python / OpenCV image analysis to track embryo movement and estimate time of death from frame-to-frame pixel change.",
      "The prototype gave cc-TDI enough confidence in the approach to pursue it as a commercial product."
    ]
  },
  {
    id: "per-rookie",
    org: "Penn Electric Racing",
    category: "Penn Electric Racing",
    title: "Rookie Year: Fab, Composites & Renders",
    tagline: "Welding jigs, carbon-fiber layups, and Aero package renders",
    tags: ["SolidWorks", "Composites", "Keyshot", "Rookie Year"],
    stats: ["Chassis jigs", "Carbon-fiber layups", "Keyshot renders"],
    hero: IMG + "per-rookie-hero.jpg",
    gallery: [
      { src: IMG + "per-rookie-hero.jpg", caption: "Rear wing, exploded carbon-fiber assembly render" },
      { src: IMG + "per-rookie-team.jpg", caption: "Wet-layup trip to Leading Edge Composites" },
      { src: IMG + "per-rookie-fea.jpg", caption: "Suspension control-arm tab FEA" },
      { src: IMG + "per-rookie-suspension.jpg", caption: "Transparent render highlighting suspension geometry" },
      { src: IMG + "per-rookie-jig.jpg", caption: "MDF welding jig for chassis tabs" }
    ],
    desc: [
      "First-year rookie work on Penn Electric Racing's FSAE-Electric car: designed tabs and jigs in SolidWorks — including an MDF jig for precise welding — to connect and weld chassis components.",
      "Traveled to sponsor Leading Edge Composites to perform wet layups of the car's carbon-fiber body panels.",
      "Created formal design renders for the Aero package and full car in Keyshot, and built manufacturing cost reports and bills of materials for the team's Design and Cost presentation.",
      "Ran suspension control-arm tab FEA to support the mechanical design."
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
  tile.innerHTML = `
    <img class="tile__img" src="${p.hero}" alt="${p.title}" loading="lazy">
    <div class="tile__scrim"></div>
    <div class="tile__content">
      <p class="tile__org">${p.org}</p>
      <h3 class="tile__title">${p.title}</h3>
      <p class="tile__tagline">${p.tagline}</p>
      <span class="tile__cue">View case study &rarr;</span>
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
}

function showImage(i) {
  if (!activeProject) return;
  const total = activeProject.gallery.length;
  activeImage = (i + total) % total;
  const item = activeProject.gallery[activeImage];
  modalImage.src = item.src;
  modalImage.alt = item.caption || activeProject.title;
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

/* ==========================================================================
   Misc
   ========================================================================== */

document.getElementById("year").textContent = new Date().getFullYear();
