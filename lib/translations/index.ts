import { type LanguageType, supportedLocales } from "./config";
import en from "./en/index";

export { supportedLocales, type LanguageType };

export const localeNames: Record<LanguageType, string> = {
  en: "English",
};

function flatten<T extends Record<string, unknown>>(
  obj: T,
  prefix = "",
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(result, flatten(value as Record<string, unknown>, newKey));
    } else if (typeof value === "string") {
      result[newKey] = value;
    }
  }
  return result;
}

const enFlat = flatten(en);

export const translations = {
  en: enFlat,
} as const;

export type Translations = typeof translations;

export function translate(
  key: string,
  lang: LanguageType,
  params?: Record<string, string>,
): string {
  const trans = translations[lang] as Record<string, string>;
  let text = key;
  if (key in trans) {
    text = trans[key];
  } else {
    const fallback = translations.en as Record<string, string>;
    if (key in fallback) text = fallback[key];
  }
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      text = text.replaceAll(`{${key}}`, value);
    }
  }
  return text;
}
