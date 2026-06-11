/* ═══════════════════════════════════════════════════════
   Giannis Antetokounmpo Fansite — Data & Interactions
   ═══════════════════════════════════════════════════════ */

// ── Video Data (YouTube external links) ──
const videoData = [
  {
    youtubeId: '02JLHU1jxDs',
    title: 'Nastiest Dunks of 2024',
    desc: 'GREEK FREAK — Most devastating slams',
    platform: 'YouTube', duration: '03:42', category: 'DUNKS'
  },
  {
    youtubeId: 'wHPLeWsAQw4',
    title: '50 PTS & 5 BLKS Masterclass',
    desc: 'Legendary close-out performance in Game 6',
    platform: 'YouTube', duration: '02:18', category: 'FINALS'
  },
  {
    youtubeId: '7tnVGkNyfyA',
    title: 'A Kid From Sepolia',
    desc: 'From Athens streets to NBA MVP — the origin story',
    platform: 'YouTube', duration: '04:55', category: 'STORY'
  },
  {
    youtubeId: 'BxISa1iuTC4',
    title: 'Dunks Getting More Aggressive',
    desc: 'Each slam more powerful than the last',
    platform: 'YouTube', duration: '02:30', category: 'DUNKS'
  },
  {
    youtubeId: 'ePlcXPEQw1M',
    title: 'Increasingly More Freakish',
    desc: 'Plays that defy physics and logic',
    platform: 'YouTube', duration: '03:15', category: 'HIGHLIGHTS'
  },
  {
    youtubeId: 'eMnstr2t14M',
    title: 'Emotional MVP Speech',
    desc: '2019 NBA Awards — the heart of a champion',
    platform: 'YouTube', duration: '05:20', category: 'MVP SPEECH'
  }
];

// ── Gallery Data (29 wallpapers + filter tags) ──
const galleryData = [
  { file:'1725239083-79e882dc1b6f011-682x1024.jpg', title:'Greek Freak Portrait', cat:'Editorial · 2024', tags:['portrait','phone'] },
  { file:'EqJAFzEXMAAeiYw.jpg',                     title:'Rise to Greatness',   cat:'Action · 2023',    tags:['action','desktop'] },
  { file:'F6uUMKDXMAAzjI3.jpg',                     title:'Dominant Force',      cat:'Dunk · 2024',      tags:['action','dunks'] },
  { file:'F9Y6NH2boAArd65.jpg',                     title:'Game Face',           cat:'Portrait · 2023',  tags:['portrait','phone'] },
  { file:'FMLPud8X0AAxiy3.jpg',                     title:'Intensity',           cat:'Action · 2024',    tags:['action','desktop'] },
  { file:'FrNoqhbWIAEjy-2.jpg',                     title:'Champion Mindset',    cat:'Editorial · 2024', tags:['championship','desktop'] },
  { file:'G9OuevQWsAAXWp3.jpg',                     title:'Drive to the Rim',    cat:'Action · 2023',    tags:['action','desktop'] },
  { file:'GTvF_AyWQAA7Ldj.jpg',                     title:'Focused',             cat:'Portrait · 2024',  tags:['portrait','phone'] },
  { file:'GZR62X8bQAErbDd.jpg',                     title:'Power Move',          cat:'Game · 2024',      tags:['action','desktop'] },
  { file:'GmImGkxXAAAKYrd.jpg',                     title:'Signature',           cat:'Celebration · 2023',tags:['action','bucks'] },
  { file:'GpeaSNeWIAAr8eQ.jpg',                     title:'Court King',          cat:'Action · 2024',    tags:['action','desktop'] },
  { file:'GpeaWhaWMAE4lwx.jpg',                     title:'Defining Moment',     cat:'Game · 2023',      tags:['action','championship'] },
  { file:'HBsclDKW0AAYjUZ.jpg',                     title:'Bucks Pride',         cat:'Team · 2024',      tags:['bucks','desktop'] },
  { file:'HF54nRAWcAAdNSG.jpg',                     title:'Building a Legacy',   cat:'Editorial · 2024', tags:['championship','desktop'] },
  { file:'HFpWzinXkAA1808.jpg',                     title:'Freak Mode',          cat:'Action · 2024',    tags:['action','desktop'] },
  { file:'HFpWzjVWkAArkIW.jpg',                     title:'MVP Energy',          cat:'Portrait · 2023',  tags:['portrait','championship'] },
  { file:'HFuvEHIX0AAPJrP.jpg',                     title:'Above the Rim',       cat:'Dunk · 2024',      tags:['action','phone'] },
  { file:'HFvLeHzXsAAaD8O.jpg',                     title:'Defensive Wall',      cat:'Defense · 2023',   tags:['action','desktop'] },
  { file:'HGZYCk6asAA3M3q.jpg',                     title:'Posterized',          cat:'Highlight · 2024', tags:['action','desktop'] },
  { file:'HInaEkOXsAAPzEz.jpg',                     title:'Flight Time',         cat:'Action · 2024',    tags:['action','desktop'] },
  { file:'HJWWVQJboAA8hrl.jpg',                     title:'The Greek Freak',     cat:'Panoramic · 2024', tags:['action','desktop'] },
  { file:'HJrf4t4XkAAsfcE.jpg',                     title:'Fan Favorite',        cat:'Moment · 2024',    tags:['bucks','desktop'] },
  { file:'HJrlyrUWcAQFOkJ.jpg',                     title:'Superstar',           cat:'Portrait · 2023',  tags:['portrait','phone'] },
  { file:'HJvJcfNXgAA95d0.jpg',                     title:'Hero of Milwaukee',   cat:'Editorial · 2024', tags:['championship','bucks'] },
  { file:'HKZNCkKXcAA4mO5.jpg',                     title:'Art of the Game',     cat:'Artistic · 2024',  tags:['action','desktop'] },
  { file:'HKa2pjvWAAAzjvZ.jpg',                     title:'Joy of the Game',     cat:'Moment · 2023',    tags:['portrait','bucks'] },
  { file:'HKd_oxiWIAAhdsd.jpg',                     title:'Lockdown D',          cat:'Defense · 2024',   tags:['action','desktop'] },
  { file:'HKeAaKXWgAAPvs1.jpg',                     title:'Classic Form',        cat:'Action · 2024',    tags:['action','phone'] },
  { file:'HKgUYkuXoAAP0f6.jpg',                     title:'Unstoppable Force',   cat:'Editorial · 2024', tags:['championship','desktop'] }
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
        <span class="video-duration">${v.duration}</span>
        <span class="video-category">${v.category}</span>
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
function renderGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const items = filter === 'all'
    ? galleryData
    : galleryData.filter(g => g.tags.includes(filter));
  grid.innerHTML = items.map(g => `
    <div class="gallery-card">
      <img src="assets/wallpapers/${g.file}"
           alt="${g.title}" loading="lazy" decoding="async"
           onerror="this.parentElement.innerHTML='<div class=\\'img-fallback\\'><span>${g.title}</span><small>${g.cat}</small></div>'">
      <div class="gallery-overlay">
        <h3>${g.title}</h3>
        <span>${g.cat}</span>
        <div class="gallery-actions">
          <a href="assets/wallpapers/${g.file}" target="_blank" class="view-hd" onclick="event.stopPropagation()">VIEW HD</a>
          <a href="assets/wallpapers/${g.file}" download class="view-hd" onclick="event.stopPropagation()">DOWNLOAD</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Gallery Filters ──
function initGalleryFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });
}

// ── Count-Up Animation ──
function initCountUp() {
  const nums = document.querySelectorAll('.stat-cell .num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.dataset.target;
      // extract numeric part and optional suffix (e.g. "54.5%")
      const match = raw.match(/^([\d.]+)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const suffix = match[2] || '';
      const isFloat = match[1].includes('.');
      const duration = 1500; const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent = isFloat ? current.toFixed(1) + suffix : Math.floor(current).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach(n => observer.observe(n));
}

// ── Active Nav Tracking ──
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    });
  }, { threshold: 0.3, rootMargin: '-60px 0px -60% 0px' });
  sections.forEach(s => observer.observe(s));
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

// ── Lazy Load Fallback ──
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return;
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
  initGalleryFilters();
  initCountUp();
  initActiveNav();
  initScrollReveal();
  initLazyImages();
});
