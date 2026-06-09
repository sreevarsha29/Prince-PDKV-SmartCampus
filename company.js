/* ═══════════════════════════════════════
   COMPANY PAGE — JavaScript
═══════════════════════════════════════ */

'use strict';

/* ── Company Data ──────────────────────── */
const COMPANIES = [
  {
    id: 1, name: 'Tata Consultancy Services', abbr: 'TCS', cat: 'service',
    color: '#003087', bg: '#e8effd',
    ctc: '3.5 – 7 LPA', ctcNum: 7, cgpa: 6.0,
    location: 'Pan India', founded: 1968, employees: '6,00,000+',
    branches: ['CSE','IT','ECE','EEE','MECH'],
    roles: [
      { title: 'Assistant System Engineer', ctc: '3.5 LPA', type: 'Full-time' },
      { title: 'System Engineer', ctc: '4.5 LPA', type: 'Full-time' },
      { title: 'Digital & Analytics', ctc: '7 LPA', type: 'Full-time' },
    ],
    skills: ['Java','Python','C','SQL','Communication','Aptitude'],
    rounds: [
      { name: 'TCS NQT (Online Test)', desc: 'Numerical, Verbal, Reasoning, Coding' },
      { name: 'Technical Interview', desc: 'Core CS, Programming concepts' },
      { name: 'HR Interview', desc: 'Communication, Attitude assessment' },
    ],
    elig: ['Min 60% in X, XII, UG', 'No backlogs allowed', 'CGPA ≥ 6.0', 'All branches eligible'],
  },
  {
    id: 2, name: 'Infosys', abbr: 'INF', cat: 'service',
    color: '#007cc2', bg: '#e3f2fd',
    ctc: '3.6 – 9 LPA', ctcNum: 9, cgpa: 6.5,
    location: 'Pan India', founded: 1981, employees: '3,40,000+',
    branches: ['CSE','IT','ECE','EEE'],
    roles: [
      { title: 'Systems Engineer', ctc: '3.6 LPA', type: 'Full-time' },
      { title: 'Digital Specialist Engineer', ctc: '6.5 LPA', type: 'Full-time' },
      { title: 'Technology Analyst', ctc: '9 LPA', type: 'Full-time' },
    ],
    skills: ['Java','Python','SQL','DBMS','OS','Networking'],
    rounds: [
      { name: 'InfyTQ Exam', desc: 'Online aptitude & coding test' },
      { name: 'Pseudo Code Test', desc: 'Programming logic test' },
      { name: 'HR Round', desc: 'Situational & behavioral questions' },
    ],
    elig: ['Min 65% in X, XII, UG', 'No active backlogs', 'CGPA ≥ 6.5', 'CSE / IT / ECE / EEE'],
  },
  {
    id: 3, name: 'Wipro', abbr: 'WIP', cat: 'service',
    color: '#341c72', bg: '#ede9fe',
    ctc: '3.5 – 6.5 LPA', ctcNum: 6.5, cgpa: 6.0,
    location: 'Pan India', founded: 1945, employees: '2,50,000+',
    branches: ['CSE','IT','ECE','EEE','MECH'],
    roles: [
      { title: 'Project Engineer', ctc: '3.5 LPA', type: 'Full-time' },
      { title: 'Wipro Elite Engineer', ctc: '6.5 LPA', type: 'Full-time' },
    ],
    skills: ['Programming','DBMS','Aptitude','Verbal Ability','Coding'],
    rounds: [
      { name: 'NLTH Online Test', desc: 'Aptitude, Verbal, Written Communication, Coding' },
      { name: 'Technical Interview', desc: 'Projects, CS fundamentals' },
      { name: 'HR Interview', desc: 'Behavioral & HR questions' },
    ],
    elig: ['Min 60% in X, XII, UG', 'Max 1 backlog allowed', 'CGPA ≥ 6.0', 'All engineering branches'],
  },
  {
    id: 4, name: 'Accenture', abbr: 'ACC', cat: 'mnc',
    color: '#a100ff', bg: '#f3e8ff',
    ctc: '4.5 – 12 LPA', ctcNum: 12, cgpa: 6.0,
    location: 'Pan India', founded: 1989, employees: '7,40,000+',
    branches: ['CSE','IT','ECE','EEE'],
    roles: [
      { title: 'Associate Software Engineer', ctc: '4.5 LPA', type: 'Full-time' },
      { title: 'Packaged App Dev Associate', ctc: '7 LPA', type: 'Full-time' },
      { title: 'Advanced App Engineering', ctc: '12 LPA', type: 'Full-time' },
    ],
    skills: ['Java','Python','SAP','Cloud','SQL','Problem Solving'],
    rounds: [
      { name: 'Cognitive & Technical Assessment', desc: 'Online aptitude + coding' },
      { name: 'Communication Assessment', desc: 'Written & spoken English' },
      { name: 'HR Interview', desc: 'Culture fit & career goals' },
    ],
    elig: ['Min 60% throughout academics', 'No active backlogs', 'CGPA ≥ 6.0', 'Any branch'],
  },
  {
    id: 5, name: 'Zoho Corporation', abbr: 'ZHO', cat: 'product',
    color: '#e44d26', bg: '#fff0eb',
    ctc: '5 – 14 LPA', ctcNum: 14, cgpa: 0,
    location: 'Chennai, Coimbatore', founded: 1996, employees: '15,000+',
    branches: ['CSE','IT'],
    roles: [
      { title: 'Software Engineer', ctc: '5 – 8 LPA', type: 'Full-time' },
      { title: 'UI/UX Developer', ctc: '6 – 10 LPA', type: 'Full-time' },
      { title: 'Product Analyst', ctc: '8 – 14 LPA', type: 'Full-time' },
    ],
    skills: ['C','C++','Java','JavaScript','Data Structures','Algorithms'],
    rounds: [
      { name: 'Written Test', desc: 'Logical reasoning, Programming basics' },
      { name: 'Programming Test', desc: 'DSA coding challenge (2–3 hrs)' },
      { name: 'Technical Interview', desc: 'Problem solving, System design basics' },
      { name: 'HR Discussion', desc: 'Passion, attitude, team fit' },
    ],
    elig: ['No CGPA cutoff (merit-based)', 'Strong programming ability required', 'CSE / IT preferred', 'No active backlogs'],
  },
  {
    id: 6, name: 'Amazon', abbr: 'AMZ', cat: 'product',
    color: '#ff9900', bg: '#fff8e1',
    ctc: '14 – 42 LPA', ctcNum: 42, cgpa: 7.5,
    location: 'Bangalore, Hyderabad, Chennai', founded: 1994, employees: '15,00,000+',
    branches: ['CSE','IT'],
    roles: [
      { title: 'SDE – I', ctc: '20 – 30 LPA', type: 'Full-time' },
      { title: 'SDE – II', ctc: '30 – 42 LPA', type: 'Full-time' },
      { title: 'Business Analyst', ctc: '14 – 22 LPA', type: 'Full-time' },
    ],
    skills: ['DSA','System Design','Java/Python','OOP','LLD','SQL'],
    rounds: [
      { name: 'Online Assessment', desc: '2 DSA problems (90 mins)' },
      { name: 'Technical Round 1', desc: 'DSA + LLD + CS fundamentals' },
      { name: 'Technical Round 2', desc: 'System design & problem solving' },
      { name: 'Bar Raiser Round', desc: 'Leadership principles + culture' },
    ],
    elig: ['CGPA ≥ 7.5 preferred', 'Strong DSA skills mandatory', 'CSE / IT only', 'No backlogs'],
  },
  {
    id: 7, name: 'Cognizant (CTS)', abbr: 'CTS', cat: 'service',
    color: '#1a5aa0', bg: '#e8f0fb',
    ctc: '4 – 8 LPA', ctcNum: 8, cgpa: 6.0,
    location: 'Pan India', founded: 1994, employees: '3,50,000+',
    branches: ['CSE','IT','ECE','EEE','MECH','CIVIL'],
    roles: [
      { title: 'Programmer Analyst Trainee', ctc: '4 LPA', type: 'Full-time' },
      { title: 'GenC Pro', ctc: '6 LPA', type: 'Full-time' },
      { title: 'GenC Elevate', ctc: '8 LPA', type: 'Full-time' },
    ],
    skills: ['Programming','SQL','DBMS','Aptitude','Verbal','Core CS'],
    rounds: [
      { name: 'Aptitude Test', desc: 'Quant, Verbal, Reasoning, Coding' },
      { name: 'Technical Interview', desc: 'CS concepts, projects, DBMS' },
      { name: 'HR Interview', desc: 'Attitude, communication, goals' },
    ],
    elig: ['Min 60% in X, XII, UG', 'No standing backlogs', 'CGPA ≥ 6.0', 'All branches eligible'],
  },
  {
    id: 8, name: 'HCL Technologies', abbr: 'HCL', cat: 'mnc',
    color: '#0f62fe', bg: '#dde8ff',
    ctc: '3.5 – 7 LPA', ctcNum: 7, cgpa: 6.0,
    location: 'Noida, Chennai, Bangalore', founded: 1976, employees: '2,20,000+',
    branches: ['CSE','IT','ECE','EEE','MECH'],
    roles: [
      { title: 'Graduate Engineer Trainee', ctc: '3.5 LPA', type: 'Full-time' },
      { title: 'Technology Software Engineer', ctc: '5.5 LPA', type: 'Full-time' },
      { title: 'Senior Software Engineer', ctc: '7 LPA', type: 'Full-time' },
    ],
    skills: ['Java','Python','Testing','SQL','Cloud','Communication'],
    rounds: [
      { name: 'Aptitude Test', desc: 'Quant, Logical, Verbal' },
      { name: 'Coding Test', desc: 'Basic programming problems' },
      { name: 'Technical Interview', desc: 'CS fundamentals, projects' },
      { name: 'HR Round', desc: 'Background & HR questions' },
    ],
    elig: ['Min 60% throughout', 'No active backlogs', 'CGPA ≥ 6.0', 'All engineering branches'],
  },
  {
    id: 9, name: 'Freshworks', abbr: 'FRW', cat: 'startup',
    color: '#2ac670', bg: '#e6faf2',
    ctc: '10 – 25 LPA', ctcNum: 25, cgpa: 7.0,
    location: 'Chennai', founded: 2010, employees: '7,000+',
    branches: ['CSE','IT'],
    roles: [
      { title: 'Software Engineer', ctc: '12 – 18 LPA', type: 'Full-time' },
      { title: 'Product Engineer', ctc: '15 – 25 LPA', type: 'Full-time' },
    ],
    skills: ['React','Node.js','Ruby','DSA','System Design','APIs'],
    rounds: [
      { name: 'Online Coding Test', desc: 'DSA problems (LeetCode style)' },
      { name: 'Technical Interview 1', desc: 'Coding + CS fundamentals' },
      { name: 'Technical Interview 2', desc: 'System design, architecture' },
      { name: 'Culture Fit Round', desc: 'Values and team alignment' },
    ],
    elig: ['CGPA ≥ 7.0', 'Strong coding skills required', 'CSE / IT only', 'No active backlogs'],
  },
  {
    id: 10, name: 'HDFC Bank', abbr: 'HDF', cat: 'finance',
    color: '#004c8f', bg: '#e0ecfa',
    ctc: '4 – 9 LPA', ctcNum: 9, cgpa: 6.5,
    location: 'Pan India', founded: 1994, employees: '1,73,000+',
    branches: ['CSE','IT','ECE','MBA','BCA'],
    roles: [
      { title: 'Relationship Manager', ctc: '4 – 6 LPA', type: 'Full-time' },
      { title: 'IT Officer', ctc: '6 – 9 LPA', type: 'Full-time' },
    ],
    skills: ['Finance basics','Communication','SQL','Excel','Customer Handling'],
    rounds: [
      { name: 'Aptitude & Reasoning Test', desc: 'Quantitative, Logical, English' },
      { name: 'Group Discussion', desc: 'Finance & current affairs topics' },
      { name: 'Technical / Domain Interview', desc: 'Finance concepts or CS basics' },
      { name: 'HR Interview', desc: 'Communication, career goals' },
    ],
    elig: ['Min 60% in UG', 'CGPA ≥ 6.5', 'Any branch', 'No backlogs'],
  },
];

/* ── State ─────────────────────────────── */
let state = {
  selected: null,
  filter: 'all',
  search: '',
  sort: 'default',
};

/* ── DOM Refs ───────────────────────────── */
const companyList   = document.getElementById('companyList');
const compCount     = document.getElementById('compCount');
const detailContent = document.getElementById('detailContent');
const emptyState    = document.getElementById('emptyState');
const searchInput   = document.getElementById('searchInput');
const sortSelect    = document.getElementById('sortSelect');
const filterChips   = document.getElementById('filterChips');

/* ── Helpers ───────────────────────────── */
function filtered() {
  let list = [...COMPANIES];
  if (state.filter !== 'all') list = list.filter(c => c.cat === state.filter);
  if (state.search.trim()) {
    const q = state.search.toLowerCase();
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.roles.some(r => r.title.toLowerCase().includes(q)) ||
      c.skills.some(s => s.toLowerCase().includes(q))
    );
  }
  if (state.sort === 'ctc-high') list.sort((a,b) => b.ctcNum - a.ctcNum);
  if (state.sort === 'ctc-low')  list.sort((a,b) => a.ctcNum - b.ctcNum);
  if (state.sort === 'name')     list.sort((a,b) => a.name.localeCompare(b.name));
  return list;
}

function badgeClass(cat) {
  return `badge-${cat}`;
}

function catLabel(cat) {
  return { product:'Product', service:'Service / IT', mnc:'MNC', startup:'Startup', finance:'Finance' }[cat] || cat;
}

/* ── Render Sidebar List ────────────────── */
function renderList() {
  const list = filtered();
  companyList.innerHTML = '';
  compCount.textContent = `${list.length} Compan${list.length === 1 ? 'y' : 'ies'} Found`;

  if (!list.length) {
    companyList.innerHTML = `<li style="text-align:center;padding:32px 0;color:#94a3b8;font-size:.85rem;">No companies found.</li>`;
    return;
  }

  list.forEach((c, i) => {
    const li = document.createElement('li');
    li.className = `comp-item${state.selected === c.id ? ' active' : ''}`;
    li.style.animationDelay = `${i * 0.04}s`;
    li.innerHTML = `
      <div class="comp-logo" style="background:${c.bg};color:${c.color}">${c.abbr}</div>
      <div class="comp-info">
        <div class="comp-name">${c.name}</div>
        <div class="comp-ctc">${c.ctc}</div>
      </div>
      <span class="comp-badge ${badgeClass(c.cat)}">${catLabel(c.cat)}</span>
    `;
    li.addEventListener('click', () => selectCompany(c.id));
    companyList.appendChild(li);
  });
}

/* ── Render Detail Panel ────────────────── */
function selectCompany(id) {
  state.selected = id;
  const c = COMPANIES.find(x => x.id === id);
  if (!c) return;

  // Update sidebar active state
  document.querySelectorAll('.comp-item').forEach(el => el.classList.remove('active'));
  const items = companyList.querySelectorAll('.comp-item');
  const filteredList = filtered();
  const idx = filteredList.findIndex(x => x.id === id);
  if (items[idx]) items[idx].classList.add('active');

  emptyState.classList.add('hidden');
  detailContent.classList.remove('hidden');

  detailContent.innerHTML = `
    <!-- HEADER -->
    <div class="detail-header">
      <div class="dh-top">
        <div class="dh-logo" style="background:${c.bg};color:${c.color}">${c.abbr}</div>
        <div class="dh-info">
          <h2>${c.name}</h2>
          <div class="dh-tags">
            <span class="dh-tag">${catLabel(c.cat)}</span>
            <span class="dh-tag"><i class="fas fa-map-marker-alt" style="margin-right:4px"></i>${c.location}</span>
            <span class="dh-tag">Est. ${c.founded}</span>
          </div>
        </div>
      </div>
      <div class="dh-quick">
        <div class="dq-box">
          <span class="dq-val" style="color:#16a34a">${c.ctc}</span>
          <span class="dq-lbl">CTC Range</span>
        </div>
        <div class="dq-box">
          <span class="dq-val">${c.cgpa > 0 ? c.cgpa.toFixed(1) : 'No cut'}</span>
          <span class="dq-lbl">Min CGPA</span>
        </div>
        <div class="dq-box">
          <span class="dq-val">${c.roles.length}</span>
          <span class="dq-lbl">Job Roles</span>
        </div>
        <div class="dq-box">
          <span class="dq-val">${c.employees}</span>
          <span class="dq-lbl">Employees</span>
        </div>
      </div>
    </div>

    <!-- BODY -->
    <div class="detail-body">

      <!-- Job Roles -->
      <div class="detail-section">
        <div class="ds-title"><i class="fas fa-briefcase"></i> Job Roles & Packages</div>
        <table class="roles-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>CTC</th>
              <th>Type</th>
              <th>Branches</th>
            </tr>
          </thead>
          <tbody>
            ${c.roles.map(r => `
              <tr>
                <td class="role-name">${r.title}</td>
                <td class="ctc-cell">${r.ctc}</td>
                <td>${r.type}</td>
                <td style="font-size:.78rem;color:#64748b">${c.branches.join(', ')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Skills -->
      <div class="detail-section">
        <div class="ds-title"><i class="fas fa-tools"></i> Skills Required</div>
        <div class="skills-wrap">
          ${c.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
        </div>
      </div>

      <!-- Selection Process -->
      <div class="detail-section">
        <div class="ds-title"><i class="fas fa-list-ol"></i> Selection Process</div>
        <div class="rounds-list">
          ${c.rounds.map((r, i) => `
            <div class="round-row">
              <div class="rnum">${i + 1}</div>
              <div class="rtext">
                <strong>${r.name}</strong>
                <span>${r.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Eligibility -->
      <div class="detail-section">
        <div class="ds-title"><i class="fas fa-check-circle"></i> Eligibility Criteria</div>
        <div class="elig-items">
          ${c.elig.map(e => `
            <div class="elig-row">
              <i class="fas fa-circle-check"></i>
              <span>${e}</span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // Scroll detail into view on mobile
  if (window.innerWidth < 820) {
    detailContent.closest('.detail-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ── Events ─────────────────────────────── */
searchInput.addEventListener('input', () => {
  state.search = searchInput.value;
  renderList();
});

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  renderList();
});

filterChips.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  state.filter = chip.dataset.cat;
  renderList();
});

/* ── Navbar scroll + toggle ─────────────── */
const header    = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(26,111,191,.14)'
    : '0 2px 12px rgba(26,111,191,.1)';
});

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

/* ── Init ──────────────────────────────── */
renderList();