/* ═══════════════════════════════════════
   PRINCE INSTITUTION — placement.js
═══════════════════════════════════════ */

/* ─── DATA ─────────────────────────────── */
const DRIVES = [
  {id:1,company:'TCS',role:'Systems Engineer',ctc:7.0,date:'Jun 5, 2025',status:'open',dept:['CSE','ECE'],cgpa:7.0,logo:'TC',color:'#DBEAFE',tc:'#1E40AF'},
  {id:2,company:'Infosys',role:'Systems Engineer',ctc:6.5,date:'Jun 10, 2025',status:'open',dept:['CSE','ECE','MECH'],cgpa:6.5,logo:'IN',color:'#DCFCE7',tc:'#166534'},
  {id:3,company:'Wipro',role:'Project Engineer',ctc:6.5,date:'Jun 12, 2025',status:'open',dept:['CSE','ECE','CIVIL'],cgpa:6.5,logo:'WI',color:'#FEF9C3',tc:'#854D0E'},
  {id:4,company:'Amazon',role:'SDE Intern',ctc:18.0,date:'Jun 18, 2025',status:'upcoming',dept:['CSE'],cgpa:8.0,logo:'AM',color:'#FEE2E2',tc:'#991B1B'},
  {id:5,company:'Zoho',role:'Software Developer',ctc:10.0,date:'Jun 22, 2025',status:'upcoming',dept:['CSE','ECE'],cgpa:7.5,logo:'ZO',color:'#EDE9FE',tc:'#5B21B6'},
  {id:6,company:'HCL',role:'Tech Support',ctc:5.5,date:'May 20, 2025',status:'closed',dept:['CSE','ECE','MECH','CIVIL'],cgpa:6.0,logo:'HC',color:'#FCE7F3',tc:'#9D174D'},
  {id:7,company:'Cognizant',role:'Programmer Analyst',ctc:7.0,date:'Jul 2, 2025',status:'upcoming',dept:['CSE','ECE'],cgpa:6.5,logo:'CO',color:'#CCFBF1',tc:'#0F766E'},
  {id:8,company:'Accenture',role:'Software Engineer',ctc:8.0,date:'Jul 5, 2025',status:'upcoming',dept:['CSE','ECE','MECH'],cgpa:6.0,logo:'AC',color:'#E0E7FF',tc:'#3730A3'},
];

const PLACED_STUDENTS = [
  {name:'Aakash Venkat',dept:'CSE',company:'Amazon',ctc:'18 LPA',roll:'21CS004'},
  {name:'Priya Ramesh',dept:'CSE',company:'Zoho',ctc:'10 LPA',roll:'21CS012'},
  {name:'Karthik S',dept:'ECE',company:'TCS',ctc:'7 LPA',roll:'21EC007'},
  {name:'Divya Nair',dept:'CSE',company:'Infosys',ctc:'6.5 LPA',roll:'21CS021'},
  {name:'Rahul M',dept:'MECH',company:'Wipro',ctc:'6.5 LPA',roll:'21ME003'},
  {name:'Sneha P',dept:'CSE',company:'Accenture',ctc:'8 LPA',roll:'21CS034'},
  {name:'Arjun T',dept:'ECE',company:'Cognizant',ctc:'7 LPA',roll:'21EC019'},
  {name:'Meera K',dept:'CIVIL',company:'HCL',ctc:'5.5 LPA',roll:'21CV002'},
  {name:'Vijay R',dept:'CSE',company:'TCS',ctc:'7 LPA',roll:'21CS041'},
  {name:'Lakshmi B',dept:'ECE',company:'Wipro',ctc:'6.5 LPA',roll:'21EC028'},
  {name:'Surya N',dept:'MECH',company:'Infosys',ctc:'6.5 LPA',roll:'21ME011'},
  {name:'Ananya S',dept:'CSE',company:'Zoho',ctc:'10 LPA',roll:'21CS055'},
];

const OFFERS_DATA = {
  '2024': [
    {name:'Aakash Venkat',company:'Amazon',role:'SDE Intern',ctc:'18',status:'Placed'},
    {name:'Priya Ramesh',company:'Zoho',role:'Software Developer',ctc:'10',status:'Placed'},
    {name:'Sneha P',company:'Accenture',role:'Software Engineer',ctc:'8',status:'Placed'},
    {name:'Karthik S',company:'TCS',role:'Systems Engineer',ctc:'7',status:'Placed'},
    {name:'Arjun T',company:'Cognizant',role:'Programmer Analyst',ctc:'7',status:'Placed'},
    {name:'Vijay R',company:'TCS',role:'Systems Engineer',ctc:'7',status:'Accepted'},
    {name:'Divya Nair',company:'Infosys',role:'Systems Engineer',ctc:'6.5',status:'Placed'},
    {name:'Rahul M',company:'Wipro',role:'Project Engineer',ctc:'6.5',status:'Placed'},
    {name:'Lakshmi B',company:'Wipro',role:'Project Engineer',ctc:'6.5',status:'Accepted'},
    {name:'Surya N',company:'Infosys',role:'Systems Engineer',ctc:'6.5',status:'Placed'},
    {name:'Meera K',company:'HCL',role:'Tech Support',ctc:'5.5',status:'Placed'},
    {name:'Ananya S',company:'Zoho',role:'Software Developer',ctc:'10',status:'Placed'},
  ],
  '2023': [
    {name:'Rohan K',company:'Microsoft',role:'SDE',ctc:'32',status:'Placed'},
    {name:'Pooja V',company:'Google',role:'Assoc Engineer',ctc:'28',status:'Placed'},
    {name:'Naveen S',company:'Amazon',role:'SDE',ctc:'22',status:'Placed'},
    {name:'Deepa M',company:'Zoho',role:'Software Dev',ctc:'10',status:'Placed'},
    {name:'Ashwin R',company:'TCS',role:'Systems Eng',ctc:'7',status:'Accepted'},
  ],
  '2022': [
    {name:'Santhosh B',company:'Infosys',role:'Systems Eng',ctc:'6.5',status:'Placed'},
    {name:'Nithya P',company:'Wipro',role:'Project Eng',ctc:'6.5',status:'Placed'},
    {name:'Gopal T',company:'HCL',role:'Tech Supp',ctc:'5.5',status:'Placed'},
  ],
};

const YEAR_STATS = {
  '2024': {placed:'94%',students:412,companies:280,avg:'8.6',highest:'18 LPA'},
  '2023': {placed:'89%',students:388,companies:245,avg:'7.9',highest:'32 LPA'},
  '2022': {placed:'82%',students:361,companies:198,avg:'7.2',highest:'24 LPA'},
};

const PKG_DATA = [
  {company:'TCS',min:6.5,avg:7.0,max:9.0},
  {company:'Infosys',min:6.0,avg:6.5,max:8.0},
  {company:'Wipro',min:6.0,avg:6.5,max:8.5},
  {company:'Amazon',min:14,avg:18,max:26},
  {company:'Zoho',min:8,avg:10,max:14},
  {company:'Accenture',min:7,avg:8,max:11},
];

const DEPT_PCT = [
  {dept:'CSE',pct:97,color:'#2563EB'},
  {dept:'ECE',pct:91,color:'#0284C7'},
  {dept:'MECH',pct:78,color:'#14B8A6'},
  {dept:'CIVIL',pct:65,color:'#6366F1'},
];

const YEAR_TREND = [
  {year:'2021-22',pct:75},{year:'2022-23',pct:82},{year:'2023-24',pct:89},{year:'2024-25',pct:94}
];

const RECRUITERS = [
  {name:'Amazon',icon:'🛒'},{name:'TCS',icon:'💻'},{name:'Infosys',icon:'🔷'},
  {name:'Wipro',icon:'🌐'},{name:'Zoho',icon:'📊'},{name:'Accenture',icon:'🔺'},
  {name:'HCL',icon:'🖥️'},{name:'Cognizant',icon:'🧠'},{name:'Microsoft',icon:'🪟'},
  {name:'Google',icon:'🔍'},{name:'Deloitte',icon:'📋'},{name:'IBM',icon:'💡'},
  {name:'Capgemini',icon:'🏢'},{name:'L&T',icon:'⚙️'},{name:'BOSCH',icon:'🔧'},
];

/* ─── STATE ──────────────────────────────── */
let user = null;
let applied = new Set();
let driveFilter = 'all';
let currentYear = '2024';
let allOffers = [];
let filteredOffers = [];

/* ─── INIT ───────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  renderPublicPage();
  initScrollTop();
});

function renderPublicPage() {
  renderDeptBars();
  renderTrendChart();
  renderMarquee();
  renderPlacedGrid('all');
  renderPlacedSummary();
  animateCounters();
}

/* ─── NAV ────────────────────────────────── */
function toggleMenu() {
  // Toggle whichever nav is currently visible
  const publicLinks = document.getElementById('navLinks');
  const portalLinks = document.getElementById('portalNavLinks');

  const publicPage = document.getElementById('publicPage');
  const portalPage = document.getElementById('portalPage');

  if (publicPage && publicPage.style.display !== 'none' && publicLinks) {
    publicLinks.classList.toggle('open');
  } else if (portalPage && portalPage.style.display !== 'none' && portalLinks) {
    portalLinks.classList.toggle('open');
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function goHome() {
  if (user) {
    document.getElementById('portalPage').style.display = 'none';
    document.getElementById('publicPage').style.display = 'block';
    window.scrollTo(0, 0);
  }
}

function initScrollTop() {
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    if (btn) btn.classList.toggle('show', window.scrollY > 400);
  });
}

/* ─── DEPT BARS ──────────────────────────── */
function renderDeptBars() {
  const el = document.getElementById('deptBars');
  if (!el) return;
  el.innerHTML = DEPT_PCT.map(d => `
    <div class="dept-row">
      <span class="dept-name">${d.dept}</span>
      <div class="dept-bar-track">
        <div class="dept-bar-fill" data-pct="${d.pct}" style="width:0%;background:${d.color}"></div>
      </div>
      <span class="dept-pct">${d.pct}%</span>
    </div>`).join('');
  setTimeout(() => {
    el.querySelectorAll('.dept-bar-fill').forEach(b => {
      b.style.width = b.dataset.pct + '%';
    });
  }, 300);
}

/* ─── TREND CHART ───────────────────────── */
function renderTrendChart() {
  const el = document.getElementById('trendChart');
  if (!el) return;
  const max = Math.max(...YEAR_TREND.map(d => d.pct));
  el.innerHTML = YEAR_TREND.map((d, i) => `
    <div class="trend-bar-wrap">
      <span class="trend-val">${d.pct}%</span>
      <div class="trend-bar${i === YEAR_TREND.length - 1 ? ' cur' : ''}"
        data-h="${(d.pct / max) * 100}"
        style="height:4px"></div>
    </div>`).join('');
  setTimeout(() => {
    el.querySelectorAll('.trend-bar').forEach(b => {
      b.style.height = b.dataset.h + '%';
    });
  }, 300);
}

/* ─── MARQUEE ───────────────────────────── */
function renderMarquee() {
  const el = document.getElementById('marqueeTrack');
  if (!el) return;
  const doubled = [...RECRUITERS, ...RECRUITERS];
  el.innerHTML = doubled.map(r => `
    <div class="recruiter-pill">
      <span class="r-icon">${r.icon}</span>${r.name}
    </div>`).join('');
}

/* ─── PLACED GRID ───────────────────────── */
function filterPlaced(dept, btn) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPlacedGrid(dept);
}

function renderPlacedGrid(dept) {
  const el = document.getElementById('placedGrid');
  if (!el) return;
  const list = dept === 'all' ? PLACED_STUDENTS : PLACED_STUDENTS.filter(s => s.dept === dept);
  el.innerHTML = list.map(s => `
    <div class="placed-card">
      <div class="pc-top">
        <div class="pc-avatar">${initials(s.name)}</div>
        <div>
          <p class="pc-name">${s.name}</p>
          <p class="pc-meta">${s.dept} · ${s.roll}</p>
        </div>
      </div>
      <div class="pc-company-row">
        <span class="pc-company"><i class="fa-solid fa-building"></i> ${s.company}</span>
        <span class="pc-ctc">${s.ctc}</span>
      </div>
    </div>`).join('');
}

function renderPlacedSummary() {
  const el = document.getElementById('placedSummary');
  if (!el) return;
  el.innerHTML = [
    {label:'Total Placed (2024)', val:'387'},
    {label:'Highest Package',     val:'18 LPA'},
    {label:'Average Package',     val:'8.6 LPA'},
    {label:'Companies Visited',   val:'280+'},
  ].map(s => `
    <div class="ps-item">
      <p class="ps-label">${s.label}</p>
      <p class="ps-val">${s.val}</p>
    </div>`).join('');
}

/* ─── COUNTER ANIMATION ─────────────────── */
function animateCounters() {
  const targets = [
    {id:'num-placed',    ring:'ring-placed',    val:94,  max:100},
    {id:'num-companies', ring:'ring-companies', val:280, max:300},
    {id:'num-pkg',       ring:'ring-pkg',       val:42,  max:50},
    {id:'num-avg',       ring:'ring-avg',       val:8.6, max:15},
  ];
  const circ = 326.73;
  targets.forEach(t => {
    const el   = document.getElementById(t.id);
    const ring = document.getElementById(t.ring);
    if (!el || !ring) return;
    ring.style.strokeDashoffset = circ - (t.val / t.max) * circ;
    let cur = 0;
    const step = t.val / 60;
    const iv = setInterval(() => {
      cur = Math.min(cur + step, t.val);
      el.textContent = (t.val % 1 !== 0) ? cur.toFixed(1) : Math.round(cur);
      if (cur >= t.val) clearInterval(iv);
    }, 25);
  });
}

/* ─── LOGIN ─────────────────────────────── */
function showLogin() {
  document.getElementById('loginOverlay').classList.add('open');
  document.getElementById('inName').focus();
}

function hideLogin() {
  document.getElementById('loginOverlay').classList.remove('open');
  document.getElementById('loginErr').style.display = 'none';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideLogin();
});

// Close login overlay when clicking backdrop
document.addEventListener('click', e => {
  const overlay = document.getElementById('loginOverlay');
  if (e.target === overlay) hideLogin();
});

function doLogin() {
  const n = document.getElementById('inName').value.trim();
  const r = document.getElementById('inRoll').value.trim();
  const d = document.getElementById('inDept').value;
  const c = parseFloat(document.getElementById('inCGPA').value);
  const errEl = document.getElementById('loginErr');
  const msgEl = document.getElementById('errMsg');

  if (!n || !r || !d || isNaN(c)) {
    errEl.style.display = 'flex';
    msgEl.textContent = 'Please fill all fields correctly';
    return;
  }
  if (c < 0 || c > 10) {
    errEl.style.display = 'flex';
    msgEl.textContent = 'CGPA must be between 0 and 10';
    return;
  }
  errEl.style.display = 'none';
  user = { name: n, roll: r, dept: d, cgpa: c, initials: initials(n) };
  hideLogin();
  openPortal();
}

/* ─── PORTAL OPEN / CLOSE ───────────────── */
function openPortal() {
  // Show portal, hide public page
  document.getElementById('publicPage').style.display = 'none';
  document.getElementById('portalPage').style.display = 'block';
  window.scrollTo(0, 0);

  // Populate user info in navbar dropdown
  setText('heroName',    user.name.split(' ')[0]);
  setText('portalAvatar', user.initials);
  setText('portalName',  user.name.split(' ')[0]);
  setText('uddAvatar',   user.initials);
  setText('uddName',     user.name);
  setText('uddRoll',     user.roll + ' · ' + user.dept);

  // Render all sections
  renderPortalStats();
  renderJourney();
  renderPkgBars();
  renderDrives();
  renderProfile();
  renderResultsStats();
  renderOffersTable(OFFERS_DATA['2024'] || []);
}

function doLogout() {
  user = null;
  applied = new Set();
  driveFilter = 'all';
  currentYear = '2024';

  // Reset form
  ['inName','inRoll','inCGPA'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const deptEl = document.getElementById('inDept');
  if (deptEl) deptEl.value = '';

  document.getElementById('portalPage').style.display = 'none';
  document.getElementById('publicPage').style.display = 'block';
  closeUserDD();
  window.scrollTo(0, 0);
  showToast('Logged out successfully');
}

/* ─── PORTAL TABS ───────────────────────── */
function portalTab(tab, el) {
  // Hide all tabs
  ['dashboard','drives','results','profile'].forEach(t => {
    const tabEl = document.getElementById('ptab-' + t);
    if (tabEl) tabEl.style.display = 'none';
  });

  // Show selected tab
  const target = document.getElementById('ptab-' + tab);
  if (target) target.style.display = 'block';

  // Update nav link active state
  document.querySelectorAll('#portalNavLinks .nav-link').forEach(a => a.classList.remove('active'));
  if (el) {
    el.classList.add('active');
  } else {
    // Find the matching link by onclick content
    document.querySelectorAll('#portalNavLinks .nav-link').forEach(a => {
      const oc = a.getAttribute('onclick') || '';
      if (oc.includes("'" + tab + "'")) a.classList.add('active');
    });
  }

  closeUserDD();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── PORTAL STATS ──────────────────────── */
function renderPortalStats() {
  const eligible = DRIVES.filter(d =>
    d.status !== 'closed' && d.dept.includes(user.dept) && user.cgpa >= d.cgpa
  );
  const el = document.getElementById('pstatGrid');
  if (!el) return;
  el.innerHTML = [
    {icon:'fa-building-columns', color:'psc-blue',   label:'Active drives for you', val:eligible.length,  sub:'Matching dept & CGPA'},
    {icon:'fa-file-pen',         color:'psc-teal',   label:'Applications sent',     val:applied.size,      sub: applied.size > 0 ? 'Keep going!' : 'Start applying'},
    {icon:'fa-handshake',        color:'psc-sky',    label:'Offers received',       val:0,                 sub:'Pending results'},
    {icon:'fa-microphone-lines', color:'psc-indigo', label:'Upcoming interviews',   val:0,                 sub:'Based on registered drives'},
  ].map(s => `
    <div class="pstat-card">
      <div class="pstat-icon ${s.color}"><i class="fa-solid ${s.icon}"></i></div>
      <p class="pstat-label">${s.label}</p>
      <p class="pstat-val">${s.val}</p>
      <p class="pstat-sub">${s.sub}</p>
    </div>`).join('');
}

/* ─── JOURNEY ───────────────────────────── */
function renderJourney() {
  const el = document.getElementById('journeyWrap');
  if (!el) return;
  const steps = [
    {label:'Profile Created',  done:true,             icon:'fa-check'},
    {label:'CGPA Verified',    done:user.cgpa >= 7,   icon: user.cgpa >= 7 ? 'fa-check' : 'fa-xmark'},
    {label:'Applied to Drive', done:applied.size > 0, icon: applied.size > 0 ? 'fa-check' : 'fa-hourglass-half', active: applied.size === 0},
    {label:'Aptitude Test',    done:false,             icon:'fa-file-lines'},
    {label:'Technical Round',  done:false,             icon:'fa-code'},
    {label:'HR Round',         done:false,             icon:'fa-comments'},
    {label:'Offer 🎉',         done:false,             icon:'fa-trophy'},
  ];
  el.innerHTML = `<div class="journey-track">` +
    steps.map((s, i) => `
      <div class="jstep">
        <div class="jdot${s.done ? ' done' : s.active ? ' active' : ''}">
          <i class="fa-solid ${s.icon}" style="font-size:13px"></i>
        </div>
        <span class="jlabel">${s.label}</span>
      </div>
      ${i < steps.length - 1 ? `<div class="jline${s.done ? ' done' : ''}"></div>` : ''}
    `).join('') +
  `</div>`;
}

/* ─── PKG BARS ──────────────────────────── */
function renderPkgBars() {
  const el = document.getElementById('pkgBars');
  if (!el) return;
  const max = Math.max(...PKG_DATA.map(d => d.max));
  el.innerHTML = `
    <div style="display:flex;align-items:flex-end;gap:14px;height:140px;
      border-bottom:2px solid #BFDBFE;padding:0 4px;margin-bottom:8px">
      ${PKG_DATA.map(d => `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;
          height:100%;justify-content:flex-end;gap:2px">
          <span style="font-size:9px;color:#64748B">${d.max}</span>
          <div style="width:100%;display:flex;gap:2px;align-items:flex-end">
            <div style="flex:1;height:${(d.min/max)*100}%;background:#BFDBFE;
              border-radius:3px 3px 0 0;min-height:3px"></div>
            <div style="flex:1;height:${(d.avg/max)*100}%;background:#3B82F6;
              border-radius:3px 3px 0 0;min-height:3px"></div>
            <div style="flex:1;height:${(d.max/max)*100}%;background:#1D4ED8;
              border-radius:3px 3px 0 0;min-height:3px"></div>
          </div>
          <span style="font-size:9px;color:#64748B;text-align:center">${d.company}</span>
        </div>`).join('')}
    </div>
    <div class="chart-legend">
      <span><span class="leg-dot leg-min"></span>Min</span>
      <span><span class="leg-dot leg-avg"></span>Avg</span>
      <span><span class="leg-dot leg-max"></span>Max</span>
    </div>`;
}

/* ─── DRIVES ─────────────────────────────── */
function setFilter(f, btn) {
  driveFilter = f;
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderDrives();
}

function renderDrives() {
  const q = (document.getElementById('driveSearch') || {}).value || '';
  const query = q.toLowerCase();
  const el = document.getElementById('drivesGrid');
  if (!el || !user) return;

  const list = DRIVES.filter(d => {
    if (driveFilter !== 'all' && d.status !== driveFilter) return false;
    if (query && !d.company.toLowerCase().includes(query) && !d.role.toLowerCase().includes(query)) return false;
    return true;
  });

  if (!list.length) {
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#94A3B8;font-size:14px">
      <i class="fa-solid fa-magnifying-glass" style="font-size:28px;display:block;margin-bottom:8px;opacity:.4"></i>
      No drives match your filter</div>`;
    return;
  }

  el.innerHTML = list.map(d => {
    const eligible  = d.dept.includes(user.dept) && user.cgpa >= d.cgpa;
    const isApplied = applied.has(d.id);
    const canApply  = eligible && d.status === 'open' && !isApplied;
    const reason    = !d.dept.includes(user.dept)
      ? `Not open for ${user.dept}`
      : `CGPA ${user.cgpa} < ${d.cgpa} required`;

    let btnText, btnClass = 'apply-btn', btnDisabled = '';
    if (isApplied)            { btnText = '✓ Applied'; btnClass += ' applied'; btnDisabled = 'disabled'; }
    else if (d.status === 'closed') { btnText = 'Drive Closed'; btnDisabled = 'disabled'; }
    else if (!eligible)       { btnText = 'Not Eligible'; btnDisabled = 'disabled'; }
    else                      { btnText = '<i class="fa-solid fa-paper-plane"></i> Apply Now'; }

    return `
    <div class="drive-card">
      <div class="dc-top">
        <div class="co-badge" style="background:${d.color};color:${d.tc}">${d.logo}</div>
        <div class="dc-meta" style="flex:1">
          <h4>${d.company}</h4>
          <p>${d.role}</p>
        </div>
        <span class="status-pill sp-${d.status}">
          ${d.status.charAt(0).toUpperCase() + d.status.slice(1)}
        </span>
      </div>
      <div class="dc-info">
        <span><i class="fa-solid fa-indian-rupee-sign"></i>${d.ctc} LPA</span>
        <span><i class="fa-solid fa-calendar"></i>${d.date}</span>
        <span><i class="fa-solid fa-award"></i>≥${d.cgpa} CGPA</span>
        <span><i class="fa-solid fa-building"></i>${d.dept.join(', ')}</span>
      </div>
      ${!eligible && d.status !== 'closed'
        ? `<p class="ineligible-note"><i class="fa-solid fa-triangle-exclamation"></i> ${reason}</p>`
        : ''}
      <button class="${btnClass}" onclick="applyTo(${d.id})" ${btnDisabled}>
        ${btnText}
      </button>
    </div>`;
  }).join('');
}

function applyTo(id) {
  if (applied.has(id)) return;
  applied.add(id);
  const d = DRIVES.find(x => x.id === id);
  showToast('Applied to ' + d.company + ' successfully! 🎉');
  renderDrives();
  renderPortalStats();
  renderJourney();
  renderProfile();
}

/* ─── RESULTS ───────────────────────────── */
function setYear(yr, btn) {
  currentYear = yr;
  document.querySelectorAll('.ytab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderResultsStats();
  renderOffersTable(OFFERS_DATA[yr] || []);
}

function renderResultsStats() {
  const s  = YEAR_STATS[currentYear];
  const el = document.getElementById('resultsStats');
  if (!el || !s) return;
  el.innerHTML = [
    {label:'Placement %',      val:s.placed},
    {label:'Students Placed',  val:s.students},
    {label:'Companies',        val:s.companies},
    {label:'Avg Package',      val:s.avg + ' LPA'},
    {label:'Highest Package',  val:s.highest},
  ].map(x => `
    <div class="rs-card">
      <p class="rs-val">${x.val}</p>
      <p class="rs-label">${x.label}</p>
    </div>`).join('');
}

function renderOffersTable(data) {
  allOffers      = data;
  filteredOffers = data;
  drawTable();
}

function filterOffers(q) {
  filteredOffers = q
    ? allOffers.filter(o =>
        o.name.toLowerCase().includes(q.toLowerCase()) ||
        o.company.toLowerCase().includes(q.toLowerCase()))
    : allOffers;
  drawTable();
}

function drawTable() {
  const el = document.getElementById('offersBody');
  if (!el) return;
  if (!filteredOffers.length) {
    el.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#94A3B8;padding:2rem">No records found</td></tr>`;
    return;
  }
  el.innerHTML = filteredOffers.map(o => `
    <tr>
      <td>${o.name}</td>
      <td>${o.company}</td>
      <td>${o.role}</td>
      <td><strong style="color:#1D4ED8">₹${o.ctc} LPA</strong></td>
      <td><span class="ot-badge ${o.status === 'Placed' ? 'otb-placed' : 'otb-accepted'}">${o.status}</span></td>
    </tr>`).join('');
}

/* ─── PROFILE ───────────────────────────── */
function renderProfile() {
  if (!user) return;
  setText('profileAvLg', user.initials);
  setText('profileName', user.name);
  setText('profileSub',  `${user.dept} – Final Year | Roll: ${user.roll}`);

  const grid = document.getElementById('profileGrid');
  if (grid) {
    grid.innerHTML = [
      {k:'CGPA',       v: user.cgpa.toFixed(1)},
      {k:'Department', v: user.dept},
      {k:'Applied',    v: applied.size},
      {k:'Status',     v: 'Seeking'},
    ].map(x => `
      <div class="pg-item">
        <div class="k">${x.k}</div>
        <div class="v">${x.v}</div>
      </div>`).join('');
  }

  const appsEl = document.getElementById('myApps');
  if (appsEl) {
    if (!applied.size) {
      appsEl.innerHTML = `<p style="font-size:13px;color:#94A3B8;padding:1rem 0">
        No applications yet — head to Drives to apply!</p>`;
    } else {
      appsEl.innerHTML = [...applied].map(id => {
        const d = DRIVES.find(x => x.id === id);
        return `
        <div class="app-item">
          <div class="app-co-badge" style="background:${d.color};color:${d.tc}">${d.logo}</div>
          <div class="app-info">
            <h5>${d.company}</h5>
            <p>${d.role} · ₹${d.ctc} LPA · ${d.date}</p>
          </div>
          <span class="app-status as-applied">Applied</span>
        </div>`;
      }).join('');
    }
  }

  const eligEl = document.getElementById('eligChecks');
  if (eligEl) {
    const checks = [
      {ok: user.cgpa >= 7.0, label:`CGPA ≥ 7.0 (yours: ${user.cgpa})`},
      {ok: true,             label:'No active backlogs'},
      {ok: true,             label:'10th ≥ 60% ✓'},
      {ok: user.cgpa >= 8.0, label:'Premium drive eligibility (CGPA ≥ 8.0)'},
    ];
    eligEl.innerHTML = checks.map(c => `
      <div class="elig-item ${c.ok ? 'ok' : 'warn'}">
        <i class="fa-solid ${c.ok ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
        ${c.label}
      </div>`).join('');
  }
}

/* ─── USER DROPDOWN ─────────────────────── */
function toggleUserDD() {
  event.stopPropagation();
  document.getElementById('userDropdown').classList.toggle('open');
}
function closeUserDD() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.classList.remove('open');
}
document.addEventListener('click', e => {
  const pill = document.getElementById('portalUser');
  if (pill && !pill.contains(e.target)) closeUserDD();
});

/* ─── HELPERS ───────────────────────────── */
function initials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${msg}`;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}