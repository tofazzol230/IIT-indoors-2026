// Update this if your actual kickoff date/time differs.
// Local timezone will be used by the browser.
const EVENT_START = new Date('2026-05-08T09:00:00');

const schedule = {
  alltime: {
    title: 'All Time Open',
    subtitle: 'Open throughout the event window',
    items: [
      { name: 'Wire Loop', time: 'All Time Open', location: 'IIT', manpower: 12, category: 'Fun', img: './game-assets/Wire-Loop.png' },
      { name: "Rubik's Cube", time: 'All Time Open', location: 'IIT', manpower: 12, category: 'Fun', img: './game-assets/Rubiks-Cube.png' },
      { name: 'Dart', time: 'All Time Open', location: 'IIT', manpower: 12, category: 'Fun', img: './game-assets/Dart.png' },
      { name: 'Typing Speed Contest', time: 'All Time Open', location: 'IIT', manpower: 12, category: 'Fun', img: './game-assets/Typing-Speed-Contest.png' },
      { name: 'UNO', time: 'All Time Open', location: 'IIT', manpower: 12, category: 'Casual', img: './game-assets/UNO.png' },
      { name: 'Ludo', time: 'All Time Open', location: 'IIT', manpower: 12, category: 'Casual', img: './game-assets/Ludo.png' },
    ],
  },
  fri: {
    title: 'Friday',
    subtitle: 'Warm-up + group stage',
    items: [
      { name: 'Chess', time: '3:00 – 8:00', location: 'IIT', manpower: 2, category: 'Solo', img: './game-assets/Chess.png' },
      { name: 'Carrom (Group Stage)', time: '3:00 – 8:00', location: 'IIT', manpower: 3, category: 'Classic', img: './game-assets/Carrom.png' },
      { name: 'Pucket', time: '3:00 – 8:00', location: 'IIT', manpower: 2, category: 'Solo', img: './game-assets/Pucket.png' },
      { name: 'Scrabble', time: '5:00 – 6:00', location: 'IIT', manpower: 5, category: 'Solo', img: './game-assets/Scrabble.png' },
    ],
  },
  sat: {
    title: 'Saturday',
    subtitle: 'Group stage + knockouts + fun rounds',
    items: [
      { name: 'Short-Pitch Cricket (Group Stage)', time: '9:00 – 1:00', location: 'IIT / Gymnasium', manpower: 8, category: 'Team', img: './game-assets/Short-Pitch Cricket.png' },
      { name: 'Carrom (Group Stage)', time: '9:00 – 1:00', location: 'IIT', manpower: 3, category: 'Classic', img: './game-assets/Carrom.png' },
      { name: 'Card 29', time: '9:00 – 5:00', location: 'IIT / Gymnasium', manpower: 5, category: 'Team', img: './game-assets/Cards-29.png' },
      { name: 'Chess', time: '9:00 – 1:00', location: 'IIT', manpower: 2, category: 'Solo', img: './game-assets/Chess.png' },

      { name: 'Short-Pitch Cricket (Knockout)', time: '2:00 – 4:00', location: 'IIT / Gymnasium', manpower: 8, category: 'Team', img: './game-assets/Short-Pitch Cricket.png' },
      { name: 'Pucket', time: '2:00 – 4:00', location: 'IIT', manpower: 2, category: 'Solo', img: './game-assets/Pucket.png' },

      { name: 'Musical Chair', time: '4:00 – 5:00', location: 'Gymnasium', manpower: null, category: 'Solo', img: './game-assets/Musical-Chairs.png' },
      { name: 'Dumb Charades', time: '5:00 – 6:00', location: 'IIT / Gymnasium', manpower: null, category: 'Team', img: './game-assets/Dumb-Charedes.png' },
    ],
  },
};

const galleryImages = [
  './gallery/1.png',
  './gallery/666642290_1293757715419223_4419482019601654527_n.jpg',
  './gallery/673396195_1235963585000480_4428165126573920792_n.jpg',
  './gallery/658377974_1450646746859184_3369432256070612256_n.jpg',
  './gallery/486646832_1195892318877056_8820325064339165676_n.jpg',
  './gallery/486466595_1195891515543803_5956546339273922653_n.jpg',
  './gallery/675340605_26190959947271557_1539123008962389256_n.jpg',
  './gallery/486717766_1195892365543718_935033014226977325_n.jpg',
  './gallery/486767627_1195891708877117_8788821560849265420_n.jpg',
  './gallery/486723341_1195894228876865_6026533912202353386_n.jpg',
];

const gameThemes = {
  "Wire Loop": "Skill • Precision",
  "Rubik's Cube": "Puzzle • Colorful",
  "Dart": "Precision • Target",
  "Typing Speed Contest": "Tech • Speed",
  "UNO": "Casual • Colorful",
  "Ludo": "Board • Family",
  "Chess": "Strategy • Classic",
  "Pucket": "Fast • Reflexes",
  "Scrabble": "Words • Brainy",
  "Short-Pitch Cricket": "Team • Energetic",
  "Table Tennis": "Fast • Agile",
  "Card 29": "Tactics • Cards",
  "Musical Chair": "Fun • Party",
  "Dumb Charades": "Acting • Team",
  "Carrom": "Classic • Precision"
};

function pad2(n){
  return String(n).padStart(2,'0');
}

function formatDateLabel(d){
  try{
    return d.toLocaleString(undefined, {weekday:'short', year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit'});
  }catch{
    return d.toString();
  }
}

function tickCountdown(){
  const now = new Date();
  const diff = EVENT_START.getTime() - now.getTime();

  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');

  if(diff <= 0){
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minsEl.textContent = '00';
    secsEl.textContent = '00';
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  daysEl.textContent = pad2(days);
  hoursEl.textContent = pad2(hours);
  minsEl.textContent = pad2(mins);
  secsEl.textContent = pad2(secs);
}

function eventCard(e){
  const imgSrc = e.img || './game-assets/Carrom.svg';
  const base = imgSrc.split('/').pop();

  // helper: category + location line
  const categoryLine = e.category ? `<div class="event__category muted">${escapeHtml(e.category)}</div>` : `<div class="event__category muted">${escapeHtml(e.location)}</div>`;

  // if the configured img is an HTML page, show a preview (svg preferred, png fallback) and link to the HTML
  if (imgSrc.endsWith('.html')){
    const name = base.replace('.html','');
    const svgPreview = `./game-assets/${name}.svg`;
    const pngPreview = `./game-assets/${name}.png`;
    const imgHtml = `<div class="event__img"><a class="event__imgLink" href="${imgSrc}" target="_blank" rel="noreferrer"><img src="${svgPreview}" onerror="this.src='${pngPreview}'" alt="${escapeHtml(e.name)}" loading="lazy"></a></div>`;

    const tags = [`<span class="tag tag--accent">${escapeHtml(e.time)} • ${escapeHtml(e.location)}</span>`];

    // pick theme by matching known keys inside the event name
    let themeText = null;
    if (typeof gameThemes === 'object'){
      for(const k of Object.keys(gameThemes)){
        if (e.name.includes(k)) { themeText = gameThemes[k]; break; }
      }
    }
    const theme = themeText ? `<div class="event__theme muted">${escapeHtml(themeText)}</div>` : '';

    return `
      <a class="event__link" href="${imgSrc}" target="_blank" rel="noreferrer">
        <article class="event">
          ${imgHtml}
          <div class="event__body">
            <h3 class="event__title">${escapeHtml(e.name)}</h3>
            ${categoryLine}
            ${theme}
            <div class="event__tags">${tags.join('')}</div>
          </div>
        </article>
      </a>
    `;
  }

  // default behavior for non-HTML images
  const imgHtml = `<div class="event__img"><img src="${imgSrc}" alt="${escapeHtml(e.name)}" loading="lazy"></div>`;
  const maybeLink = imgHtml;

  const tags = [`<span class="tag tag--accent">${escapeHtml(e.time)} • ${escapeHtml(e.location)}</span>`];

  let themeText = null;
  if (typeof gameThemes === 'object'){
    for(const k of Object.keys(gameThemes)){
      if (e.name.includes(k)) { themeText = gameThemes[k]; break; }
    }
  }
  const theme = themeText ? `<div class="event__theme muted">${escapeHtml(themeText)}</div>` : '';

  return `
    <article class="event">
      ${maybeLink}
      <div class="event__body">
        <h3 class="event__title">${escapeHtml(e.name)}</h3>
        ${categoryLine}
        ${theme}
        <div class="event__tags">${tags.join('')}</div>
      </div>
    </article>
  `;
}

function renderSchedule(){
  const targets = {
    alltime: document.getElementById('tab-alltime'),
    fri: document.getElementById('tab-fri'),
    sat: document.getElementById('tab-sat'),
  };

  for(const key of Object.keys(targets)){
    const block = schedule[key];
    targets[key].innerHTML = `
      <div class="muted" style="margin: 0 0 10px; font-weight:700">${escapeHtml(block.subtitle)}</div>
      <div class="events">
        ${block.items.map(eventCard).join('')}
      </div>
    `;
  }
}

function setupTabs(){
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panes = {
    alltime: document.getElementById('tab-alltime'),
    fri: document.getElementById('tab-fri'),
    sat: document.getElementById('tab-sat'),
  };

  function activate(key){
    tabs.forEach(t => {
      const isActive = t.dataset.tab === key;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    Object.keys(panes).forEach(k => panes[k].classList.toggle('is-active', k === key));
  }

  tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.tab)));
}

function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = galleryImages.map((src) => {
    const alt = src.split('/').pop()?.replaceAll('_',' ') || 'Gallery image';
    return `<div class="gallery__item" data-src="${src}"><img src="${src}" alt="${escapeHtml(alt)}" loading="lazy"></div>`;
  }).join('');

  // duplicate content for seamless continuous scroll
  if (grid){
    const original = grid.innerHTML;
    grid.innerHTML = original + original;
    // allow layout to settle then set to middle
    requestAnimationFrame(() => {
      try{
        grid._origHalf = Math.floor(grid.scrollWidth / 2);
        grid.scrollLeft = 0;
      }catch(e){/* ignore */}
    });
  }

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  function close(){
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  grid.addEventListener('click', (ev) => {
    const item = ev.target.closest('.gallery__item[data-src]');
    if(!item) return;
    const src = item.getAttribute('data-src');
    lbImg.src = src;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden','false');
  });

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', (ev) => { if(ev.target === lb) close(); });
  document.addEventListener('keydown', (ev) => { if(ev.key === 'Escape') close(); });

  // Continuous auto-scroll (left-to-right), faster and seamless
  try{
    let scrollSpeed = 2.6; // increase speed (faster)
    const tick = () => {
      if(!grid) return;
      const origHalf = grid._origHalf || Math.floor(grid.scrollWidth / 2);
      grid.scrollLeft = grid.scrollLeft + scrollSpeed;
      if (grid.scrollLeft >= origHalf) {
        // jump to start (identical content) for seamless loop
        grid.scrollLeft = 0;
      }
    };
    setInterval(tick, 16);
  }catch(e){/* ignore */}
}

function setupMusic(){
  const audio = document.getElementById('bgMusic');
  const toggle = document.getElementById('musicIcon');
  if(!audio || !toggle) return;

  audio.volume = 0.35;

  function setState(){
    const isPlaying = !audio.paused && !audio.muted;
    toggle.classList.toggle('is-playing', isPlaying);
    toggle.setAttribute('aria-pressed', String(isPlaying));
  }

  toggle.addEventListener('click', async () => {
    try{
      if(audio.paused) await audio.play();
      else audio.pause();
    }finally{
      // ensure unmuted when user explicitly toggles
      try{ audio.muted = false }catch(e){}
      setState();
    }
  });

  audio.addEventListener('play', setState);
  audio.addEventListener('pause', setState);

  // attempt autoplay with muted fallback then unmute if possible
  audio.play().then(()=>{
    // autoplay succeeded unmuted
    audio.muted = false;
    setState();
  }).catch(async ()=>{
    try{
      // try muted autoplay -> often allowed
      audio.muted = true;
      await audio.play();
      // attempt to unmute after short delay (may still be blocked by some browsers)
      setTimeout(()=>{
        try{ audio.muted = false }catch(e){}
        setState();
      }, 800);
    }catch(e){
      // autoplay fully blocked; show non-playing state
      setState();
    }
  });
}

function setupAnnouncement(){
  const container = document.getElementById('announcement');
  if(!container) return;
  const track = container.querySelector('.announcement__track');
  if(!track) return;

  // messages to rotate; this can be extended or updated from updates.json
  let messages = [ 'Event Dates: 8 — 9 May 2026' ];

  // helper to render and duplicate for seamless loop
  function render(){
    const html = messages.map(m => `<span>${escapeHtml(m)}</span>`).join('');
    track.innerHTML = html; // single instance per loop
  }

  render();

  // start position: place track fully to the right of the container
  let pos = container.clientWidth;
  track.style.left = pos + 'px';

  let paused = false;
  const speed = 2.4; // px per tick (adjust for speed)

  function step(){
    if(!paused){
      pos -= speed;
      track.style.left = pos + 'px';
      // when scrolled past full width of content, reset to right
      const width = track.scrollWidth;
      if(width > 0 && pos <= -width){
        pos = container.clientWidth;
        track.style.left = pos + 'px';
      }
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  // pause on hover, toggle pause on click (click handled by live radar opener too)
  container.addEventListener('mouseenter', ()=>{ paused = true; container.classList.add('paused'); });
  container.addEventListener('mouseleave', ()=>{ paused = false; container.classList.remove('paused'); });
  container.addEventListener('click', ()=>{ paused = true; container.classList.add('paused'); });

  // keep messages updated from updates.json if available
  async function refreshMessages(){
    try{
      const res = await fetch('./updates.json?_=' + Date.now());
      if(!res.ok) return;
      const d = await res.json();
      if(d && d.message){
        // push message to rotate if not already present
        if(!messages.includes(d.message)){
          messages.push(d.message);
          render();
        }
      }
    }catch(e){/* ignore */}
  }
  refreshMessages();
  setInterval(refreshMessages, 20000);
}

function setupLiveRadar(){
  const radar = document.getElementById('liveRadar');
  if(!radar) return;

  // create panel
  let panel = document.getElementById('livePanel');
  if(!panel){
    panel = document.createElement('div');
    panel.id = 'livePanel';
    panel.className = 'livePanel';
    panel.innerHTML = `<div class="livePanel__inner"><h3>Live Radar</h3><div id="liveMsg" class="muted">No updates</div><div style="margin-top:10px"><button id="liveCheck" class="btn">Check Now</button><button id="liveMark" class="btn" style="margin-left:8px">Mark Read</button></div></div>`;
    document.body.appendChild(panel);
  }

  // make announcement interactive: clicking announcement opens panel
  try{
    const announcementEl = document.getElementById('announcement');
    if(announcementEl){
      announcementEl.addEventListener('click', ()=>{
        panel.classList.add('is-open');
        // highlight radar and check updates
        radar.classList.add('has-update');
        // run one immediate check
        setTimeout(()=>{ try{ const btn = panel.querySelector('#liveCheck'); if(btn) btn.click(); }catch(e){} }, 80);
      });
    }
  }catch(e){/* ignore */}

  let last = localStorage.getItem('live_last') || null;

  async function check(){
    try{
      const res = await fetch('./updates.json?_='+Date.now());
      if(!res.ok) return;
      const data = await res.json();
      const latest = data.latest || null;
      const msg = data.message || '';
      const liveMsg = document.getElementById('liveMsg');
      if(latest && latest !== last){
        radar.classList.add('has-update');
        liveMsg.textContent = msg || ('Update: '+latest);
      }else{
        liveMsg.textContent = msg || 'No updates';
      }
    }catch(e){/* ignore */}
  }

  radar.addEventListener('click', ()=>{
    panel.classList.toggle('is-open');
    if(panel.classList.contains('is-open')) check();
  });

  // panel buttons
  const checkBtn = panel.querySelector('#liveCheck');
  const markBtn = panel.querySelector('#liveMark');
  if(checkBtn) checkBtn.addEventListener('click', check);
  if(markBtn) markBtn.addEventListener('click', ()=>{
    fetch('./updates.json').then(r=>r.json()).then(d=>{
      const latest = d.latest || null;
      localStorage.setItem('live_last', latest);
      radar.classList.remove('has-update');
      const liveMsg = document.getElementById('liveMsg');
      if(liveMsg) liveMsg.textContent = 'No updates';
    }).catch(()=>{});
  });

  // initial check + poll
  check();
  setInterval(check, 15000);
}

function escapeHtml(s){
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('yearNow').textContent = String(new Date().getFullYear());
  document.getElementById('eventDateLabel').textContent = formatDateLabel(EVENT_START);

  renderSchedule();
  setupTabs();
  renderGallery();
  setupMusic();
  setupAnnouncement();
  setupLiveRadar();

  tickCountdown();
  setInterval(tickCountdown, 1000);
});
