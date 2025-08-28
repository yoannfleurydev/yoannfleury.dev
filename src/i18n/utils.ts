import { defaultLang, ui } from "./ui";

export const languages = {
  en: "English",
  fr: "Français",
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return (
      (ui[lang] as Record<string, string>)[key] ||
      (ui[defaultLang] as Record<string, string>)[key]
    );
  };
}
