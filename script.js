/* ═══════════════════════════════════════════════════════
   Giannis Antetokounmpo Fansite — Interactions
   ═══════════════════════════════════════════════════════ */

// ── Video Data (YouTube external links) ──
const videoData = [
  { youtubeId:'02JLHU1jxDs', title:'Nastiest Dunks of 2024', desc:'GREEK FREAK — Most devastating slams', platform:'YouTube', duration:'03:42', category:'DUNKS' },
  { youtubeId:'wHPLeWsAQw4', title:'50 PTS & 5 BLKS Masterclass', desc:'Legendary close-out performance in Game 6', platform:'YouTube', duration:'02:18', category:'FINALS' },
  { youtubeId:'7tnVGkNyfyA', title:'A Kid From Sepolia', desc:'From Athens streets to NBA MVP — the origin story', platform:'YouTube', duration:'04:55', category:'STORY' },
  { youtubeId:'BxISa1iuTC4', title:'Dunks Getting More Aggressive', desc:'Each slam more powerful than the last', platform:'YouTube', duration:'02:30', category:'DUNKS' },
  { youtubeId:'ePlcXPEQw1M', title:'Increasingly More Freakish', desc:'Plays that defy physics and logic', platform:'YouTube', duration:'03:15', category:'HIGHLIGHTS' },
  { youtubeId:'eMnstr2t14M', title:'Emotional MVP Speech', desc:'2019 NBA Awards — the heart of a champion', platform:'YouTube', duration:'05:20', category:'MVP SPEECH' }
];

// ── Gallery Data (35 wallpapers + filter tags) ──
const galleryData = [
  { file:'1725239083-79e882dc1b6f011-682x1024.jpg', title:'Greek Freak Portrait', cat:'Editorial · 2024', tags:['portrait','phone'] },
  { file:'EqJAFzEXMAAeiYw.jpg',                     title:'Rise to Greatness',   cat:'Action · 2023',    tags:['action','desktop'] },
  { file:'F6uUMKDXMAAzjI3.jpg',                     title:'Dominant Force',      cat:'Dunk · 2024',      tags:['action','desktop'] },
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
  { file:'HKgUYkuXoAAP0f6.jpg',                     title:'Unstoppable Force',   cat:'Editorial · 2024', tags:['championship','desktop'] },
  { file:'1774d4382861e766427af04211f1f581.jpg',    title:'Championship DNA',    cat:'Editorial · 2025', tags:['championship','desktop'] },
  { file:'HCm0ny-W8AApAbH.jpg',                     title:'Iconic Pose',         cat:'Portrait · 2025',  tags:['portrait','desktop'] },
  { file:'HDfD6PHbEAAA1N5.jpg',                     title:'Greek Roots',         cat:'Editorial · 2025', tags:['portrait','phone'] },
  { file:'download.jpg',                             title:'Milwaukee Night',     cat:'Action · 2025',    tags:['action','bucks'] },
  { file:'download.png',                             title:'Freak Logo',          cat:'Brand · 2025',     tags:['portrait','desktop'] },
  { file:'images.jpg',                               title:'The Journey',         cat:'Moment · 2025',    tags:['action','desktop'] }
];

// ── Render Video Cards ──
function renderVideos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  grid.innerHTML = videoData.map(function(v) { return ''
    + '<a href="https://youtube.com/watch?v=' + v.youtubeId + '" target="_blank" rel="noopener" class="video-cell">'
    + '<div class="thumb-wrap">'
    + '<img src="https://img.youtube.com/vi/' + v.youtubeId + '/maxresdefault.jpg"'
    + ' alt="' + v.title + '" loading="lazy" decoding="async" width="480" height="270"'
    + ' data-fallback="https://img.youtube.com/vi/' + v.youtubeId + '/hqdefault.jpg">'
    + '<span class="play-btn"></span>'
    + '<span class="video-duration">' + v.duration + '</span>'
    + '<span class="video-category">' + v.category + '</span>'
    + '</div>'
    + '<div class="info"><h3>' + v.title + '</h3><p>' + v.desc + '</p>'
    + '<span class="platform">▶ ' + v.platform + '</span></div>'
    + '</a>';
  }).join('');

  // YouTube thumbnail fallback: maxresdefault → hqdefault
  grid.querySelectorAll('img[data-fallback]').forEach(function(img) {
    img.addEventListener('error', function onErr() {
      if (this.dataset.fallback && this.src !== this.dataset.fallback) {
        this.src = this.dataset.fallback;
      }
    }, { once: true });
  });
}

// ── Render Gallery Cards ──
function renderGallery(filter) {
  filter = filter || 'all';
  var grid = document.getElementById('galleryGrid');
  if (!grid) return;
  var items = filter === 'all'
    ? galleryData
    : galleryData.filter(function(g) { return g.tags.indexOf(filter) !== -1; });
  grid.innerHTML = items.map(function(g) { return ''
    + '<div class="gallery-card" data-src="assets/wallpapers/' + g.file + '" data-title="' + g.title + '" data-cat="' + g.cat + '">'
    + '<img src="assets/wallpapers/' + g.file + '"'
    + ' alt="' + g.title + ' — Giannis Antetokounmpo" loading="lazy" decoding="async">'
    + '<div class="gallery-overlay">'
    + '<h3>' + g.title + '</h3>'
    + '<span>' + g.cat + '</span>'
    + '<div class="gallery-actions">'
    + '<a href="assets/wallpapers/' + g.file + '" target="_blank" class="view-hd" onclick="event.stopPropagation()">View HD</a>'
    + '<a href="assets/wallpapers/' + g.file + '" download class="view-hd" onclick="event.stopPropagation()">Download</a>'
    + '</div></div></div>';
  }).join('');

  // Image error fallback
  grid.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
    img.addEventListener('error', function onError() {
      var fallback = document.createElement('div');
      fallback.className = 'img-fallback';
      fallback.innerHTML = '<span>' + this.alt + '</span>';
      this.replaceWith(fallback);
    }, { once: true });
  });
}

// ── Lightbox ──
function initLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxCat = document.getElementById('lightboxCat');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  function open(src, title, cat) {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxCat.textContent = cat;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Delegate click on gallery cards
  document.addEventListener('click', function(e) {
    var card = e.target.closest('.gallery-card');
    if (!card) return;
    // Don't open lightbox if user clicked View HD or Download
    if (e.target.closest('.gallery-actions')) return;
    var src = card.dataset.src;
    var title = card.dataset.title;
    var cat = card.dataset.cat;
    if (src) open(src, title, cat);
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) close();
  });

  // Keyboard: ESC to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

// ── Gallery Filters ──
function initGalleryFilters() {
  var btns = document.querySelectorAll('.filter-btn');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });
}

// ── Count-Up Animation ──
function initCountUp() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var nums = document.querySelectorAll('.stat-cell .num[data-target]');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var raw = el.dataset.target;
      // Extract numeric part and suffix (e.g. "19,500" or "54.5%")
      var match = raw.match(/^([\d,.]+)(.*)$/);
      if (!match) return;
      var numStr = match[1].replace(/,/g, '');
      var target = parseFloat(numStr);
      var suffix = match[2] || '';
      var hasComma = match[1].indexOf(',') !== -1;
      var isFloat = numStr.indexOf('.') !== -1;
      var duration = 1500;
      var start = performance.now();

      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = target * eased;
        var display;
        if (isFloat) {
          display = current.toFixed(1);
        } else if (hasComma) {
          display = Math.floor(current).toLocaleString();
        } else {
          display = Math.floor(current).toLocaleString();
        }
        el.textContent = display + suffix;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = raw;
        }
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach(function(n) { observer.observe(n); });
}

// ── Active Nav Tracking ──
function initActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.id;
      links.forEach(function(a) {
        var href = a.getAttribute('href');
        a.classList.toggle('active', href === '#' + id || href === 'index.html#' + id);
      });
    });
  }, { threshold: 0.3, rootMargin: '-60px 0px -60% 0px' });
  sections.forEach(function(s) { observer.observe(s); });
}

// ── Scroll Reveal ──
function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
}

// ── Lazy Load Fallback ──
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return;
  var lazyObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      var img = e.target;
      if (img.dataset.src) { img.src = img.dataset.src; }
      lazyObserver.unobserve(img);
    });
  });
  document.querySelectorAll('img[loading="lazy"]').forEach(function(img) { lazyObserver.observe(img); });
}

// ── Intro Video Overlay ──
function initIntro() {
  var overlay = document.getElementById('introOverlay');
  if (!overlay) return;

  var introAlreadyPlayed = false;
  try { introAlreadyPlayed = sessionStorage.getItem('giannisIntroPlayed') === 'true'; } catch (_) {}

  if (introAlreadyPlayed) { overlay.remove(); return; }

  var pre = document.getElementById('introPre');
  var video = document.getElementById('introVideo');
  var enterBtn = document.getElementById('introEnterBtn');
  var skipBtn = document.getElementById('introSkip');
  var introDone = false;

  function finishIntro() {
    if (introDone) return;
    introDone = true;
    try { sessionStorage.setItem('giannisIntroPlayed', 'true'); } catch (_) {}
    overlay.classList.add('is-hidden');
    setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 800);
  }

  video.addEventListener('error', function() { if (!introDone) finishIntro(); });

  video.addEventListener('stalled', function() {
    setTimeout(function() {
      if (!introDone && video.readyState < 2) finishIntro();
    }, 1000);
  });

  enterBtn.addEventListener('click', function() {
    pre.classList.add('is-hidden');
    video.src = 'assets/intro/giannis-intro.webm';
    video.classList.add('is-playing');
    skipBtn.classList.add('is-visible');
    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function() { if (!introDone) finishIntro(); });
    }
  });

  video.addEventListener('ended', function() { finishIntro(); });

  skipBtn.addEventListener('click', function() {
    video.pause();
    finishIntro();
  });

  video.src = 'assets/intro/giannis-intro.webm';
  video.load();
}

// ── Init ──
document.addEventListener('DOMContentLoaded', function() {
  initIntro();
  renderVideos();
  renderGallery();
  initLightbox();
  initGalleryFilters();
  initCountUp();
  initActiveNav();
  initScrollReveal();
  initLazyImages();
});
