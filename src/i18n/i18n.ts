import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/../public/locales/en.json';
import uk from '@/../public/locales/uk.json';
import de from "@/../public/locales/de.json";

i18n
  .use(initReactI18next)
  .init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
    de: { translation: de },
  },
  fallbackLng: 'en', // Default language
  interpolation: { escapeValue: false },
});


export default i18n;