/* Update this to the real start date/time if needed. */
const EVENT_START = new Date('2026-05-01T09:00:00+06:00');

function pad2(n) {
  return String(n).padStart(2, '0');
}

function setText(id, v) {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
}

function tick() {
  const now = new Date();
  const diffMs = EVENT_START - now;

  if (!Number.isFinite(diffMs)) return;

  if (diffMs <= 0) {
    setText('cdDays', '00');
    setText('cdHours', '00');
    setText('cdMins', '00');
    setText('cdSecs', '00');
    setText('cdNote', 'Battle has commenced.');
    return;
  }

  const s = Math.floor(diffMs / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  setText('cdDays', pad2(days));
  setText('cdHours', pad2(hours));
  setText('cdMins', pad2(mins));
  setText('cdSecs', pad2(secs));
  setText('cdNote', `Event start: ${EVENT_START.toLocaleString()}`);
}

tick();
setInterval(tick, 1000);

// Music toggle (autoplay is usually blocked, so we start on user click)
const musicBtn = document.getElementById('musicToggle');
const bgm = document.getElementById('bgm');

async function toggleMusic() {
  if (!bgm || !musicBtn) return;

  try {
    if (bgm.paused) {
      await bgm.play();
      musicBtn.textContent = 'Pause Music';
      return;
    }

    bgm.pause();
    musicBtn.textContent = 'Play Music';
  } catch {
    musicBtn.textContent = 'Tap to Play';
  }
}

if (musicBtn) musicBtn.addEventListener('click', toggleMusic);

// Simple lightbox for gallery
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');

function openLightbox(src) {
  if (!lb || !lbImg) return;
  lbImg.src = src;
  lb.showModal();
}

function closeLightbox() {
  if (!lb) return;
  lb.close();
}

document.querySelectorAll('.g[data-full]').forEach((btn) => {
  btn.addEventListener('click', () => openLightbox(btn.getAttribute('data-full')));
});

if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lb) lb.addEventListener('click', (e) => {
  if (e.target === lb) closeLightbox();
});
