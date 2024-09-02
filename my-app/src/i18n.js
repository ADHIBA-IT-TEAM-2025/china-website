import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from '../src/translationEN.json';
import translationCN from '../src/translationCN.json';

const resources = {
  en: {
    translation: translationEN,
  },
  cn: {
    translation: translationCN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
