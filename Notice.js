/* ==========================================
   PVKCE – Notice Board  |  app.js
   Full featured: filter, search, modal,
   pagination, sort, ticker, skeleton
========================================== */

const ITEMS_PER_PAGE = 9;
let currentPage   = 1;
let activeFilter  = 'all';
let searchQuery   = '';
let sortOrder     = 'newest';

// ── DATA ─────────────────────────────────
const DATA = [
  // EVENTS
  {
    id: 1, type: 'event', pinned: true, isNew: true,
    title: 'Campus Placement Drive – TCS & Wipro',
    desc: 'On-campus placement drive by TCS and Wipro for BE/B.Tech final year students. Carry your updated resume and ID proof.',
    date: '2026-06-10', time: '9:00 AM', venue: 'Main Auditorium',
    dept: 'All Departments', coordinator: 'Training & Placement Cell',
    details: `<p>TCS and Wipro are visiting our campus for recruitment. Eligible students from CSE, ECE, IT, and EEE can register via the placement portal before June 8, 2026.</p><ul><li>Aptitude Test – 9:00 AM</li><li>Technical Interview – 11:00 AM</li><li>HR Round – 2:00 PM</li></ul><table class='detail-table'><tr><th>Company</th><th>Package</th><th>Role</th></tr><tr><td>TCS</td><td>3.6 LPA</td><td>System Engineer</td></tr><tr><td>Wipro</td><td>3.5 LPA</td><td>Project Engineer</td></tr></table>`,
    tags: ['Placement', 'TCS', 'Wipro']
  },
  {
    id: 2, type: 'event', pinned: false, isNew: true,
    title: 'Dance 2K26 – Annual Cultural Fest',
    desc: 'Inter-department dance competition as part of Annual Cultural Fest 2026. Solo, duet and group categories open.',
    date: '2026-04-27', time: '11:00 AM', venue: 'Open Air Theatre',
    dept: 'All Departments', coordinator: 'Cultural Committee',
    details: `<p>Register your team and showcase your talent at Dance 2K26. Categories include Bharatanatyam, Western, Folk, and Fusion.</p><ul><li>Registration deadline: April 24, 2026</li><li>Last entry: 10 members per group</li><li>Prizes worth ₹50,000</li></ul>`,
    tags: ['Cultural', 'Dance', 'Fest']
  },
  {
    id: 3, type: 'event', pinned: false, isNew: false,
    title: 'National Level Symposium – TechNova 2026',
    desc: 'Technical symposium featuring paper presentations, workshops, and hackathon with participants from across India.',
    date: '2026-07-05', time: '9:30 AM', venue: 'Seminar Hall Block A',
    dept: 'CSE & IT', coordinator: 'Dr. R. Priya',
    details: `<p>TechNova 2026 is a national-level technical symposium. Events include paper presentations, project expo, coding contest, and workshops on AI/ML and Cloud Computing.</p><ul><li>Last date to register: June 30</li><li>Registration fee: ₹200 per team</li><li>Participation certificate for all</li></ul>`,
    tags: ['Symposium', 'Technical', 'Hackathon']
  },
  {
    id: 4, type: 'event', pinned: false, isNew: false,
    title: 'Sports Day 2026 – Annual Athletic Meet',
    desc: 'Annual sports meet featuring track & field events, team games, and individual competitions. Open to all students.',
    date: '2026-06-28', time: '7:00 AM', venue: 'College Grounds',
    dept: 'All Departments', coordinator: 'Sports Committee',
    details: `<p>Annual Athletic Meet 2026. Events include 100m/200m dash, long jump, shot put, relay race, volleyball, cricket, and kabaddi.</p>`,
    tags: ['Sports', 'Athletics']
  },
  {
    id: 5, type: 'event', pinned: false, isNew: false,
    title: 'Workshop: Python for Data Science',
    desc: 'Two-day hands-on workshop on Python programming for data analysis, visualization and machine learning.',
    date: '2026-06-20', time: '9:00 AM', venue: 'Computer Lab 3',
    dept: 'CSE / IT / MCA', coordinator: 'Mr. S. Kumar',
    details: `<p>Two-day hands-on workshop covering NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn. Bring your laptop with Python 3.11+ installed.</p>`,
    tags: ['Workshop', 'Python', 'AI/ML']
  },

  // EXAMS
  {
    id: 6, type: 'exam', pinned: true, isNew: true,
    title: 'End Semester Exam 2k26',
    desc: 'University End Semester Examinations for all undergraduate and postgraduate programmes (April/May 2026).',
    date: '2026-06-04', time: 'All Day', venue: 'Respective Exam Halls',
    dept: 'All Departments', coordinator: 'Examination Cell',
    details: `<p>End Semester Examinations for even semester 2025-26 begin on June 4, 2026. Students must download their hall tickets from the student portal.</p><table class='detail-table'><tr><th>Date</th><th>Subject</th><th>Time</th></tr><tr><td>04 Jun</td><td>Engineering Mathematics IV</td><td>10 AM – 1 PM</td></tr><tr><td>06 Jun</td><td>Database Management Systems</td><td>10 AM – 1 PM</td></tr><tr><td>09 Jun</td><td>Computer Networks</td><td>10 AM – 1 PM</td></tr><tr><td>11 Jun</td><td>Operating Systems</td><td>10 AM – 1 PM</td></tr></table>`,
    tags: ['Exam', 'University', 'End Semester']
  },
  {
    id: 7, type: 'exam', pinned: false, isNew: false,
    title: 'Internal Assessment Test – IAT II',
    desc: 'Second Internal Assessment Test for all third and fifth semester students.',
    date: '2026-07-15', time: '9:00 AM', venue: 'Respective Classrooms',
    dept: 'All Departments', coordinator: 'Academic Section',
    details: `<p>IAT II will be conducted from July 15–19, 2026. Timetable shared through the HOD notice board. Students scoring below 50% must appear for re-test.</p>`,
    tags: ['IAT', 'Internal Test']
  },
  {
    id: 8, type: 'exam', pinned: false, isNew: false,
    title: 'Supplementary Examination – Nov 2025',
    desc: 'Arrear and supplementary exams for students who failed in Nov/Dec 2025 semester examinations.',
    date: '2026-06-18', time: '10:00 AM', venue: 'Exam Hall Block B',
    dept: 'All Departments', coordinator: 'Examination Cell',
    details: `<p>Students with backlogs from Nov/Dec 2025 exams should register on the portal before June 10, 2026. Fee: ₹500 per subject.</p>`,
    tags: ['Supplementary', 'Arrear']
  },

  // NOTICES
  {
    id: 9, type: 'notice', pinned: false, isNew: true,
    title: 'Fee Payment – Odd Semester 2026-27',
    desc: 'Last date for payment of tuition and hostel fees for the odd semester 2026-27 is July 20, 2026.',
    date: '2026-06-01', time: '—', venue: 'Accounts Section',
    dept: 'All Students', coordinator: 'Accounts Office',
    details: `<p>Students are required to pay their semester fees before July 20, 2026 to avoid a late fee penalty of ₹500. Payment can be done online via the student portal or at the accounts counter.</p>`,
    tags: ['Fee', 'Payment', 'Finance']
  },
  {
    id: 10, type: 'notice', pinned: false, isNew: true,
    title: 'Scholarship Applications – BC/MBC 2026',
    desc: 'Applications for BC/MBC/DNC government scholarships for 2026-27 are open. Submit documents to the scholarship section.',
    date: '2026-06-02', time: '—', venue: 'Scholarship Section',
    dept: 'All Students', coordinator: 'Scholarship Cell',
    details: `<p>Eligible students must submit their scholarship applications along with income certificate, community certificate, and Aadhaar card by July 5, 2026. Late submissions will not be accepted.</p>`,
    tags: ['Scholarship', 'BC/MBC', 'Government']
  },
  {
    id: 11, type: 'notice', pinned: false, isNew: false,
    title: 'Anti-Ragging Committee – Student Declaration',
    desc: 'All newly admitted students must submit the signed anti-ragging declaration before June 15, 2026.',
    date: '2026-05-28', time: '—', venue: 'Dean Students Welfare Office',
    dept: 'I Year Students', coordinator: 'DSW Office',
    details: `<p>Anti-ragging undertaking forms are available at the admission office and can also be downloaded from the college website. Both student and parent signatures are mandatory.</p>`,
    tags: ['Anti-Ragging', 'First Year', 'Mandatory']
  },
  {
    id: 12, type: 'notice', pinned: false, isNew: false,
    title: 'Library – Overdue Books Return Notice',
    desc: 'Students with overdue library books must return them before June 10, 2026 to avoid fines.',
    date: '2026-05-25', time: '—', venue: 'Central Library',
    dept: 'All Students', coordinator: 'Librarian',
    details: `<p>Fine: ₹2 per day per book. Library membership will be suspended after June 10 for non-return.</p>`,
    tags: ['Library', 'Fine', 'Books']
  },

  // CIRCULARS
  {
    id: 13, type: 'circular', pinned: false, isNew: true,
    title: 'Anti-Ragging Committee Meeting – Minutes',
    desc: 'Minutes of the Anti-Ragging Committee meeting held on June 2, 2026. All HODs to take note.',
    date: '2026-06-02', time: '—', venue: 'Conference Hall',
    dept: 'All Staff', coordinator: 'Principal Office',
    details: `<p>The Anti-Ragging Committee met on June 2, 2026 and discussed the following: installation of CCTV in hostel blocks, appointment of wardens for new hostel, and awareness sessions for first-year students.</p>`,
    tags: ['Committee', 'Meeting', 'Staff']
  },
  {
    id: 14, type: 'circular', pinned: false, isNew: false,
    title: 'Academic Calendar – 2026-27 (Odd Semester)',
    desc: 'Revised academic calendar for the odd semester 2026-27 approved by the Academic Council.',
    date: '2026-05-20', time: '—', venue: '—',
    dept: 'All Departments', coordinator: 'Academic Section',
    details: `<p>Odd Semester: July 15 – November 28, 2026. IAT I: Aug 15–19. IAT II: Sep 20–24. Model Exam: Nov 10–14. End Sem Exam: Nov 30 onwards. Holidays as per Tamil Nadu Govt. calendar.</p>`,
    tags: ['Academic Calendar', 'Circular']
  },
  {
    id: 15, type: 'circular', pinned: false, isNew: false,
    title: 'Dress Code Enforcement – Circular No. 12',
    desc: 'Strict dress code policy will be enforced from the next academic year. All students to comply.',
    date: '2026-05-15', time: '—', venue: '—',
    dept: 'All Students', coordinator: 'Principal Office',
    details: `<p>Boys: Black trousers with white full-sleeve shirt and ID card. Girls: Churidar in college colours. No casual wear allowed on weekdays. Violation will result in disciplinary action.</p>`,
    tags: ['Dress Code', 'Discipline']
  },

  // HOLIDAYS
  {
    id: 16, type: 'holiday', pinned: false, isNew: false,
    title: 'Summer Vacation 2026',
    desc: 'Summer holidays for all students from June 15 to July 14, 2026. College reopens on July 15.',
    date: '2026-06-15', time: 'All Day', venue: '—',
    dept: 'All Students', coordinator: 'Academic Section',
    details: `<p>Summer vacation: June 15 – July 14, 2026 (30 days). The college will reopen for the Odd Semester 2026-27 on July 15, 2026. Administrative and examination sections will function during vacation.</p>`,
    tags: ['Vacation', 'Holiday', 'Summer']
  },
  {
    id: 17, type: 'holiday', pinned: false, isNew: false,
    title: 'Eid al-Adha Holiday',
    desc: 'College closed on June 17, 2026 (Tuesday) on account of Bakrid / Eid al-Adha.',
    date: '2026-06-17', time: 'All Day', venue: '—',
    dept: 'All', coordinator: '—',
    details: `<p>College holiday on June 17, 2026. Hostel students can apply for leave at the warden's office.</p>`,
    tags: ['Holiday', 'Bakrid']
  },
  {
    id: 18, type: 'holiday', pinned: false, isNew: false,
    title: 'Pongal Holidays – 2026',
    desc: 'College closed for Pongal festival from January 13–16, 2026.',
    date: '2026-01-13', time: 'All Day', venue: '—',
    dept: 'All', coordinator: '—',
    details: `<p>Four-day Pongal holiday: Jan 13 (Bhogi), Jan 14 (Pongal), Jan 15 (Mattu Pongal), Jan 16 (Kaanum Pongal). College reopens Jan 17.</p>`,
    tags: ['Holiday', 'Pongal', 'Festival']
  },

  // NEWS
  {
    id: 19, type: 'news', pinned: false, isNew: true,
    title: 'PVKCE Ranks Among Top 50 Private Colleges in TN – 2026 Survey',
    desc: 'Prince Dr. K. Vasudevan College of Engineering and Technology has been ranked among the top 50 private engineering colleges in Tamil Nadu.',
    date: '2026-05-30', time: '—', venue: '—',
    dept: '—', coordinator: 'Public Relations',
    details: `<p>The college has been ranked 42nd among private engineering colleges in Tamil Nadu by the State Education Quality Survey 2026. The ranking credits the college's excellent placement record, faculty credentials, and infrastructure.</p>`,
    tags: ['Ranking', 'Achievement', 'TN']
  },
  {
    id: 20, type: 'news', pinned: false, isNew: false,
    title: 'MoU Signed with Zoho Corporation for Student Internships',
    desc: 'PVKCE has signed a Memorandum of Understanding with Zoho Corporation for student internships and industry projects.',
    date: '2026-05-12', time: '—', venue: 'Principal\'s Office',
    dept: 'CSE / IT', coordinator: 'T&P Cell',
    details: `<p>The MoU was signed on May 12, 2026 in the presence of the Principal and Zoho HR Manager. Selected students from CSE and IT will get 3-month paid internships at Zoho. Applications open in July 2026.</p>`,
    tags: ['MoU', 'Zoho', 'Internship']
  },
  {
    id: 21, type: 'news', pinned: false, isNew: false,
    title: 'Student Wins Gold at National Robotics Competition',
    desc: 'CSE student Arun Prakash won the Gold Medal at the National Robotics Competition 2026 held in IIT Chennai.',
    date: '2026-04-20', time: '—', venue: 'IIT Madras',
    dept: 'CSE', coordinator: 'Robotics Club',
    details: `<p>Arun Prakash (III CSE-B) won the gold medal in the "Autonomous Navigation" category at the National Robotics Competition 2026. He will represent Tamil Nadu at the international level competition in August 2026.</p>`,
    tags: ['Achievement', 'Robotics', 'Award']
  }
];

// ── UTILITIES ─────────────────────────────
const TYPE_ICON = {
  event: 'fa-calendar-star', exam: 'fa-file-alt',
  notice: 'fa-bullhorn', circular: 'fa-scroll',
  holiday: 'fa-umbrella-beach', news: 'fa-newspaper'
};
const TYPE_LABEL = {
  event:'Event', exam:'Exam', notice:'Notice',
  circular:'Circular', holiday:'Holiday', news:'News'
};

function parseDate(d){ return new Date(d); }

function sortData(arr){
  const copy = [...arr];
  if(sortOrder === 'newest') return copy.sort((a,b) => parseDate(b.date) - parseDate(a.date));
  if(sortOrder === 'oldest') return copy.sort((a,b) => parseDate(a.date) - parseDate(b.date));
  if(sortOrder === 'az')     return copy.sort((a,b) => a.title.localeCompare(b.title));
  return copy;
}

function filterData(){
  return DATA.filter(item => {
    const matchType = activeFilter === 'all' || item.type === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(q)));
    return matchType && matchSearch;
  });
}

function fmtDate(d){
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
}

// ── CARD HTML ─────────────────────────────
function buildCard(item, mini = false){
  const div = document.createElement('div');
  div.className = 'card' + (item.pinned ? ' pinned' : '');
  div.style.animationDelay = (Math.random() * 0.15) + 's';

  div.innerHTML = `
    <div class="card-top ${item.type}"></div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-tag ${item.type}">
          <i class="fas ${TYPE_ICON[item.type]}"></i>
          ${TYPE_LABEL[item.type]}
        </span>
        <div style="display:flex;gap:6px;align-items:center">
          ${item.isNew ? `<span class="card-new">New</span>` : ''}
          ${item.pinned ? `<span class="card-pin"><i class="fas fa-thumbtack"></i></span>` : ''}
        </div>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc.length > 100 ? item.desc.slice(0,100)+'…' : item.desc}</p>
    </div>
    <div class="card-footer">
      <span class="card-info"><i class="fas fa-calendar"></i> ${fmtDate(item.date)}</span>
      ${item.time !== '—' ? `<span class="card-info"><i class="fas fa-clock"></i> ${item.time}</span>` : ''}
      <button class="card-action" data-id="${item.id}"><i class="fas fa-arrow-right"></i> View</button>
    </div>
  `;

  div.addEventListener('click', () => openModal(item.id));
  return div;
}

// ── RENDER ────────────────────────────────
function render(){
  const filtered = filterData();
  const sorted   = sortData(filtered);
  const pinned   = sorted.filter(i => i.pinned);
  const normal   = sorted.filter(i => !i.pinned);

  // Pinned
  const pinnedGrid = document.getElementById('pinnedGrid');
  const pinnedSection = document.getElementById('pinnedSection');
  pinnedGrid.innerHTML = '';
  if(pinned.length && (activeFilter === 'all' || true)){
    pinnedSection.style.display = '';
    pinned.forEach(i => pinnedGrid.appendChild(buildCard(i)));
  } else {
    pinnedSection.style.display = 'none';
  }

  // Main grid
  const total = normal.length;
  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const page  = normal.slice(start, start + ITEMS_PER_PAGE);

  const grid = document.getElementById('mainGrid');
  grid.innerHTML = '';

  if(page.length === 0 && pinned.length === 0){
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `<i class="fas fa-search"></i><h3>No results found</h3><p>Try a different filter or search term.</p>`;
    grid.appendChild(empty);
  } else {
    page.forEach((item, i) => {
      const card = buildCard(item);
      card.style.animationDelay = (i * 0.06) + 's';
      grid.appendChild(card);
    });
  }

  // Result count
  document.getElementById('resultCount').textContent =
    `Showing ${total} item${total !== 1 ? 's' : ''}`;

  renderPagination(totalPages);
}

function renderPagination(totalPages){
  const nums = document.getElementById('pageNumbers');
  nums.innerHTML = '';
  for(let i = 1; i <= totalPages; i++){
    const btn = document.createElement('button');
    btn.className = 'page-num' + (i === currentPage ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => { currentPage = i; render(); window.scrollTo({top:600,behavior:'smooth'}); });
    nums.appendChild(btn);
  }
  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage === totalPages;
}

// ── MODAL ─────────────────────────────────
function openModal(id){
  const item = DATA.find(d => d.id === id);
  if(!item) return;

  const header = document.getElementById('modalHeader');
  const body   = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  header.innerHTML = `
    <span class="m-tag ${item.type}">
      <i class="fas ${TYPE_ICON[item.type]}"></i> ${TYPE_LABEL[item.type]}
    </span>
    <h2>${item.title}</h2>
    <div class="m-meta">
      <span><i class="fas fa-calendar"></i> ${fmtDate(item.date)}</span>
      ${item.time !== '—' ? `<span><i class="fas fa-clock"></i> ${item.time}</span>` : ''}
      ${item.venue !== '—' ? `<span><i class="fas fa-map-marker-alt"></i> ${item.venue}</span>` : ''}
      ${item.dept ? `<span><i class="fas fa-users"></i> ${item.dept}</span>` : ''}
    </div>
  `;

  // colour tag
  const tag = header.querySelector('.m-tag');
  tag.style.background = `var(--${item.type}-bg)`;
  tag.style.color       = `var(--${item.type}-fg)`;

  body.innerHTML = item.details || `<p>${item.desc}</p>`;

  footer.innerHTML = `
    <button class="btn-primary" onclick="window.print()">
      <i class="fas fa-print"></i> Print
    </button>
    <button class="btn-secondary" onclick="closeModal()">
      <i class="fas fa-times"></i> Close
    </button>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── EVENTS ────────────────────────────────
// Filter tabs
document.getElementById('filterTabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if(!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  activeFilter = tab.dataset.filter;
  currentPage  = 1;
  render();
});

// Search
const searchInput = document.getElementById('searchInput');
const clearBtn    = document.getElementById('clearSearch');
let searchTimer;
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim();
  clearBtn.classList.toggle('visible', searchQuery.length > 0);
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { currentPage = 1; render(); }, 300);
});
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearBtn.classList.remove('visible');
  currentPage = 1; render();
});

// Sort
document.getElementById('sortSelect').addEventListener('change', e => {
  sortOrder = e.target.value;
  currentPage = 1; render();
});

// Pagination
document.getElementById('prevPage').addEventListener('click', () => {
  if(currentPage > 1){ currentPage--; render(); window.scrollTo({top:600,behavior:'smooth'}); }
});
document.getElementById('nextPage').addEventListener('click', () => {
  currentPage++; render(); window.scrollTo({top:600,behavior:'smooth'});
});

// Modal close
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if(e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
  document.getElementById('backTop').classList.toggle('visible', scrollY > 400);
});

// Back to top
document.getElementById('backTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Animated counters
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 30));
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if(cur >= target) clearInterval(t);
    }, 40);
  });
}

// Duplicate ticker for seamless loop
const track = document.getElementById('tickerTrack');
track.innerHTML += track.innerHTML;

// ── INIT ──────────────────────────────────
render();
setTimeout(animateCounters, 400);