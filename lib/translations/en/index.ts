import { validateTranslations } from "../schema/index";
import { common } from "./common";
import { home } from "./home";

const enFlat = { ...common, ...home } as const;

const isValid = validateTranslations(enFlat, "en");
if (!isValid) {
  console.warn("[i18n] Missing keys detected during development");
}

export default enFlat;
