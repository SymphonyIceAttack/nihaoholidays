import {
  Cookie,
  Database,
  Eye,
  Lock,
  Mail,
  RefreshCw,
  Shield,
  UserCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations";
import { cn } from "@/lib/utils";

const translations: Record<LanguageType, Record<string, string | string[]>> = {
  en: {
    "privacy.title": "Privacy Policy",
    "privacy.intro": "Last updated: January 2025",
    "privacy.intro.description":
      "At NihaoHolidays, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information.",
    "privacy.collect.title": "Information We Collect",
    "privacy.collect.description":
      "We collect information you provide directly to us, such as when you:",
    "privacy.collect.items": [
      "Contact us via email",
      "Subscribe to our newsletter",
      "Use our interactive tools",
    ],
    "privacy.analytics": "Automatically Collected Information",
    "privacy.analytics.description":
      "We use analytics tools to understand how visitors use our site. This may include:",
    "privacy.analytics.items": [
      "Pages visited and time spent",
      "Device and browser information",
      "Approximate location (country level)",
      "Referring websites",
    ],
    "privacy.use.title": "How We Use Your Information",
    "privacy.use.items": [
      "Improve our content and user experience",
      "Respond to your inquiries",
      "Analyze site traffic and trends",
      "Send updates if you've subscribed",
    ],
    "privacy.cookies.title": "Cookies",
    "privacy.cookies.description":
      "We use cookies to enhance your experience. You can disable cookies in your browser settings.",
    "privacy.third.title": "Third-Party Services",
    "privacy.third.description":
      "We may use third-party services (like analytics) that collect information according to their own privacy policies.",
    "privacy.security.title": "Data Security",
    "privacy.security.description":
      "We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure.",
    "privacy.rights.title": "Your Rights",
    "privacy.rights.description": "You have the right to:",
    "privacy.rights.items": [
      "Request access to your personal data",
      "Request correction of inaccurate data",
      "Request deletion of your data",
      "Opt-out of communications",
    ],
    "privacy.contact.title": "Contact Us",
    "privacy.contact.description":
      "If you have questions about this Privacy Policy, please contact us at:",
    "privacy.contact.email": "hello@nihaoholidays.org",
    "privacy.changes.title": "Changes to This Policy",
    "privacy.changes.description":
      "We may update this Privacy Policy from time to time. We encourage you to review this page periodically.",
  },
};

const sections = [
  {
    icon: Database,
    titleKey: "privacy.collect.title",
    descriptionKey: "privacy.collect.description",
    itemsKey: "privacy.collect.items",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Eye,
    titleKey: "privacy.analytics",
    descriptionKey: "privacy.analytics.description",
    itemsKey: "privacy.analytics.items",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Shield,
    titleKey: "privacy.use.title",
    itemsKey: "privacy.use.items",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Cookie,
    titleKey: "privacy.cookies.title",
    descriptionKey: "privacy.cookies.description",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Lock,
    titleKey: "privacy.security.title",
    descriptionKey: "privacy.security.description",
    color: "from-red-400 to-red-600",
  },
  {
    icon: UserCheck,
    titleKey: "privacy.rights.title",
    descriptionKey: "privacy.rights.description",
    itemsKey: "privacy.rights.items",
    color: "from-teal-400 to-teal-600",
  },
];

export function PrivacyContent({ lang }: { lang: LanguageType }) {
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
            {t["privacy.title"]}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {t["privacy.intro"]}
          </p>
          <p className="text-lg text-muted-foreground">
            {t["privacy.intro.description"]}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
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
                      {section.descriptionKey && (
                        <p className="text-muted-foreground mb-4">
                          {t[section.descriptionKey]}
                        </p>
                      )}
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
                  {t["privacy.contact.title"]}
                </h2>
                <p className="text-muted-foreground mb-2">
                  {t["privacy.contact.description"]}
                </p>
                <a
                  href="mailto:hello@nihaoholidays.org"
                  className="text-rose-600 hover:text-rose-700 font-medium"
                >
                  {t["privacy.contact.email"]}
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Changes */}
        <Card className="mt-8">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground flex-shrink-0">
                <RefreshCw className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {t["privacy.changes.title"]}
                </h2>
                <p className="text-muted-foreground">
                  {t["privacy.changes.description"]}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
