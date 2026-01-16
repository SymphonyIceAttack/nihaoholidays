import { z } from "zod";

export const navSchema = z.object({
  "common.nav.home": z.string(),
  "common.nav.festivals": z.string(),
  "common.nav.food": z.string(),
  "common.nav.tools": z.string(),
  "common.nav.about": z.string(),
});

export const commonSchema = z.object({
  ...navSchema.shape,
});

export type CommonSchema = z.infer<typeof commonSchema>;
