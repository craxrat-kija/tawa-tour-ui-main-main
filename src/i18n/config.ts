import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import sw from './locales/sw.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';

const resources = {
  en: { translation: en },
  sw: { translation: sw },
  fr: { translation: fr },
  de: { translation: de },
  zh: { translation: zh },
  ar: { translation: ar },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'sw', 'fr', 'de', 'zh', 'ar'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    // Ensure language changes trigger complete reload
    load: 'languageOnly',
    // Clear any cached resources on language change
    cleanCode: true,
  });

// Listen for language changes and trigger system-wide updates
i18n.on('languageChanged', (lng) => {
  // Update document attributes
  const isRTL = lng === 'ar';
  document.documentElement.lang = lng;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  
  // Force update all components by triggering a custom event
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lng } }));
});

export default i18n;

