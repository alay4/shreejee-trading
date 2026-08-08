/* ==========================================================================
   STC Layout Loader — shared component injection & mobile nav
   ========================================================================== */

let currentPage = '';
let mobileNavOpen = false;
let mobileNavFocusTrap = [];

async function loadComponent(targetId, url) {
  const el = document.getElementById(targetId);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.warn('Layout component load failed:', url, err);
  }
}

function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path === '/') return 'index';
  return path.replace('.html', '');
}

function setActiveNavLinks() {
  currentPage = getCurrentPage();
  document.querySelectorAll('.nav-link[data-page], .mobile-nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
}

function openMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const toggle = document.getElementById('navToggle');
  if (!drawer || !overlay) return;

  mobileNavOpen = true;
  drawer.classList.add('active');
  overlay.classList.add('active');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }
  document.body.classList.add('nav-open');

  mobileNavFocusTrap = Array.from(drawer.querySelectorAll('a, button'));
  if (mobileNavFocusTrap[0]) mobileNavFocusTrap[0].focus();
}

function closeMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const toggle = document.getElementById('navToggle');
  if (!drawer || !overlay) return;

  mobileNavOpen = false;
  drawer.classList.remove('active');
  overlay.classList.remove('active');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.focus();
  }
  document.body.classList.remove('nav-open');
}

function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const closeBtn = document.getElementById('mobileNavClose');
  const overlay = document.getElementById('mobileNavOverlay');

  toggle?.addEventListener('click', () => {
    if (mobileNavOpen) closeMobileNav();
    else openMobileNav();
  });
  closeBtn?.addEventListener('click', closeMobileNav);
  overlay?.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavOpen) closeMobileNav();
    if (e.key === 'Tab' && mobileNavOpen && mobileNavFocusTrap.length) {
      const first = mobileNavFocusTrap[0];
      const last = mobileNavFocusTrap[mobileNavFocusTrap.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

function copyToClipboard(text, label) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    if (typeof showToast === 'function') {
      showToast(`${label || 'Value'} copied to clipboard.`);
    }
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    if (typeof showToast === 'function') showToast(`${label || 'Value'} copied to clipboard.`);
  });
}

function setupCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      copyToClipboard(btn.dataset.copy, btn.dataset.copyLabel || 'Value');
    });
  });
}

function setupStickyCatalogToolbar() {
  const toolbar = document.getElementById('catalogToolbar');
  if (!toolbar) return;

  const observer = new IntersectionObserver(([entry]) => {
    toolbar.classList.toggle('is-stuck', !entry.isIntersecting);
  }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });

  const sentinel = document.getElementById('catalogToolbarSentinel');
  if (sentinel) observer.observe(sentinel);
}

async function initLayout() {
  await Promise.all([
    loadComponent('site-top-bar', 'components/top-bar.html'),
    loadComponent('site-nav', 'components/nav.html'),
    loadComponent('site-footer', 'components/footer.html'),
    loadComponent('site-drawer', 'components/drawer.html'),
    loadComponent('site-floating', 'components/floating-widgets.html')
  ]);

  setActiveNavLinks();
  setupMobileNav();
  setupCopyButtons();
  setupStickyCatalogToolbar();

  if (typeof initI18n === 'function') initI18n();
  if (typeof updateQuoteUI === 'function') updateQuoteUI();
  if (typeof initBackToTopButton === 'function') initBackToTopButton();
}

document.addEventListener('DOMContentLoaded', initLayout);
