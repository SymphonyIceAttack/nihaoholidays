import { z } from "zod";

export const navSchema = z.object({
  "common.nav.home": z.string(),
  "common.nav.food": z.string(),
  "common.nav.tool": z.string(),
  "common.nav.about": z.string(),
  "common.nav.contact": z.string(),
  "common.nav.privacy": z.string(),
  "common.nav.terms": z.string(),
});

export const commonSchema = z.object({
  ...navSchema.shape,
  "page.title.about": z.string(),
  "page.title.contact": z.string(),
  "page.title.privacy": z.string(),
  "page.title.terms": z.string(),
  "common.learnMore": z.string(),
  "common.exploreCulture": z.string(),
  "common.playQuiz": z.string(),
  // Header translations
  "header.start": z.string(),
  "header.explore": z.string(),
  "header.about": z.string(),
  "header.legal": z.string(),
  "header.closeMenu": z.string(),
  "header.openMenu": z.string(),
});

export type CommonSchema = z.infer<typeof commonSchema>;
