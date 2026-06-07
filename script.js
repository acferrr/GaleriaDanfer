/* ═══════════════════════════════════════════
   DANFER FOTOGRAFIAS — SOFIA 17 ANOS
   script.js · Pure JS · No dependencies
══════════════════════════════════════════════ */

'use strict';

/* ─── GALERIA (Unsplash curado, 18 fotos para festa) ─── */
const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=75', alt: 'Festa 1', aspect: 1.33 },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=75', alt: 'Retrato 1', aspect: 0.75 },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=75', alt: 'Festa 2', aspect: 1.5 },
  { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=75', alt: 'Retrato 2', aspect: 0.75 },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=75', alt: 'Festa 3', aspect: 1.25 },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=75', alt: 'Retrato 3', aspect: 0.75 },
  { src: 'https://images.unsplash.com/photo-1519671282429-b44b62e73d3a?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1519671282429-b44b62e73d3a?w=400&q=75', alt: 'Festa 4', aspect: 1.5 },
  { src: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&q=75', alt: 'Retrato 4', aspect: 0.8 },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=75', alt: 'Festa 5', aspect: 1.33 },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=75', alt: 'Festa 6', aspect: 1.5 },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=75', alt: 'Retrato 5', aspect: 0.75 },
  { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=75', alt: 'Festa 7', aspect: 1.33 },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=75', alt: 'Retrato 6', aspect: 0.8 },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=75', alt: 'Festa 8', aspect: 1.5 },
  { src: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&q=75', alt: 'Festa 9', aspect: 1.33 },
  { src: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=400&q=75', alt: 'Retrato 7', aspect: 0.75 },
  { src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&q=75', alt: 'Festa 10', aspect: 1.5 },
  { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=82', thumb: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=75', alt: 'Festa 11', aspect: 1.33 },
];

/* ─── STATE ──────────────────────────────── */
let currentIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

/* ─── DOM REFS ───────────────────────────── */
const gallery     = document.getElementById('gallery');
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxLoader = document.getElementById('lightboxLoader');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxDownload = document.getElementById('lightboxDownload');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

const videoModal   = document.getElementById('videoModal');
const videoFrame   = document.getElementById('videoFrame');
const videoClose   = document.getElementById('videoClose');
const videoBackdrop = document.getElementById('videoBackdrop');

const toast        = document.getElementById('toast');
const downloadAll  = document.getElementById('downloadAll');
const tutorialToggle = document.getElementById('tutorialToggle');
const tutorialContent = document.getElementById('tutorialContent');
const shareWhatsapp = document.getElementById('shareWhatsapp');
const copyLink     = document.getElementById('copyLink');
const copyLinkText = document.getElementById('copyLinkText');

/* ══════════════════════════════════════════
   BUILD GALLERY
══════════════════════════════════════════ */
function buildGallery() {
  const fragment = document.createDocumentFragment();

  PHOTOS.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item gallery-item--loading';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Foto ${i + 1} — Toque para ampliar`);

    const img = document.createElement('img');
    img.className = 'gallery-item__img';
    img.alt = photo.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    // Overlay com botão de download
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item__overlay';
    overlay.innerHTML = `
      <span class="gallery-item__dl">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Baixar
      </span>
    `;

    // Lazy load via IntersectionObserver
    img.dataset.src = photo.thumb;

    img.addEventListener('load', () => {
      item.classList.remove('gallery-item--loading');
      item.classList.add('loaded');
    });

    img.addEventListener('error', () => {
      item.classList.remove('gallery-item--loading');
      item.classList.add('loaded');
    });

    item.appendChild(img);
    item.appendChild(overlay);

    // Open lightbox on click/enter
    const openLightbox = (e) => {
      e.preventDefault();
      openPhoto(i);
    };
    item.addEventListener('click', openLightbox);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(e);
    });

    fragment.appendChild(item);
  });

  gallery.appendChild(fragment);
  initLazyLoad();
}

/* ─── Lazy Load ──────────────────────────── */
function initLazyLoad() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: load all immediately
    document.querySelectorAll('.gallery-item img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          delete img.dataset.src;
          obs.unobserve(img);
        }
      }
    });
  }, { rootMargin: '300px 0px' });

  document.querySelectorAll('.gallery-item img[data-src]').forEach(img => obs.observe(img));
}

/* ══════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════ */
function openPhoto(index) {
  currentIndex = index;
  lightbox.setAttribute('aria-hidden', 'false');
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  loadPhoto(currentIndex);
  lightboxImg.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImg.src = '';
  lightboxImg.classList.remove('loaded');
}

function loadPhoto(index) {
  const photo = PHOTOS[index];
  lightboxImg.classList.remove('loaded');
  lightboxLoader.classList.remove('hidden');
  lightboxCounter.textContent = `${index + 1} / ${PHOTOS.length}`;
  lightboxDownload.href = photo.src;
  lightboxDownload.download = `sofia-17anos-foto-${index + 1}.jpg`;

  const tempImg = new Image();
  tempImg.onload = () => {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.alt;
    lightboxImg.classList.add('loaded');
    lightboxLoader.classList.add('hidden');
  };
  tempImg.onerror = () => {
    lightboxImg.src = photo.thumb;
    lightboxImg.alt = photo.alt;
    lightboxImg.classList.add('loaded');
    lightboxLoader.classList.add('hidden');
  };
  tempImg.src = photo.src;
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
  loadPhoto(currentIndex);
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % PHOTOS.length;
  loadPhoto(currentIndex);
}

/* Events: lightbox */
lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevPhoto);
lightboxNext.addEventListener('click', nextPhoto);

/* Keyboard */
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});

/* Touch swipe */
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
  if (Math.abs(dx) > 50 && dy < 60) {
    dx < 0 ? nextPhoto() : prevPhoto();
  }
}, { passive: true });

/* ══════════════════════════════════════════
   VIDEO MODAL
══════════════════════════════════════════ */
function openVideo(url) {
  const autoplay = url + (url.includes('?') ? '&' : '?') + 'autoplay=1';
  videoFrame.src = autoplay;
  videoModal.setAttribute('aria-hidden', 'false');
  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Stop video: reset src
  setTimeout(() => { videoFrame.src = ''; }, 300);
}

document.querySelectorAll('.video-card__thumb').forEach(thumb => {
  const play = () => openVideo(thumb.dataset.video);
  thumb.addEventListener('click', play);
  thumb.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
  });
});

videoClose.addEventListener('click', closeVideo);
videoBackdrop.addEventListener('click', closeVideo);
document.addEventListener('keydown', (e) => {
  if (videoModal.classList.contains('open') && e.key === 'Escape') closeVideo();
});

/* ══════════════════════════════════════════
   DOWNLOAD COMPLETO
══════════════════════════════════════════ */
downloadAll.addEventListener('click', (e) => {
  e.preventDefault();
  showToast('📥 Preparando seu download…');
  // In production: link to actual zip file
  // For demo: download first photo as sample
  setTimeout(() => {
    const link = document.createElement('a');
    link.href = PHOTOS[0].src;
    link.download = 'sofia-17anos-galeria-completa.jpg';
    link.target = '_blank';
    link.click();
    showToast('✓ Download iniciado!');
  }, 1000);
});

/* ══════════════════════════════════════════
   TUTORIAL ACCORDION
══════════════════════════════════════════ */
tutorialToggle.addEventListener('click', () => {
  const isOpen = tutorialContent.classList.toggle('open');
  tutorialToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

/* ══════════════════════════════════════════
   COMPARTILHAMENTO
══════════════════════════════════════════ */
shareWhatsapp.addEventListener('click', () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('🎀 Veja as fotos do aniversário de 17 anos da Sofia! Capturadas com carinho pela Danfer Fotografias ✨');
  const waUrl = `https://wa.me/?text=${text}%0A${url}`;
  window.open(waUrl, '_blank', 'noopener');
});

copyLink.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyLinkText.textContent = '✓ Link copiado!';
    showToast('✓ Link copiado para a área de transferência!');
    setTimeout(() => { copyLinkText.textContent = 'Copiar Link'; }, 3000);
  } catch {
    // Fallback for older browsers
    const el = document.createElement('textarea');
    el.value = window.location.href;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    copyLinkText.textContent = '✓ Link copiado!';
    showToast('✓ Link copiado!');
    setTimeout(() => { copyLinkText.textContent = 'Copiar Link'; }, 3000);
  }
});

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.setAttribute('aria-hidden', 'false');
  toast.classList.add('show');
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
  }, 3000);
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   HERO PARALLAX (subtle, only on desktop)
══════════════════════════════════════════ */
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  const heroImg = document.querySelector('.hero__img');
  if (!heroImg) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ══════════════════════════════════════════
   SMOOTH SCROLL (for older browsers)
══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  initReveal();
  initParallax();
});
