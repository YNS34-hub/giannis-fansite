/* ═══════════════════════════════════════════════════════
   Giannis Antetokounmpo Fansite — Data & Interactions
   ═══════════════════════════════════════════════════════ */

// ── Video Data (YouTube external links) ──
const videoData = [
  {
    youtubeId: '02JLHU1jxDs',
    title: 'Nastiest Dunks of 2024',
    desc: 'GREEK FREAK — Most devastating slams',
    platform: 'YouTube'
  },
  {
    youtubeId: 'wHPLeWsAQw4',
    title: '50 PTS & 5 BLKS Masterclass',
    desc: 'Legendary close-out performance in Game 6',
    platform: 'YouTube'
  },
  {
    youtubeId: '7tnVGkNyfyA',
    title: 'A Kid From Sepolia',
    desc: 'From Athens streets to NBA MVP — the origin story',
    platform: 'YouTube'
  },
  {
    youtubeId: 'BxISa1iuTC4',
    title: 'Dunks Getting More Aggressive',
    desc: 'Each slam more powerful than the last',
    platform: 'YouTube'
  },
  {
    youtubeId: 'ePlcXPEQw1M',
    title: 'Increasingly More Freakish',
    desc: 'Plays that defy physics and logic',
    platform: 'YouTube'
  },
  {
    youtubeId: 'eMnstr2t14M',
    title: 'Emotional MVP Speech',
    desc: '2019 NBA Awards — the heart of a champion',
    platform: 'YouTube'
  }
];

// ── Gallery Data (29 wallpapers) ──
const galleryData = [
  { file:'1725239083-79e882dc1b6f011-682x1024.jpg', title:'Greek Freak Portrait', cat:'Editorial · 2024', pos:'pos-face',    sc:4, sr:3 },
  { file:'EqJAFzEXMAAeiYw.jpg',                     title:'Rise to Greatness',   cat:'Action · 2023',    pos:'pos-center', sc:2, sr:3 },
  { file:'F6uUMKDXMAAzjI3.jpg',                     title:'Dominant Force',      cat:'Dunk · 2024',      pos:'pos-center', sc:2, sr:2 },
  { file:'F9Y6NH2boAArd65.jpg',                     title:'Game Face',           cat:'Portrait · 2023',  pos:'pos-face',    sc:2, sr:3 },
  { file:'FMLPud8X0AAxiy3.jpg',                     title:'Intensity',           cat:'Action · 2024',    pos:'pos-center', sc:2, sr:2 },
  { file:'FrNoqhbWIAEjy-2.jpg',                     title:'Champion Mindset',    cat:'Editorial · 2024', pos:'pos-center', sc:4, sr:3 },
  { file:'G9OuevQWsAAXWp3.jpg',                     title:'Drive to the Rim',    cat:'Action · 2023',    pos:'pos-center', sc:2, sr:2 },
  { file:'GTvF_AyWQAA7Ldj.jpg',                     title:'Focused',             cat:'Portrait · 2024',  pos:'pos-face',    sc:2, sr:2 },
  { file:'GZR62X8bQAErbDd.jpg',                     title:'Power Move',          cat:'Game · 2024',      pos:'pos-center', sc:2, sr:2 },
  { file:'GmImGkxXAAAKYrd.jpg',                     title:'Signature',           cat:'Celebration · 2023',pos:'pos-center', sc:2, sr:2 },
  { file:'GpeaSNeWIAAr8eQ.jpg',                     title:'Court King',          cat:'Action · 2024',    pos:'pos-center', sc:3, sr:2 },
  { file:'GpeaWhaWMAE4lwx.jpg',                     title:'Defining Moment',     cat:'Game · 2023',      pos:'pos-center', sc:3, sr:2 },
  { file:'HBsclDKW0AAYjUZ.jpg',                     title:'Bucks Pride',         cat:'Team · 2024',      pos:'pos-center', sc:2, sr:2 },
  { file:'HF54nRAWcAAdNSG.jpg',                     title:'Building a Legacy',   cat:'Editorial · 2024', pos:'pos-center', sc:4, sr:3 },
  { file:'HFpWzinXkAA1808.jpg',                     title:'Freak Mode',          cat:'Action · 2024',    pos:'pos-center', sc:2, sr:2 },
  { file:'HFpWzjVWkAArkIW.jpg',                     title:'MVP Energy',          cat:'Portrait · 2023',  pos:'pos-face',    sc:2, sr:2 },
  { file:'HFuvEHIX0AAPJrP.jpg',                     title:'Above the Rim',       cat:'Dunk · 2024',      pos:'pos-top',     sc:2, sr:3 },
  { file:'HFvLeHzXsAAaD8O.jpg',                     title:'Defensive Wall',      cat:'Defense · 2023',   pos:'pos-center', sc:2, sr:2 },
  { file:'HGZYCk6asAA3M3q.jpg',                     title:'Posterized',          cat:'Highlight · 2024', pos:'pos-center', sc:2, sr:2 },
  { file:'HInaEkOXsAAPzEz.jpg',                     title:'Flight Time',         cat:'Action · 2024',    pos:'pos-center', sc:2, sr:2 },
  { file:'HJWWVQJboAA8hrl.jpg',                     title:'The Greek Freak',     cat:'Panoramic · 2024', pos:'pos-center', sc:4, sr:2 },
  { file:'HJrf4t4XkAAsfcE.jpg',                     title:'Fan Favorite',        cat:'Moment · 2024',    pos:'pos-center', sc:2, sr:2 },
  { file:'HJrlyrUWcAQFOkJ.jpg',                     title:'Superstar',           cat:'Portrait · 2023',  pos:'pos-face',    sc:2, sr:2 },
  { file:'HJvJcfNXgAA95d0.jpg',                     title:'Hero of Milwaukee',   cat:'Editorial · 2024', pos:'pos-center', sc:3, sr:3 },
  { file:'HKZNCkKXcAA4mO5.jpg',                     title:'Art of the Game',     cat:'Artistic · 2024',  pos:'pos-center', sc:3, sr:2 },
  { file:'HKa2pjvWAAAzjvZ.jpg',                     title:'Joy of the Game',     cat:'Moment · 2023',    pos:'pos-face',    sc:2, sr:2 },
  { file:'HKd_oxiWIAAhdsd.jpg',                     title:'Lockdown D',          cat:'Defense · 2024',   pos:'pos-center', sc:2, sr:2 },
  { file:'HKeAaKXWgAAPvs1.jpg',                     title:'Classic Form',        cat:'Action · 2024',    pos:'pos-center', sc:2, sr:3 },
  { file:'HKgUYkuXoAAP0f6.jpg',                     title:'Unstoppable Force',   cat:'Editorial · 2024', pos:'pos-center', sc:4, sr:3 }
];

// ── Render Video Cards ──
function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  grid.innerHTML = videoData.map(v => `
    <a href="https://youtube.com/watch?v=${v.youtubeId}" target="_blank" rel="noopener" class="video-cell">
      <div class="thumb-wrap">
        <img src="https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg"
             alt="${v.title}" loading="lazy" decoding="async"
             onerror="this.src='https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg'">
        <span class="play-btn"></span>
      </div>
      <div class="info">
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
        <span class="platform">▶ ${v.platform}</span>
      </div>
    </a>
  `).join('');
}

// ── Render Gallery Cards ──
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryData.map(g => `
    <div class="gallery-card">
      <img src="assets/wallpapers/${g.file}"
           alt="${g.title}" loading="lazy" decoding="async"
           onerror="this.parentElement.innerHTML='<div class=\\'img-fallback\\'><span>${g.title}</span><small>${g.cat}</small></div>'">
      <div class="gallery-overlay">
        <h3>${g.title}</h3>
        <span>${g.cat}</span>
        <a href="assets/wallpapers/${g.file}" target="_blank" class="view-hd" onclick="event.stopPropagation()">View HD ↗</a>
      </div>
    </div>
  `).join('');
}

// ── Image Fallback Handler ──
function handleImgError(img) {
  const card = img.closest('.gallery-card');
  if (!card) return;
  const title = img.alt || 'Image';
  card.innerHTML = `<div class="img-fallback"><div>${title}</div></div>`;
}

// ── Scroll Reveal ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Lazy Load Below-Fold Images ──
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // native support
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const img = e.target;
      if (img.dataset.src) { img.src = img.dataset.src; }
      lazyObserver.unobserve(img);
    });
  });
  document.querySelectorAll('img[loading="lazy"]').forEach(img => lazyObserver.observe(img));
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderVideos();
  renderGallery();
  initScrollReveal();
  initLazyImages();
});
