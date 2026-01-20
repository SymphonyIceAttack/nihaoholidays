import {
  CheckCircle,
  FileText,
  Gavel,
  Globe,
  Mail,
  Shield,
  XCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations";
import { cn } from "@/lib/utils";

const translations: Record<LanguageType, Record<string, string | string[]>> = {
  en: {
    "terms.title": "Terms of Service",
    "terms.intro": "Last updated: January 2025",
    "terms.intro.description":
      "Please read these Terms of Service carefully before using NihaoHolidays.",
    "terms.accept.title": "Acceptance of Terms",
    "terms.accept.description":
      "By accessing and using NihaoHolidays, you accept and agree to be bound by these Terms of Service.",
    "terms.use.title": "Use of Services",
    "terms.use.description": "Our services are intended for:",
    "terms.use.items": [
      "Learning about Chinese festivals and traditions",
      "Practicing holiday-related conversations and etiquette",
      "Planning cultural experiences",
    ],
    "terms.prohibited.title": "Prohibited Uses",
    "terms.prohibited.description": "You agree not to:",
    "terms.prohibited.items": [
      "Use the site for any unlawful purpose",
      "Attempt to gain unauthorized access to our systems",
      "Reproduce or distribute content without permission",
      "Use automated systems to access the site",
    ],
    "terms.content.title": "User-Generated Content",
    "terms.content.description":
      "Any content you submit to us (like feedback) must be appropriate and not violate others' rights.",
    "terms.disclaimer.title": "Disclaimer",
    "terms.disclaimer.description":
      "NihaoHolidays provides cultural information for educational purposes. We strive for accuracy but cannot guarantee completeness or timeliness. Cultural practices may vary by region and change over time.",
    "terms.links.title": "Third-Party Links",
    "terms.links.description":
      "Our site may contain links to third-party websites. We are not responsible for their content or privacy practices.",
    "terms.termination.title": "Termination",
    "terms.termination.description":
      "We may terminate or suspend access to our services without prior notice for conduct we believe violates these Terms.",
    "terms.liability.title": "Limitation of Liability",
    "terms.liability.description":
      "To the maximum extent permitted by law, NihaoHolidays shall not be liable for any indirect, incidental, or consequential damages.",
    "terms.governing.title": "Governing Law",
    "terms.governing.description":
      "These Terms shall be governed by applicable laws.",
    "terms.contact.title": "Contact Us",
    "terms.contact.description":
      "For questions about these Terms, please contact:",
    "terms.contact.email": "hello@nihaoholidays.org",
  },
};

const sections = [
  {
    icon: CheckCircle,
    titleKey: "terms.accept.title",
    descriptionKey: "terms.accept.description",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Globe,
    titleKey: "terms.use.title",
    descriptionKey: "terms.use.description",
    itemsKey: "terms.use.items",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: XCircle,
    titleKey: "terms.prohibited.title",
    descriptionKey: "terms.prohibited.description",
    itemsKey: "terms.prohibited.items",
    color: "from-red-400 to-red-600",
  },
  {
    icon: FileText,
    titleKey: "terms.content.title",
    descriptionKey: "terms.content.description",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Shield,
    titleKey: "terms.disclaimer.title",
    descriptionKey: "terms.disclaimer.description",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Globe,
    titleKey: "terms.links.title",
    descriptionKey: "terms.links.description",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: XCircle,
    titleKey: "terms.termination.title",
    descriptionKey: "terms.termination.description",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Gavel,
    titleKey: "terms.liability.title",
    descriptionKey: "terms.liability.description",
    color: "from-slate-400 to-slate-600",
  },
  {
    icon: Gavel,
    titleKey: "terms.governing.title",
    descriptionKey: "terms.governing.description",
    color: "from-indigo-400 to-indigo-600",
  },
];

export function TermsContent({ lang }: { lang: LanguageType }) {
  const t = translations[lang];

  const items = (key: string) => {
    const items = t[key];
    return Array.isArray(items) ? items : [];
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            {t["terms.title"]}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {t["terms.intro"]}
          </p>
          <p className="text-lg text-muted-foreground">
            {t["terms.intro.description"]}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const sectionItems = section.itemsKey
              ? items(section.itemsKey)
              : [];

            return (
              <Card
                key={section.titleKey}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "inline-flex items-center justify-center w-10 h-10 rounded-lg text-white flex-shrink-0",
                        section.color,
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-foreground mb-2">
                        {t[section.titleKey]}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {t[section.descriptionKey]}
                      </p>
                      {sectionItems.length > 0 && (
                        <ul className="space-y-2">
                          {sectionItems.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact */}
        <Card className="mt-8">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {t["terms.contact.title"]}
                </h2>
                <p className="text-muted-foreground mb-2">
                  {t["terms.contact.description"]}
                </p>
                <a
                  href="mailto:hello@nihaoholidays.org"
                  className="text-rose-600 hover:text-rose-700 font-medium"
                >
                  {t["terms.contact.email"]}
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
