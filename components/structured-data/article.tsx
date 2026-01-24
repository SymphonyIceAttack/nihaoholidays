import type {
  Article,
  ImageObject,
  Organization,
  WithContext,
} from "schema-dts";
import { siteConfig } from "@/lib/config";

interface ArticleStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
  publishedTime?: string;
  modifiedTime?: string;
  imageUrl?: string;
  authorName?: string;
}

export function ArticleStructuredData({
  url,
  title,
  description,
  lang,
  publishedTime,
  modifiedTime,
  imageUrl,
  authorName,
}: ArticleStructuredDataProps) {
  const structuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    url,
    headline: title,
    description,
    inLanguage: lang,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: authorName || siteConfig.siteName,
      url: siteConfig.siteUrl,
    } satisfies Organization,
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://nihaoholidays.org/base-logo.png",
      } satisfies ImageObject,
    } satisfies Organization,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
