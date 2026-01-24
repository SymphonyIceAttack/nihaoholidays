import type { AboutPage, Organization, WithContext } from "schema-dts";
import { siteConfig } from "@/lib/config";

interface AboutPageStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
}

export function AboutPageStructuredData({
  url,
  title,
  description,
  lang,
}: AboutPageStructuredDataProps) {
  const structuredData: WithContext<AboutPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url,
    name: title,
    description,
    inLanguage: lang,
    mainEntity: {
      "@type": "Organization",
      "@id": "https://nihaoholidays.org",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      description:
        "A platform dedicated to helping non-Chinese speakers understand and celebrate Chinese festivals with confidence.",
      logo: "https://nihaoholidays.org/base-logo.png",
      sameAs: [
        "https://twitter.com/nihaoholidays",
        "https://facebook.com/nihaoholidays",
        "https://instagram.com/nihaoholidays",
      ],
    } satisfies Organization,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
