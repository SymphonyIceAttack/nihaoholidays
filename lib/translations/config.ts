export const supportedLocales = ["en"] as const;
export type LanguageType = (typeof supportedLocales)[number];
