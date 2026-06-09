// Section switching
document.querySelectorAll('.snav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sec-' + btn.dataset.sec).classList.add('active');
    document.querySelector('.content').scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Canteen tabs
document.querySelectorAll('.ctab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ctab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('ctab-' + tab.dataset.ctab).classList.add('active');
  });
});

// Star rating
document.querySelectorAll('.stars').forEach(group => {
  const stars = group.querySelectorAll('.star');
  stars.forEach((star, i) => {
    star.addEventListener('click', () => {
      stars.forEach((s, j) => s.classList.toggle('on', j <= i));
    });
    star.addEventListener('mouseover', () => {
      stars.forEach((s, j) => s.classList.toggle('on', j <= i));
    });
  });
  group.addEventListener('mouseleave', () => {
    const chosen = [...stars].filter(s => s.classList.contains('on')).length;
    stars.forEach((s, j) => s.classList.toggle('on', j < chosen));
  });
});

// Book search
function filterBooks() {
  const q = document.getElementById('bookSearch').value.toLowerCase();
  document.querySelectorAll('.book-card').forEach(card => {
    card.style.display = card.dataset.title.toLowerCase().includes(q) ? '' : 'none';
  });
}

// Lab timeslot
function selectSlot(el) {
  if (el.classList.contains('taken')) return;
  document.querySelectorAll('.timeslot.avail').forEach(t => t.classList.remove('sel'));
  el.classList.add('sel');
}

// Toast
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}