import type { BreadcrumbList, ListItem, WithContext } from "schema-dts";

interface BreadcrumbStructuredDataProps {
  lang: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbStructuredData({
  lang,
  items,
}: BreadcrumbStructuredDataProps) {
  const structuredData: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(
      (item, index): ListItem => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `https://nihaoholidays.org/${lang}${item.url}`,
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
