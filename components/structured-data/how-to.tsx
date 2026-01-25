import type { HowTo, HowToStep, Organization, WithContext } from "schema-dts";
import { siteConfig } from "@/lib/config";

interface HowToStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
  imageUrl?: string;
  steps: Array<{
    name?: string;
    text: string;
    url?: string;
  }>;
  totalTime?: string;
}

export function HowToStructuredData({
  url,
  title,
  description,
  lang,
  imageUrl,
  steps,
  totalTime,
}: HowToStructuredDataProps) {
  const structuredData: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    url,
    name: title,
    description,
    inLanguage: lang,
    image: imageUrl,
    totalTime,
    author: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    } satisfies Organization,
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/base-logo.png`,
      },
    } satisfies Organization,
    step: steps.map(
      (step): HowToStep => ({
        "@type": "HowToStep" as const,
        name: step.name,
        text: step.text,
        url: step.url,
      }),
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
