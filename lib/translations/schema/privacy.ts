import { z } from "zod";

export const privacySchema = z.object({
  "privacy.title": z.string(),
  "privacy.intro": z.string(),
  "privacy.intro.description": z.string(),
  "privacy.collect.title": z.string(),
  "privacy.collect.description": z.string(),
  "privacy.collect.items": z.string(),
  "privacy.collect.auto": z.string(),
  "privacy.analytics.description": z.string(),
  "privacy.analytics.items": z.string(),
  "privacy.use.title": z.string(),
  "privacy.use.items": z.string(),
  "privacy.cookies.title": z.string(),
  "privacy.cookies.description": z.string(),
  "privacy.third.title": z.string(),
  "privacy.third.description": z.string(),
  "privacy.security.title": z.string(),
  "privacy.security.description": z.string(),
  "privacy.rights.title": z.string(),
  "privacy.rights.description": z.string(),
  "privacy.rights.items": z.string(),
  "privacy.contact.title": z.string(),
  "privacy.contact.description": z.string(),
  "privacy.contact.email": z.string(),
  "privacy.changes.title": z.string(),
  "privacy.changes.description": z.string(),
});

export type PrivacySchema = z.infer<typeof privacySchema>;
