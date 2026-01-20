import { z } from "zod";

export const navSchema = z.object({
  "common.nav.home": z.string(),
  "common.nav.festivals": z.string(),
  "common.nav.food": z.string(),
  "common.nav.tools": z.string(),
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
});

export type CommonSchema = z.infer<typeof commonSchema>;
