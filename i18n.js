import i18n from "i18next";
import HttpApi from "i18next-http-backend";

i18n
    .use(HttpApi)
    .init({
        lng: "ru",
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        ns: ["translations"],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
