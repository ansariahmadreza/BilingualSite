import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./data/en/Header-en.json"
import fa from "./data/fa/Header_fa.json"


const resources = {
    en: {
        translation: en
    },
    fa: {
        translation: fa
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n