import { validateTranslations } from "../schema/index";
import { about } from "./about";
import { common } from "./common";
import { contact } from "./contact";
import { festival } from "./festival";
import { home } from "./home";
import { privacy } from "./privacy";
import { quiz } from "./quiz";
import { terms } from "./terms";

const enFlat = {
  ...common,
  ...home,
  ...festival,
  ...quiz,
  ...about,
  ...contact,
  ...privacy,
  ...terms,
} as const;

const isValid = validateTranslations(enFlat, "en");
if (!isValid) {
  console.warn("[i18n] Missing keys detected during development");
}

export default enFlat;
