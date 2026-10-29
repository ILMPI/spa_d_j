import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
    const basePath = import.meta.env.BASE_URL;
    const pathWithoutBase = url.pathname.replace(basePath, "");

    const segments = pathWithoutBase.split("/").filter(Boolean);
    const lang = segments[0];

    if (lang && lang in ui) {
      return lang as keyof typeof ui;
    }
    return defaultLang;
}
    // const [, lang] = url.pathname.split("/");
    // if (lang in ui) return lang as keyof typeof ui;
    // return defaultLang;

// export function useTranslations(lang: keyof typeof ui) {
//   const localizedUI: Record<string, string> = ui[lang];
//   return function t(key: keyof (typeof ui)[typeof defaultLang]) {
//     return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
//   };
// }

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const activeDict = ui[lang] as Record<string, string>;
    const fallbackDict = ui[defaultLang] as Record<string, string>;
    return activeDict[key] ?? fallbackDict[key] ?? (key as string);
  };
}