// src/i18next.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./i18n/locales/en/en-us.json";
import ptTranslation from "./i18n/locales/pt/pt-br.json";

const resources = {
    'pt-BR': ptTranslation,
    'en-US': enTranslation
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
