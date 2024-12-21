import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import PAGE_NOT_FOUND_EN from "./en/pageNotFound.json"
import PAGE_NOT_FOUND_VI from "./vi/pageNotFound.json"

let i18nLocal = localStorage.getItem("i18n")

if (!i18nLocal) {
  localStorage.setItem("i18n", "vi")
  i18nLocal = "vi"
}

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
}

export const resources = {
  en: {
    pageNotFound: PAGE_NOT_FOUND_EN,
  },
  vi: {
    pageNotFound: PAGE_NOT_FOUND_VI,
  },
}
export const defaultNS = "pageNotFound"

i18n.use(initReactI18next).init({
  resources,
  lng: i18nLocal,
  ns: ["pageNotFound"],
  fallbackLng: "vi",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
})
