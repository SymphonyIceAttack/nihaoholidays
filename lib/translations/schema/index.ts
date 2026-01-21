import type { z } from "zod";
import type { LanguageType } from "../config";
import { aboutSchema } from "./about";
import { commonSchema } from "./common";
import { contactSchema } from "./contact";
import { festivalSchema } from "./festival";
import { homeSchema } from "./home";
import { privacySchema } from "./privacy";
import { quizSchema } from "./quiz";
import { termsSchema } from "./terms";

export { aboutSchema } from "./about";
// Re-export all schema modules
export { commonSchema, navSchema } from "./common";
export { contactSchema } from "./contact";
export { festivalSchema } from "./festival";
// Festival data schemas
export {
  type FestivalDataCollection,
  type FestivalDataItem,
  festivalDataCollectionSchema,
  festivalDataItemSchema,
  type QuizQuestion,
  type QuizQuestionCollection,
  type UserTypeData,
  type UserTypeDataCollection,
  userTypeDataCollectionSchema,
} from "./festival-data";
export { homeSchema } from "./home";
export { privacySchema } from "./privacy";
export { quizSchema } from "./quiz";
export { termsSchema } from "./terms";

// Type exports
export type CommonSchema = z.infer<typeof commonSchema>;
export type HomeSchema = z.infer<typeof homeSchema>;
export type FestivalSchema = z.infer<typeof festivalSchema>;
export type QuizSchema = z.infer<typeof quizSchema>;
export type AboutSchema = z.infer<typeof aboutSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;
export type PrivacySchema = z.infer<typeof privacySchema>;
export type TermsSchema = z.infer<typeof termsSchema>;

export type TranslationSchema = {
  common: z.infer<typeof commonSchema>;
  home: z.infer<typeof homeSchema>;
  festival: z.infer<typeof festivalSchema>;
  quiz: z.infer<typeof quizSchema>;
  about: z.infer<typeof aboutSchema>;
  contact: z.infer<typeof contactSchema>;
  privacy: z.infer<typeof privacySchema>;
  terms: z.infer<typeof termsSchema>;
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

  for (const key of Object.keys(aboutSchema.shape)) {
    keys.add(key);
  }

  for (const key of Object.keys(contactSchema.shape)) {
    keys.add(key);
  }

  for (const key of Object.keys(privacySchema.shape)) {
    keys.add(key);
  }

  for (const key of Object.keys(termsSchema.shape)) {
    keys.add(key);
  }

  return Array.from(keys).sort();
}

// Validation function
export function validateTranslations(
  translations: Record<string, unknown>,
  lang: LanguageType,
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
