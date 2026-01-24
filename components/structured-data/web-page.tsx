import type { WebPage, WithContext } from "schema-dts";

interface WebPageStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
}

export function WebPageStructuredData({
  url,
  title,
  description,
  lang,
}: WebPageStructuredDataProps) {
  const structuredData: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    description,
    inLanguage: lang,
    mainEntity: {
      "@type": "WebPage",
      url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
