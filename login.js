// ════════════════════════════════════════════════════════════
// Portal JavaScript - Student & Faculty Management System
// ════════════════════════════════════════════════════════════

// DOM Elements
const loginPage = document.getElementById('loginPage');
const studentDash = document.getElementById('studentDash');
const teacherDash = document.getElementById('teacherDash');
const studentFormPage = document.getElementById('studentForm');

// Current User Data
let currentUser = {
  type: null,
  id: null,
  name: null,
  department: null,
  details: {}
};

// ═══════════ LOGIN SYSTEM ═══════════
function switchTab(type) {
  document.querySelectorAll('.ltab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.lform').forEach(form => form.classList.remove('active'));

  event.target.closest('.ltab').classList.add('active');
  document.getElementById(type === 'student' ? 'studentLogin' : 'teacherLogin').classList.add('active');
}

function loginAs(type) {
  const form = document.getElementById(type === 'student' ? 'studentLogin' : 'teacherLogin');
  const rollInput = form.querySelector('input[type="text"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const deptSelect = form.querySelector('select');

  if (!rollInput.value || !passwordInput.value) {
    toast('Please fill in all required fields', 'error');
    return;
  }

  currentUser.type = type;
  currentUser.id = rollInput.value;
  currentUser.name = type === 'student' ? 'Arjun Raghunathan' : 'Dr. S. Lakshmi';
  currentUser.department = deptSelect.value;

  if (type === 'student') {
    showScreen('studentForm');
  } else {
    showDashboard(type);
  }

  toast('Login successful!', 'success');
}

// ═══════════ STUDENT FORM SUBMISSION ═══════════
function submitStudentForm() {
  const fullName = document.getElementById('sFullName').value;
  const email = document.getElementById('sEmail').value;
  const mobile = document.getElementById('sMobile').value;
  const dob = document.getElementById('sDOB').value;
  const gender = document.getElementById('sGender').value;
  const address = document.getElementById('sAddress').value;
  const guardian = document.getElementById('sGuardian').value;
  const category = document.getElementById('sCategory').value;

  if (!fullName || !email || !mobile || !dob || !gender || !address || !guardian || !category) {
    toast('Please fill all required fields (marked with *)', 'error');
    return;
  }

  // Store user details
  currentUser.details = {
    fullName,
    email,
    mobile,
    dob,
    gender,
    blood: document.getElementById('sBlood').value,
    address,
    guardian,
    guardianMobile: document.getElementById('sGuardianMobile').value,
    category,
    aadhar: document.getElementById('sAadhar').value
  };

  // Update dashboard with user info
  updateStudentDashboard();
  showDashboard('student');
  toast('Profile completed successfully!', 'success');
}

// ═══════════ DASHBOARD UPDATE ═══════════
function updateStudentDashboard() {
  // Update sidebar user info
  document.querySelector('.sb-av').textContent = currentUser.details.fullName.substring(0, 2).toUpperCase();
  document.querySelector('.sb-un').textContent = currentUser.details.fullName;
  document.querySelector('.sb-uid').textContent = currentUser.id;

  // Update topbar user info
  document.querySelectorAll('.tbu-n').forEach(el => el.textContent = currentUser.details.fullName);
  document.querySelectorAll('.tbu-i').forEach(el => el.textContent = currentUser.id);
  document.querySelectorAll('.tb-av').forEach(el => el.textContent = currentUser.details.fullName.substring(0, 2).toUpperCase());

  // Update personal details section
  const detailsCard = document.querySelector('#sProfile .ig');
  detailsCard.innerHTML = `
    <div class="ic"><div class="il">Roll Number</div><div class="iv">${currentUser.id}</div></div>
    <div class="ic"><div class="il">Full Name</div><div class="iv">${currentUser.details.fullName}</div></div>
    <div class="ic"><div class="il">Email</div><div class="iv">${currentUser.details.email}</div></div>
    <div class="ic"><div class="il">Mobile</div><div class="iv">${currentUser.details.mobile}</div></div>
    <div class="ic"><div class="il">Date of Birth</div><div class="iv">${formatDate(currentUser.details.dob)}</div></div>
    <div class="ic"><div class="il">Gender</div><div class="iv">${currentUser.details.gender}</div></div>
    <div class="ic"><div class="il">Blood Group</div><div class="iv">${currentUser.details.blood || 'Not specified'}</div></div>
    <div class="ic"><div class="il">Address</div><div class="iv">${currentUser.details.address}</div></div>
    <div class="ic"><div class="il">Guardian</div><div class="iv">${currentUser.details.guardian}</div></div>
    <div class="ic"><div class="il">Guardian Mobile</div><div class="iv">${currentUser.details.guardianMobile}</div></div>
    <div class="ic"><div class="il">Category</div><div class="iv">${currentUser.details.category}</div></div>
    <div class="ic"><div class="il">Aadhar</div><div class="iv">${currentUser.details.aadhar ? 'XXXX XXXX ' + currentUser.details.aadhar : 'Not provided'}</div></div>
  `;
}

// ═══════════ NAVIGATION ═══════════
function showScreen(screenId) {
  document.querySelectorAll('.screen, .form-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function showDashboard(type) {
  document.querySelectorAll('.screen, .form-screen').forEach(s => s.classList.remove('active'));
  if (type === 'student') {
    studentDash.classList.add('active');
    showSec('s', 'sDash', null);
  } else {
    teacherDash.classList.add('active');
    showSec('t', 'tDash', null);
  }
}

function showSec(dash, secId, el) {
  const prefix = dash === 's' ? '#s' : '#t';
  document.querySelectorAll(prefix + 'Sidebar .ni.active').forEach(n => n.classList.remove('active'));
  document.querySelectorAll(prefix + 'Dash .sec.active').forEach(s => s.classList.remove('active'));

  if (el) el.classList.add('active');

  const section = document.getElementById(secId);
  if (section) {
    section.classList.add('active');

    // Update title
    const titleMap = {
      'sDash': 'Dashboard',
      'sProfile': 'Personal Details',
      'sAttend': 'Attendance',
      'sMarks': 'Marks',
      'sResult': 'Semester Results',
      'sTT': 'Timetable',
      'sCGPA': 'CGPA Calculator',
      'sFee': 'Fee Payment',
      'sCerts': 'Certificates',
      'sGriev': 'Grievance',
      'sEvents': 'Events',
      'sNotices': 'Notices',
      'tDash': 'Dashboard',
      'tProfile': 'Faculty Details',
      'tAttend': 'Attendance Update',
      'tMarks': 'Marks Entry',
      'tResult': 'Result Upload',
      'tEvents': 'Post Event',
      'tCerts': 'Certificate Approval',
      'tNotice': 'Post Notice'
    };

    const title = dash === 's' ? document.getElementById('sTitle') : document.getElementById('tTitle');
    if (title) title.textContent = titleMap[secId] || 'Portal';
  }
}

// ═══════════ SIDEBAR TOGGLE ═══════════
function toggleSidebar(dash) {
  const sidebar = dash === 's' ? document.getElementById('sSidebar') : document.getElementById('tSidebar');
  const overlay = dash === 's' ? document.getElementById('sOverlay') : document.getElementById('tOverlay');

  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function closeSidebar(dash) {
  const sidebar = dash === 's' ? document.getElementById('sSidebar') : document.getElementById('tSidebar');
  const overlay = dash === 's' ? document.getElementById('sOverlay') : document.getElementById('tOverlay');

  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

// ═══════════ NOTIFICATIONS ═══════════
function toggleNotif(dash) {
  const notifDD = document.getElementById(dash + 'NotifDD');
  notifDD.classList.toggle('active');
}

// ═══════════ DARK MODE ═══════════
function toggleDark() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// ═══════════ PAYMENT MODAL ═══════════
function openPayModal() {
  document.getElementById('payModal').classList.add('active');
}

function closePayModal() {
  document.getElementById('payModal').classList.remove('active');
}

function processPayment() {
  const cardNum = document.querySelector('input[placeholder*="1234"]').value;
  const expiry = document.querySelector('input[placeholder*="MM"]').value;
  const cvv = document.querySelector('input[placeholder*="•••"]').value;
  const holder = document.querySelector('input[placeholder*="As on card"]').value;

  if (!cardNum || !expiry || !cvv || !holder) {
    toast('Please fill all payment details', 'error');
    return;
  }

  toast('Payment processed successfully! Receipt sent to your email.', 'success');
  closePayModal();
  document.querySelectorAll('.fee-p').forEach(b => {
    b.textContent = 'Paid';
    b.className = 'badge bg';
  });
}

// ═══════════ TEACHER FUNCTIONS ═══════════
function saveAtt() {
  toast('Attendance saved successfully!', 'success');
}

function markAllPresent() {
  const table = document.getElementById('attTable');
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    const presentCheck = row.querySelector('input[type="checkbox"]');
    if (presentCheck) presentCheck.checked = true;
  });
  toast('All marked as present', 'success');
}

function autoGrade(input, max, gradeCell) {
  const marks = parseInt(input.value) || 0;
  const percentage = (marks / max) * 100;

  let grade = 'U';
  if (percentage >= 95) grade = 'O';
  else if (percentage >= 85) grade = 'A+';
  else if (percentage >= 75) grade = 'A';
  else if (percentage >= 65) grade = 'B+';
  else if (percentage >= 55) grade = 'B';
  else if (percentage >= 50) grade = 'C';

  const badgeClass = {
    'O': 'bg', 'A+': 'bg', 'A': 'bb',
    'B+': 'by', 'B': 'by', 'C': 'bc', 'U': 'br'
  };

  gradeCell.innerHTML = `<span class="badge ${badgeClass[grade]}">${grade}</span>`;
}

function certAction(btn, action) {
  const row = btn.closest('tr');
  if (action === 'approve') {
    row.cells[4].innerHTML = '<span class="badge bg">Approved</span>';
    row.cells[5].innerHTML = '<button class="btn-sm-o" onclick="toast(\'Downloaded!\',\'success\')"><i class="fas fa-download"></i></button>';
    toast('Certificate approved!', 'success');
  } else {
    row.cells[4].innerHTML = '<span class="badge br">Rejected</span>';
    toast('Certificate rejected!', 'info');
  }
}

function postEvent() {
  toast('Event posted successfully! Students will see it shortly.', 'success');
}

function submitGriev() {
  const title = document.getElementById('gTitle').value;
  const desc = document.getElementById('gDesc').value;

  if (!title || !desc) {
    toast('Please fill in all fields', 'error');
    return;
  }

  toast('Grievance submitted! Ticket ID: GR-2025-' + Math.floor(Math.random() * 999), 'success');
  document.getElementById('gTitle').value = '';
  document.getElementById('gDesc').value = '';
}

// ═══════════ CGPA CALCULATOR ═══════════
function calcCGPA() {
  const rows = document.querySelectorAll('.cgpa-row');
  let totalGP = 0, totalCredits = 0;

  rows.forEach(row => {
    const credit = parseInt(row.querySelector('.credit-in').value) || 0;
    const gp = parseInt(row.querySelector('.grade-sel').value) || 0;
    totalGP += credit * gp;
    totalCredits += credit;
  });

  const cgpa = (totalCredits > 0 ? (totalGP / totalCredits).toFixed(2) : 0);
  document.getElementById('cgpaVal').textContent = cgpa;

  let grade = 'B';
  if (cgpa >= 9) grade = 'O — Outstanding';
  else if (cgpa >= 8.5) grade = 'A+ — Excellent';
  else if (cgpa >= 8) grade = 'A — Very Good';
  else if (cgpa >= 7) grade = 'B+ — Good';
  else if (cgpa >= 6) grade = 'B — Satisfactory';
  else if (cgpa >= 5) grade = 'C — Average';

  document.getElementById('cgpaGrade').textContent = grade;
}

// ═══════════ TOAST NOTIFICATION ═══════════
function toast(message, type = 'info') {
  const toastBox = document.getElementById('toastBox');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutRight .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ═══════════ LOGOUT ═══════════
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    currentUser = { type: null, id: null, name: null, department: null, details: {} };
    showScreen('loginPage');
    document.querySelectorAll('.ltab').forEach((tab, i) => {
      if (i === 0) tab.classList.add('active');
      else tab.classList.remove('active');
    });
    document.querySelectorAll('.lform').forEach((form, i) => {
      if (i === 0) form.classList.add('active');
      else form.classList.remove('active');
    });

    // Clear form fields
    document.querySelectorAll('.form-screen input, .form-screen textarea, .form-screen select').forEach(el => {
      if (el.type === 'text' || el.type === 'email' || el.type === 'tel' || el.type === 'date') el.value = '';
      else if (el.type === 'select-one') el.selectedIndex = 0;
      else if (el.type === 'textarea') el.value = '';
    });

    toast('Logged out successfully!', 'info');
  }
}

// ═══════════ UTILITY FUNCTIONS ═══════════
function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

// Initialize attendance table for teacher
function initAttendanceTable() {
  const table = document.getElementById('attTable');
  table.innerHTML = '';

  const students = [
    { roll: '721121CS001', name: 'Arjun R.' },
    { roll: '721121CS002', name: 'Priya S.' },
    { roll: '721121CS003', name: 'Karthik M.' },
    { roll: '721121CS004', name: 'Meera V.' },
    { roll: '721121CS005', name: 'Rajan P.' }
  ];

  students.forEach((student, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.roll}</td>
      <td>${student.name}</td>
      <td style="text-align:center"><input type="checkbox" checked/></td>
      <td style="text-align:center"><input type="checkbox"/></td>
      <td style="text-align:center"><input type="checkbox"/></td>
    `;
  });
}

// Document ready
document.addEventListener('DOMContentLoaded', function() {
  showScreen('loginPage');
  initAttendanceTable();

  // Close notifications when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.notif-wrap')) {
      document.querySelectorAll('.notif-dd').forEach(dd => dd.classList.remove('active'));
    }
  });
});
