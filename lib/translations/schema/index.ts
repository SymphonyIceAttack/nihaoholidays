import type { z } from "zod";
import { commonSchema } from "./common";
import { festivalSchema } from "./festival";
import { homeSchema } from "./home";
import { quizSchema } from "./quiz";

// Re-export all schema modules
export { commonSchema, navSchema } from "./common";
export { homeSchema } from "./home";
export { festivalSchema } from "./festival";
export { quizSchema } from "./quiz";

// Type exports
export type CommonSchema = z.infer<typeof commonSchema>;
export type HomeSchema = z.infer<typeof homeSchema>;
export type FestivalSchema = z.infer<typeof festivalSchema>;
export type QuizSchema = z.infer<typeof quizSchema>;

export type TranslationSchema = {
  common: z.infer<typeof commonSchema>;
  home: z.infer<typeof homeSchema>;
  festival: z.infer<typeof festivalSchema>;
  quiz: z.infer<typeof quizSchema>;
};

// Get all required keys
export function getRequiredKeys(): string[] {
  const keys = new Set<string>();

  for (const key of Object.keys(commonSchema.shape)) {
    keys.add(key);
  }

  for (const key of Object.keys(homeSchema.shape)) {
    keys.add(key);
  }

  for (const key of Object.keys(festivalSchema.shape)) {
    keys.add(key);
  }

  for (const key of Object.keys(quizSchema.shape)) {
    keys.add(key);
  }

  return Array.from(keys).sort();
}

// Validation function
export function validateTranslations(
  translations: Record<string, unknown>,
  lang: string,
): boolean {
  const requiredKeys = getRequiredKeys();
  const transKeys = Object.keys(translations);

  const missingKeys = requiredKeys.filter((key) => !(key in translations));
  const extraKeys = transKeys.filter((key) => !requiredKeys.includes(key));

  let isValid = true;

  if (missingKeys.length > 0) {
    console.warn(`[i18n] Missing translation keys for language "${lang}":`);
    console.warn("  Missing keys:");
    for (const key of missingKeys) {
      console.warn(`    - ${key}`);
    }
    isValid = false;
  }

  if (extraKeys.length > 0) {
    console.warn(`[i18n] Extra translation keys for language "${lang}":`);
    console.warn("  Extra keys:");
    for (const key of extraKeys) {
      console.warn(`    - ${key}`);
    }
    isValid = false;
  }

  return isValid;
}
