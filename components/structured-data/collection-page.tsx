import type {
  CollectionPage,
  ItemList,
  ListItem,
  WithContext,
} from "schema-dts";

interface CollectionPageStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
  items: Array<{
    name: string;
    url: string;
    description?: string;
  }>;
}

export function CollectionPageStructuredData({
  url,
  title,
  description,
  lang,
  items,
}: CollectionPageStructuredDataProps) {
  const structuredData: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url,
    name: title,
    description,
    inLanguage: lang,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map(
        (item, index): ListItem => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        }),
      ),
    } satisfies ItemList,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
