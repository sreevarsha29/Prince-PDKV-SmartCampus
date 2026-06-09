// ===========================
//  PDKVCET — Academics.js
// ===========================

// ── Navbar scroll effect ──────────────────────────────────────────
const nav = document.getElementById('navbar');
const ham = document.getElementById('ham');
const nl  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile hamburger ──────────────────────────────────────────────
ham.addEventListener('click', () => nl.classList.toggle('open'));

// ── Filter tabs ───────────────────────────────────────────────────
const tabs    = document.querySelectorAll('.tab');
const cards   = document.querySelectorAll('.course-card');
const noRes   = document.getElementById('noResults');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    let visible = 0;

    cards.forEach((card, i) => {
      const match = filter === 'all' || card.dataset.cat === filter;
      if (match) {
        card.classList.remove('hidden');
        // Staggered re-fade
        card.classList.remove('show');
        setTimeout(() => card.classList.add('show'), i * 60);
        visible++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('show');
      }
    });

    noRes.style.display = visible === 0 ? 'block' : 'none';
  });
});

// ── Fade-in on scroll ─────────────────────────────────────────────
const fobs = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), i * 80);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade').forEach(el => fobs.observe(el));