import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import i18n from '../i18n'; // Импорт вашего файла конфигурации i18next
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                beef: "Beef",
            },
        },
        ru: {
            translations: {
                beef: "Говядина",
            },
        },
    },
    lng: "ru",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
