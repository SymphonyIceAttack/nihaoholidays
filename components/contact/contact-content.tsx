"use client";

import type { LanguageType } from "@/lib/translations";
import { ContactForm } from "./components/contact-form";
import { ContactHero } from "./components/contact-hero";
import { ContactMethods } from "./components/contact-methods";

const translations: Record<LanguageType, Record<string, string>> = {
  en: {
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Have questions, suggestions, or feedback? We'd love to hear from you.",
    "contact.email.label": "Email",
    "contact.email.description": "The best way to reach us is via email.",
    "contact.email.address": "hello@nihaoholidays.org",
    "contact.response.label": "Response Time",
    "contact.response.description": "We typically respond within 24-48 hours.",
    "contact.response.value": "24-48 hours",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success":
      "Thank you for your message! We'll get back to you soon.",
  },
};

export function ContactContent({ lang }: { lang: LanguageType }) {
  const t = translations[lang];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ContactHero
          title={t["contact.title"]}
          subtitle={t["contact.subtitle"]}
        />

        <ContactMethods
          emailLabel={t["contact.email.label"]}
          emailDescription={t["contact.email.description"]}
          emailValue={t["contact.email.address"]}
          responseLabel={t["contact.response.label"]}
          responseDescription={t["contact.response.description"]}
          responseValue={t["contact.response.value"]}
        />

        <ContactForm
          title={t["contact.title"]}
          nameLabel={t["contact.form.name"]}
          emailLabel={t["contact.form.email"]}
          subjectLabel={t["contact.form.subject"]}
          messageLabel={t["contact.form.message"]}
          submitText={t["contact.form.submit"]}
          sendingText={t["contact.form.sending"]}
          successText={t["contact.form.success"]}
        />
      </div>
    </div>
  );
}
