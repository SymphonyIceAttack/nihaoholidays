import type {
  ContactPage,
  Organization,
  PostalAddress,
  WithContext,
} from "schema-dts";
import { siteConfig } from "@/lib/config";

interface ContactPageStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
  email?: string;
  phone?: string;
}

export function ContactPageStructuredData({
  url,
  title,
  description,
  lang,
  email,
  phone,
}: ContactPageStructuredDataProps) {
  const address: PostalAddress = {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "San Francisco",
  };

  const contactPoint = {
    "@type": "ContactPoint" as const,
    telephone: phone,
    email: email,
    contactType: "customer service" as const,
    availableLanguage: ["English", "Chinese"],
  };

  const structuredData: WithContext<ContactPage> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url,
    name: title,
    description,
    inLanguage: lang,
    mainEntity: {
      "@type": "Organization",
      "@id": "https://nihaoholidays.org",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      contactPoint: [contactPoint],
      address,
    } satisfies Organization,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
