/* ==========================================================================
   STC i18n — English / Gujarati language toggle
   ========================================================================== */

let currentLang = localStorage.getItem('stc_lang') || 'en';
let translations = {};

async function loadTranslations(lang) {
  try {
    const res = await fetch(`i18n/${lang}.json`);
    if (!res.ok) throw new Error('Translation load failed');
    translations = await res.json();
  } catch {
    translations = {};
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) el.textContent = translations[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang === 'gu' ? 'gu' : 'en';
}

async function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('stc_lang', lang);
  await loadTranslations(lang);
  applyTranslations();
}

function setupLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

async function initI18n() {
  await loadTranslations(currentLang);
  applyTranslations();
  setupLangSwitcher();
}
