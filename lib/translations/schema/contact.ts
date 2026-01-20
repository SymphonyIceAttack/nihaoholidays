import { z } from "zod";

export const contactSchema = z.object({
  "contact.title": z.string(),
  "contact.subtitle": z.string(),
  "contact.email.label": z.string(),
  "contact.email.description": z.string(),
  "contact.email.address": z.string(),
  "contact.response.label": z.string(),
  "contact.response.description": z.string(),
  "contact.form.name": z.string(),
  "contact.form.email": z.string(),
  "contact.form.subject": z.string(),
  "contact.form.message": z.string(),
  "contact.form.submit": z.string(),
  "contact.form.sending": z.string(),
  "contact.form.success": z.string(),
  "contact.form.error": z.string(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
