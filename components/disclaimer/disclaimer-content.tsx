import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  Globe,
  Info,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import type { LanguageType } from "@/lib/translations";
import { cn } from "@/lib/utils";

const translations: Record<LanguageType, Record<string, string | string[]>> = {
  en: {
    "disclaimer.title": "Disclaimer",
    "disclaimer.intro": "Last updated: January 2025",
    "disclaimer.intro.description":
      "This Disclaimer provides important information about the use of NihaoHolidays content and services.",
    "disclaimer.general.title": "General Disclaimer",
    "disclaimer.general.description":
      "NihaoHolidays provides cultural information for educational purposes only. While we strive to provide accurate and up-to-date content, we cannot guarantee that all information is completely accurate, complete, or current. Cultural practices, traditions, and norms may vary significantly by region, community, and over time.",
    "disclaimer.notProfessional.title": "Not Professional Advice",
    "disclaimer.notProfessional.description":
      "The content on NihaoHolidays is not intended to be a substitute for professional advice. This includes but is not limited to:",
    "disclaimer.notProfessional.items": [
      "Legal advice or recommendations",
      "Medical or health advice",
      "Financial or investment advice",
      "Cultural consulting for business purposes",
    ],
    "disclaimer.regional.title": "Regional Variations",
    "disclaimer.regional.description":
      "China is a vast country with diverse regional cultures. Practices during festivals can vary significantly between different provinces, cities, and communities. We strive to represent common practices, but your specific local experience may differ.",
    "disclaimer.thirdParty.title": "Third-Party Content",
    "disclaimer.thirdParty.description":
      "Our website may contain links to third-party websites or resources. We are not responsible for the content, privacy practices, or accuracy of these external sources. Accessing third-party links is at your own risk.",
    "disclaimer.userContent.title": "User Responsibility",
    "disclaimer.userContent.description":
      "Users are responsible for their own actions and decisions. Using our content as a guide does not guarantee a specific outcome in social situations. Cultural interactions depend on many factors beyond our control.",
    "disclaimer.accuracy.title": "Content Accuracy",
    "disclaimer.accuracy.description":
      "We make reasonable efforts to ensure the accuracy of our content. However, we cannot be held liable for any errors, omissions, or interpretations of the information provided. If you notice an error, please contact us.",
    "disclaimer.noWarranty.title": "No Warranty",
    "disclaimer.noWarranty.description":
      "NihaoHolidays is provided 'as is' without any warranties, express or implied. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.",
    "disclaimer.liability.title": "Limitation of Liability",
    "disclaimer.liability.description":
      "To the maximum extent permitted by applicable law, NihaoHolidays and its team shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of this website.",
    "disclaimer.changes.title": "Changes to This Disclaimer",
    "disclaimer.changes.description":
      "We may update this Disclaimer from time to time. Continued use of our services after any changes constitutes acceptance of the new Disclaimer.",
    "disclaimer.contact.title": "Questions",
    "disclaimer.contact.description":
      "If you have questions about this Disclaimer, please contact us at:",
    "disclaimer.contact.email": "hello@nihaoholidays.com",
  },
};

const sections = [
  {
    icon: AlertTriangle,
    titleKey: "disclaimer.general.title",
    descriptionKey: "disclaimer.general.description",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Scale,
    titleKey: "disclaimer.notProfessional.title",
    descriptionKey: "disclaimer.notProfessional.description",
    itemsKey: "disclaimer.notProfessional.items",
    color: "from-red-400 to-red-600",
  },
  {
    icon: Globe,
    titleKey: "disclaimer.regional.title",
    descriptionKey: "disclaimer.regional.description",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Globe,
    titleKey: "disclaimer.thirdParty.title",
    descriptionKey: "disclaimer.thirdParty.description",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: UserCheck,
    titleKey: "disclaimer.userContent.title",
    descriptionKey: "disclaimer.userContent.description",
    color: "from-green-400 to-green-600",
  },
  {
    icon: CheckCircle,
    titleKey: "disclaimer.accuracy.title",
    descriptionKey: "disclaimer.accuracy.description",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: Shield,
    titleKey: "disclaimer.noWarranty.title",
    descriptionKey: "disclaimer.noWarranty.description",
    color: "from-slate-400 to-slate-600",
  },
  {
    icon: Shield,
    titleKey: "disclaimer.liability.title",
    descriptionKey: "disclaimer.liability.description",
    color: "from-rose-400 to-rose-600",
  },
];

export function DisclaimerContent({ lang }: { lang: LanguageType }) {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {t["disclaimer.title"]}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {t["disclaimer.intro"]}
          </p>
          <p className="text-lg text-muted-foreground">
            {t["disclaimer.intro.description"]}
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
                className="animate-in fade-in slide-in-from-bottom-4 border-amber-100 dark:border-amber-900/30"
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
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
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

        {/* Changes */}
        <Card className="mt-8 border-muted">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground flex-shrink-0">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {t["disclaimer.changes.title"]}
                </h2>
                <p className="text-muted-foreground">
                  {t["disclaimer.changes.description"]}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <Card className="mt-8">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex-shrink-0">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {t["disclaimer.contact.title"]}
                </h2>
                <p className="text-muted-foreground mb-2">
                  {t["disclaimer.contact.description"]}
                </p>
                <a
                  href="mailto:hello@nihaoholidays.com"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  {t["disclaimer.contact.email"]}
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
