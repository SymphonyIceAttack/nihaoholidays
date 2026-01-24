import type {
  BlogPosting,
  ImageObject,
  Organization,
  WebPage,
  WithContext,
} from "schema-dts";
import { siteConfig } from "@/lib/config";

interface BlogPostStructuredDataProps {
  lang: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  imageUrl?: string;
}

export function BlogPostStructuredData({
  lang,
  title,
  description,
  slug,
  publishedAt,
  imageUrl,
}: BlogPostStructuredDataProps) {
  const structuredData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: publishedAt,
    author: {
      "@type": "Organization",
      name: "NihaoHolidays",
    } satisfies Organization,
    publisher: {
      "@type": "Organization",
      name: "NihaoHolidays",
      logo: {
        "@type": "ImageObject",
        url: "https://nihaoholidays.org/base-logo.png",
      } satisfies ImageObject,
    } satisfies Organization,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nihaoholidays.org/${lang}/posts/${slug}`,
    } satisfies WebPage,
    image: imageUrl ? `${siteConfig.imageCdn}/${imageUrl}` : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
