import type { FAQPage, Question, WithContext } from "schema-dts";

interface FAQStructuredDataProps {
  url: string;
  title: string;
  description: string;
  lang: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQPageStructuredData({
  url,
  title,
  description,
  lang,
  faqs,
}: FAQStructuredDataProps) {
  const structuredData: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    name: title,
    description,
    inLanguage: lang,
    mainEntity: faqs.map(
      (faq): Question => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
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
