// ── Render Skills ──────────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = DATA.skills
    .map(
      (s) => `
    <div class="skill-card reveal">
      <div class="skill-icon">${s.icon}</div>
      <h3 class="skill-cat">${s.category}</h3>
      <ul class="skill-list">
        ${s.items.map((i) => `<li>${i}</li>`).join("")}
      </ul>
    </div>`
    )
    .join("");
}

// ── Render Projects ─────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = DATA.projects
    .map(
      (p, idx) => `
    <div class="project-card reveal" style="--accent:${p.color}">
      <div class="project-header">
        <span class="project-emoji">${p.emoji}</span>
        <span class="project-period">${p.period}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <ul class="project-highlights">
        ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <div class="project-stack">
        ${p.stack.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

// ── Render Education ────────────────────────────────────────
function renderEducation() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = DATA.education
    .map(
      (e, i) => `
    <div class="tl-item reveal" style="--i:${i}">
      <div class="tl-year">${e.year}</div>
      <div class="tl-dot"></div>
      <div class="tl-content">
        <div class="tl-degree">${e.degree}</div>
        <div class="tl-inst">${e.institution}</div>
        <div class="tl-score">${e.score}</div>
      </div>
    </div>`
    )
    .join("");
}

// ── Render Activities ───────────────────────────────────────
function renderActivities() {
  const grid = document.getElementById("activities-grid");
  grid.innerHTML = DATA.activities
    .map(
      (a) => `
    <div class="activity-card reveal">
      <span class="activity-icon">${a.icon}</span>
      <div>
        <div class="activity-title">${a.title}</div>
        <div class="activity-sub">${a.sub}</div>
      </div>
    </div>`
    )
    .join("");
}

// ── Scroll Reveal ───────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  els.forEach((el) => obs.observe(el));
}

// ── Sticky Nav ──────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Hamburger
  const ham = document.getElementById("hamburger");
  const links = document.querySelector(".nav-links");
  ham.addEventListener("click", () => {
    ham.classList.toggle("open");
    links.classList.toggle("open");
  });

  // Close on link click
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", () => {
      ham.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

// ── Active Nav Link on scroll ───────────────────────────────
function initActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 80;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.classList.toggle("active", scrollY >= top && scrollY < top + height);
      }
    });
  });
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderEducation();
  renderActivities();
  initReveal();
  initNav();
  initActiveLinks();

  // Re-observe newly added .reveal elements
  setTimeout(() => {
    initReveal();
  }, 100);
});
