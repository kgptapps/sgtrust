import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    supportedLngs: ['en', 'ta'],
    
    backend: {
      loadPath: '/sgtrust/data/i18n/{{lng}}/{{ns}}.json'
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    
    interpolation: {
      escapeValue: false
    },
    
    ns: ['common', 'navigation', 'content', 'academic'],
    defaultNS: 'common',
    
    debug: import.meta.env.DEV
  });

export default i18n;
