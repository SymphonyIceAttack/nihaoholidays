import { z } from "zod";

export const termsSchema = z.object({
  "terms.title": z.string(),
  "terms.intro": z.string(),
  "terms.intro.description": z.string(),
  "terms.accept.title": z.string(),
  "terms.accept.description": z.string(),
  "terms.use.title": z.string(),
  "terms.use.description": z.string(),
  "terms.use.items": z.string(),
  "terms.prohibited.title": z.string(),
  "terms.prohibited.description": z.string(),
  "terms.prohibited.items": z.string(),
  "terms.content.title": z.string(),
  "terms.content.description": z.string(),
  "terms.disclaimer.title": z.string(),
  "terms.disclaimer.description": z.string(),
  "terms.links.title": z.string(),
  "terms.links.description": z.string(),
  "terms.termination.title": z.string(),
  "terms.termination.description": z.string(),
  "terms.liability.title": z.string(),
  "terms.liability.description": z.string(),
  "terms.governing.title": z.string(),
  "terms.governing.description": z.string(),
  "terms.contact.title": z.string(),
  "terms.contact.description": z.string(),
  "terms.contact.email": z.string(),
});

export type TermsSchema = z.infer<typeof termsSchema>;
