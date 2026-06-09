/* ==============================
   SCROLL PROGRESS & NAVBAR
   ============================== */
const scrollProgress = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = pct + '%';
  navbar.classList.toggle('scrolled', scrollTop > 40);
});

/* ==============================
   HAMBURGER MENU
   ============================== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ==============================
   COUNTER ANIMATION (HERO STATS)
   ============================== */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  });
}

// Trigger when hero comes into view
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounters(); heroObserver.disconnect(); } });
}, { threshold: 0.3 });
heroObserver.observe(document.querySelector('.hero-stats'));

/* ==============================
   TABS
   ============================== */
function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

/* ==============================
   SCROLL TO FORM
   ============================== */
function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

/* ==============================
   ELIGIBILITY CHECKER
   ============================== */
function checkEligibility() {
  const level = document.getElementById('progLevel').value;
  const pct   = parseFloat(document.getElementById('marksPct').value);
  const result = document.getElementById('checkerResult');

  if (!level || isNaN(pct)) {
    result.className = 'checker-result ineligible';
    result.textContent = '⚠️ Please select a programme level and enter your percentage.';
    return;
  }

  const thresholds = { ug: 50, pg: 55, phd: 60 };
  const required = thresholds[level];
  const labels   = { ug: 'UG (Under Graduate)', pg: 'PG (Post Graduate)', phd: 'PhD / Research' };

  if (pct >= required) {
    result.className = 'checker-result eligible';
    result.textContent = `✅ You are ELIGIBLE for ${labels[level]} programmes! Your ${pct}% meets the minimum ${required}% requirement. Proceed to apply!`;
  } else {
    result.className = 'checker-result ineligible';
    result.textContent = `❌ Your ${pct}% does not meet the minimum ${required}% required for ${labels[level]} programmes. You may qualify for diploma programmes or check other universities.`;
  }
}

/* ==============================
   DOCUMENT TRACKER
   ============================== */
function toggleDoc(el) {
  el.classList.toggle('checked');
  updateDocProgress();
}

function updateDocProgress() {
  const total   = document.querySelectorAll('.doc-item').length;
  const checked = document.querySelectorAll('.doc-item.checked').length;
  const pct = (checked / total) * 100;
  document.getElementById('docBar').style.width = pct + '%';
  document.getElementById('docProgress').textContent = `${checked} / ${total} documents marked ready`;
}

/* ==============================
   GRADE BADGE
   ============================== */
function updateGrade(inputId, badgeId) {
  const val   = parseFloat(document.getElementById(inputId).value);
  const badge = document.getElementById(badgeId);
  if (isNaN(val) || val < 0 || val > 100) { badge.textContent = '—'; badge.style.background = ''; return; }
  let grade, bg;
  if (val >= 90)      { grade = 'A+'; bg = '#d1fae5'; }
  else if (val >= 75) { grade = 'A';  bg = '#dbeafe'; }
  else if (val >= 60) { grade = 'B';  bg = '#fef9c3'; }
  else if (val >= 50) { grade = 'C';  bg = '#fed7aa'; }
  else                { grade = 'D';  bg = '#fecaca'; }
  badge.textContent = grade;
  badge.style.background = bg;
}

/* ==============================
   AGE CALCULATOR
   ============================== */
function calcAge() {
  const dob = new Date(document.getElementById('dob').value);
  if (isNaN(dob)) return;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  document.getElementById('ageDisplay').textContent = age > 0 ? `Age: ${age} years` : '';
}

/* ==============================
   FIELD VALIDATION
   ============================== */
function validateField(input) {
  const id    = input.id;
  const value = input.value.trim();
  const errEl = document.getElementById(`err-${id}`);

  let valid = true;
  let msg   = '';

  if (id === 'email') {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value)) { valid = false; msg = 'Enter a valid email address'; }
  } else if (id === 'mobile') {
    if (!/^\d{10}$/.test(value)) { valid = false; msg = 'Enter a valid 10-digit mobile number'; }
  } else if (value.length < 2) {
    valid = false; msg = 'This field is required';
  }

  input.classList.toggle('valid', valid && value.length > 0);
  input.classList.toggle('invalid', !valid && value.length > 0);
  if (errEl) errEl.textContent = valid ? '' : msg;
  return valid;
}

/* ==============================
   PHOTO PREVIEW
   ============================== */
function previewPhoto(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const zone = document.getElementById('photoZone');
      zone.innerHTML = `<img src="${e.target.result}" style="width:80px;height:80px;object-fit:cover;border-radius:50%;border:3px solid var(--blue-300);"/><p id="photoLabel" style="margin-top:0.4rem;font-size:0.75rem;color:var(--blue-600);">✓ Photo uploaded</p><input type="file" id="photoFile" accept="image/*" style="display:none" onchange="previewPhoto(this)"/>`;
      zone.onclick = () => document.getElementById('photoFile').click();
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/* ==============================
   COURSE DROPDOWN
   ============================== */
const courses = {
  ug:      ['B.A (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)', 'BCA', 'BBA', 'B.Tech (CSE)', 'B.Tech (ECE)', 'B.Tech (Mech)', 'B.Arch'],
  pg:      ['M.A', 'M.Sc', 'M.Com', 'MCA', 'MBA', 'M.Tech (CSE)', 'M.Tech (ECE)', 'M.Arch'],
  phd:     ['Ph.D (Science)', 'Ph.D (Commerce)', 'Ph.D (Humanities)', 'Ph.D (Engineering)', 'M.Phil'],
  diploma: ['Diploma in IT', 'Diploma in Electronics', 'Diploma in Business', 'Certificate in Graphic Design'],
};

function updateCourses() {
  const level = document.getElementById('progLevelForm').value;
  const sel1  = document.getElementById('courseSelect');
  const sel2  = document.getElementById('course2nd');
  const list  = courses[level] || [];

  sel1.innerHTML = list.length
    ? list.map(c => `<option value="${c}">${c}</option>`).join('')
    : '<option value="">— Select Programme Level first —</option>';

  sel2.innerHTML = '<option value="">No second preference</option>' +
    list.map(c => `<option value="${c}">${c}</option>`).join('');
}

/* ==============================
   TOGGLE LABELS
   ============================== */
document.getElementById('hostelToggle').addEventListener('change', function () {
  document.getElementById('hostelLabel').textContent = this.checked ? 'Yes' : 'No';
});
document.getElementById('scholarToggle').addEventListener('change', function () {
  document.getElementById('scholarLabel').textContent = this.checked ? 'Yes' : 'No';
});

/* ==============================
   SOP CHARACTER COUNT
   ============================== */
function updateSopCount() {
  const sop   = document.getElementById('sop');
  const count = document.getElementById('sopCount');
  count.textContent = `${sop.value.length} / 500`;
  count.style.color = sop.value.length > 450 ? 'var(--warning)' : 'var(--gray-400)';
}

/* ==============================
   MULTI-STEP FORM
   ============================== */
let currentStep = 1;
const totalSteps = 4;

function changeStep(dir) {
  if (dir === 1 && currentStep < totalSteps) {
    if (!validateStep(currentStep)) return;
    setStep(currentStep + 1);
  } else if (dir === -1 && currentStep > 1) {
    setStep(currentStep - 1);
  }
}

function setStep(step) {
  // Hide current
  document.getElementById(`step${currentStep}`).classList.remove('active');
  document.querySelector(`.step-item[data-step="${currentStep}"]`).classList.remove('active');
  document.querySelector(`.step-item[data-step="${currentStep}"]`).classList.add('done');
  document.querySelector(`.step-item[data-step="${currentStep}"] .step-circle`).textContent = '✓';

  currentStep = step;

  // Show new
  document.getElementById(`step${currentStep}`).classList.add('active');
  document.querySelectorAll('.step-item').forEach((el, i) => {
    if (parseInt(el.dataset.step) === currentStep) {
      el.classList.add('active');
      el.classList.remove('done');
      el.querySelector('.step-circle').textContent = currentStep;
    }
  });

  // Update step lines
  document.querySelectorAll('.step-line').forEach((line, i) => {
    line.classList.toggle('done', i < currentStep - 1);
  });

  // Update indicator & buttons
  document.getElementById('stepIndicator').textContent = `Step ${currentStep} of ${totalSteps}`;
  document.getElementById('prevBtn').style.display  = currentStep > 1 ? 'inline-block' : 'none';
  document.getElementById('nextBtn').style.display  = currentStep < totalSteps ? 'inline-block' : 'none';

  // Populate review on step 4
  if (currentStep === 4) populateReview();

  // Generate captcha on step 4
  if (currentStep === 4) refreshCaptcha();

  // Scroll to form top
  document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ==============================
   STEP VALIDATION
   ============================== */
function validateStep(step) {
  if (step === 1) {
    const fields = ['firstName', 'lastName', 'email', 'mobile'];
    let allValid = true;
    fields.forEach(f => {
      const el = document.getElementById(f);
      if (!validateField(el)) allValid = false;
    });
    if (!allValid) {
      shakeCard();
      return false;
    }
  }
  return true;
}

function shakeCard() {
  const card = document.querySelector('.form-card');
  card.style.animation = 'shake 0.4s ease';
  setTimeout(() => card.style.animation = '', 400);
}

// Shake keyframe injected via JS
const style = document.createElement('style');
style.textContent = `@keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-6px)} 40%,80%{transform:translateX(6px)} }`;
document.head.appendChild(style);

/* ==============================
   POPULATE REVIEW
   ============================== */
function populateReview() {
  const get = (id) => document.getElementById(id)?.value?.trim() || '—';
  const mode = document.querySelector('input[name="mode"]:checked')?.value || '—';

  const html = `
    <div class="review-group">
      <h4>Personal Information</h4>
      <div class="review-row"><span>Full Name</span><strong>${get('firstName')} ${get('lastName')}</strong></div>
      <div class="review-row"><span>Date of Birth</span><strong>${get('dob') || '—'}</strong></div>
      <div class="review-row"><span>Gender</span><strong>${get('gender')}</strong></div>
      <div class="review-row"><span>Email</span><strong>${get('email')}</strong></div>
      <div class="review-row"><span>Mobile</span><strong>${get('mobile')}</strong></div>
      <div class="review-row"><span>Category</span><strong>${get('category') || 'General'}</strong></div>
    </div>
    <div class="review-group">
      <h4>Academic Details</h4>
      <div class="review-row"><span>10th School</span><strong>${get('school10')}</strong></div>
      <div class="review-row"><span>10th Board</span><strong>${get('board10')}</strong></div>
      <div class="review-row"><span>10th Percentage</span><strong>${get('pct10')}%</strong></div>
      <div class="review-row"><span>12th College</span><strong>${get('school12')}</strong></div>
      <div class="review-row"><span>12th Stream</span><strong>${get('stream12')}</strong></div>
      <div class="review-row"><span>12th Percentage</span><strong>${get('pct12')}%</strong></div>
      <div class="review-row"><span>Entrance Exam</span><strong>${get('entranceExam')} ${get('entranceScore') !== '—' ? '– ' + get('entranceScore') : ''}</strong></div>
    </div>
    <div class="review-group">
      <h4>Programme Choice</h4>
      <div class="review-row"><span>Level</span><strong>${get('progLevelForm').toUpperCase()}</strong></div>
      <div class="review-row"><span>1st Choice</span><strong>${get('courseSelect')}</strong></div>
      <div class="review-row"><span>2nd Choice</span><strong>${get('course2nd') || 'None'}</strong></div>
      <div class="review-row"><span>Mode</span><strong>${mode}</strong></div>
      <div class="review-row"><span>Hostel</span><strong>${document.getElementById('hostelToggle').checked ? 'Yes' : 'No'}</strong></div>
      <div class="review-row"><span>Scholarship</span><strong>${document.getElementById('scholarToggle').checked ? 'Applied' : 'No'}</strong></div>
    </div>
  `;
  document.getElementById('reviewContent').innerHTML = html;
}

/* ==============================
   CAPTCHA
   ============================== */
let captchaCode = '';

function refreshCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  captchaCode = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  document.getElementById('captchaDisplay').textContent = captchaCode;
  document.getElementById('captchaInput').value = '';
}

/* ==============================
   TOGGLE SUBMIT BUTTON
   ============================== */
function toggleSubmit() {
  const declared = document.getElementById('declarationCheck').checked;
  document.getElementById('submitBtn').disabled = !declared;
}

/* ==============================
   FORM SUBMIT
   ============================== */
function submitForm() {
  const captchaInput = document.getElementById('captchaInput').value.toUpperCase().trim();
  if (captchaInput !== captchaCode) {
    const captchaEl = document.getElementById('captchaInput');
    captchaEl.style.borderColor = 'var(--error)';
    captchaEl.style.background = '#fef2f2';
    captchaEl.placeholder = '❌ Incorrect code — try again';
    refreshCaptcha();
    setTimeout(() => {
      captchaEl.style.borderColor = '';
      captchaEl.style.background = '';
      captchaEl.placeholder = 'Enter the code above';
    }, 2000);
    return;
  }

  // Generate Application ID
  const appId = 'EP-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('appId').textContent = appId;
  document.getElementById('successModal').classList.add('open');
}

function closeModal() {
  document.getElementById('successModal').classList.remove('open');
  // Reset form
  location.reload();
}

/* ==============================
   SMOOTH SCROLL FOR NAV LINKS
   ============================== */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const tabMap = {
        '#apply': 'apply', '#eligibility': 'eligibility',
        '#dates': 'dates', '#documents': 'documents', '#fees': 'fees',
      };
      if (tabMap[href]) {
        switchTab(tabMap[href]);
        document.querySelector('.tabs-section').scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('open');
    }
  });
});

/* ==============================
   INTERSECTION OBSERVER – TIMELINE
   ============================== */
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.tl-item').forEach((item, i) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
  tlObserver.observe(item);
});

/* ==============================
   INIT
   ============================== */
document.addEventListener('DOMContentLoaded', () => {
  refreshCaptcha();
  updateDocProgress();
  document.getElementById('stepIndicator').textContent = `Step 1 of ${totalSteps}`;
});