import { validateTranslations } from "../schema/index";
import { common } from "./common";
import { festival } from "./festival";
import { home } from "./home";
import { quiz } from "./quiz";

const enFlat = { ...common, ...home, ...festival, ...quiz } as const;

const isValid = validateTranslations(enFlat, "en");
if (!isValid) {
  console.warn("[i18n] Missing keys detected during development");
}

export default enFlat;
