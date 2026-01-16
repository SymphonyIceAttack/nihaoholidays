import type { z } from "zod";
import { commonSchema } from "./common";

// Re-export all schema modules
export { commonSchema, navSchema } from "./common";

// Type exports
export type CommonSchema = z.infer<typeof commonSchema>;

export type TranslationSchema = {
  common: z.infer<typeof commonSchema>;
};

// Get all required keys
export function getRequiredKeys(): string[] {
  const keys = new Set<string>();

  for (const key of Object.keys(commonSchema.shape)) {
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
