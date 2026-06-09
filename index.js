// ===========================
//  PDKVCET — script.js
// ===========================

// ── Navbar scroll effect ──────────────────────────────────────────
const nav = document.getElementById('navbar');
const ham = document.getElementById('ham');
const nl  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// ── Mobile hamburger ──────────────────────────────────────────────
ham.addEventListener('click', () => nl.classList.toggle('open'));

// ── Active nav link on scroll ─────────────────────────────────────
document.querySelectorAll('section[id]').forEach(section => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.3 }).observe(section);
});

// ── Stats counter animation ───────────────────────────────────────
function animCount(el, target, suffix) {
  let c = 0;
  const step = Math.ceil(target / 60);
  const iv = setInterval(() => {
    c += step;
    if (c >= target) { c = target; clearInterval(iv); }
    el.querySelector('.snum').textContent = c.toLocaleString() + suffix;
  }, 25);
}

const sobs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animCount(e.target, +e.target.dataset.count, e.target.dataset.suffix || '');
      sobs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(c => sobs.observe(c));

// ── Fade-in on scroll ─────────────────────────────────────────────
const fobs = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), i * 70);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade').forEach(el => fobs.observe(el));

// ── Smooth scroll for anchor links ───────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nl.classList.remove('open');
    }
  });
});