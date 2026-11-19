import { esNav } from "./locales/es/nav";
import { esServices } from "./locales/es/services";
import { enNav } from "./locales/en/nav";
import { enServices } from "./locales/en/services";

export const languages = {
  es: "ES",
  en: "EN"
} as const;

export const defaultLang = "es" as const;

export const ui = {
  es: {
    ...esNav,
    ...esServices
  },
  en: {
    ...enNav,
    ...enServices
  }
} as const;