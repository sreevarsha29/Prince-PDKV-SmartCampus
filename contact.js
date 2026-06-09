/* ═══════════════════════════════════════════
   PDKVCET — contact.js
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────
     1. HAMBURGER MENU (Mobile)
  ───────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });


  /* ─────────────────────────────────────────
     2. DEPARTMENT TABS
  ───────────────────────────────────────── */
  const deptTabs    = document.querySelectorAll('.dtab');
  const selectedDept = document.getElementById('selectedDept');

  deptTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deptTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      selectedDept.value = tab.dataset.dept;
    });
  });


  /* ─────────────────────────────────────────
     3. PRIORITY CHIPS
  ───────────────────────────────────────── */
  const pchips = document.querySelectorAll('.pchip');
  let selectedPriority = '';

  pchips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      // Remove all priority classes
      pchips.forEach(function (c) {
        c.classList.remove('p-low', 'p-medium', 'p-high');
      });

      selectedPriority = chip.dataset.val;

      const classMap = { Low: 'p-low', Medium: 'p-medium', High: 'p-high' };
      chip.classList.add(classMap[selectedPriority]);
    });
  });


  /* ─────────────────────────────────────────
     4. CHARACTER COUNTER (Message box)
  ───────────────────────────────────────── */
  const messageBox = document.getElementById('message');
  const charCount  = document.getElementById('charCount');

  messageBox.addEventListener('input', function () {
    const len = messageBox.value.length;
    charCount.textContent = len + ' / 500';

    if (len > 480) {
      charCount.style.color = '#dc2626';
    } else {
      charCount.style.color = '';
    }
  });


  /* ─────────────────────────────────────────
     5. FORM VALIDATION & SUBMISSION
  ───────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');
  const formError   = document.getElementById('formError');
  const formBox     = document.getElementById('formBox');
  const successBox  = document.getElementById('successBox');
  const ticketEl    = document.getElementById('ticketId');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    hideError();

    // Gather values
    const fName   = document.getElementById('fName').value.trim();
    const lName   = document.getElementById('lName').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    // Validate required fields
    if (!fName) {
      return showError('Please enter your first name.');
    }
    if (!lName) {
      return showError('Please enter your last name.');
    }
    if (!email) {
      return showError('Please enter your email address.');
    }
    if (!isValidEmail(email)) {
      return showError('Please enter a valid email address (e.g. name@example.com).');
    }
    if (!subject) {
      return showError('Please enter a subject for your message.');
    }
    if (!message) {
      return showError('Please enter your message before submitting.');
    }
    if (message.length < 10) {
      return showError('Your message is too short. Please provide more detail.');
    }
    if (!consent) {
      return showError('Please agree to our privacy policy to continue.');
    }

    // All good — simulate sending
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="0"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur=".8s" repeatCount="indefinite"/></circle></svg> Sending…';

    setTimeout(function () {
      const ticket = generateTicketId();
      ticketEl.textContent = ticket;
      formBox.style.display  = 'none';
      successBox.classList.add('show');
      window.scrollTo({ top: successBox.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
    }, 1300);
  });


  /* ─────────────────────────────────────────
     6. CLEAR FORM BUTTON
  ───────────────────────────────────────── */
  document.getElementById('clearBtn').addEventListener('click', function () {
    resetFormState();
  });


  /* ─────────────────────────────────────────
     7. BACK TO FORM (from success state)
  ───────────────────────────────────────── */
  document.getElementById('backBtn').addEventListener('click', function () {
    resetFormState();
    successBox.classList.remove('show');
    formBox.style.display = '';
  });


  /* ─────────────────────────────────────────
     8. FAQ ACCORDION
  ───────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const btn    = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');

    // Wrap inner content for animation
    const inner = document.createElement('div');
    inner.className = 'faq-answer-inner';
    inner.innerHTML = answer.innerHTML;
    answer.innerHTML = '';
    answer.appendChild(inner);

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(function (fi) { fi.classList.remove('open'); });

      // Open clicked (if it wasn't already open)
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });


  /* ─────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────── */

  function showError(msg) {
    formError.textContent = '⚠ ' + msg;
    formError.classList.add('show');
    formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hideError() {
    formError.classList.remove('show');
    formError.textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function generateTicketId() {
    const num = Math.floor(100000 + Math.random() * 900000);
    return 'PDKV-' + num;
  }

  function resetFormState() {
    contactForm.reset();
    charCount.textContent = '0 / 500';
    charCount.style.color = '';

    // Reset priority chips
    pchips.forEach(function (c) {
      c.classList.remove('p-low', 'p-medium', 'p-high');
    });
    selectedPriority = '';

    // Reset dept tabs
    deptTabs.forEach(function (t) { t.classList.remove('active'); });
    deptTabs[0].classList.add('active');
    selectedDept.value = deptTabs[0].dataset.dept;

    // Reset submit button
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';

    hideError();
  }

});