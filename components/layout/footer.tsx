import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { LanguageType } from "@/lib/translations";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerTranslations: Record<LanguageType, string> = {
  en: "© 2025 nihaoholidays. All rights reserved.",
};

const footerColumns: Record<LanguageType, FooterColumn[]> = {
  en: [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/en" },
        { label: "Learn Chinese", href: "/en/learn" },
        { label: "Festivals", href: "/en/festival/chinese-new-year" },
        { label: "Chinese Culture", href: "/en/culture/chinese-new-year" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "All Tools", href: "/en/tool" },
        { label: "Greeting Cards", href: "/en/tool/greetings" },
        { label: "Red Envelopes", href: "/en/tool/red-envelope" },
        { label: "AI Assistant", href: "/en/tool/menu" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "About Us", href: "/en/about" },
        { label: "Contact", href: "/en/contact" },
        { label: "Subscribe", href: "/en/subscribe" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/en/privacy" },
        { label: "Terms of Service", href: "/en/terms" },
        { label: "Disclaimer", href: "/en/disclaimer" },
      ],
    },
  ],
};

export function Footer({ lang }: { lang: LanguageType }) {
  const t = footerTranslations[lang];
  const columns = footerColumns[lang];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/base-logo.png"
                alt="NihaoHolidays"
                className="w-10 h-10 rounded-xl shadow-sm"
              />
              <span className="font-semibold text-foreground">
                nihaoholidays
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your gateway to Chinese festivals and culture. Learn, celebrate,
              and connect.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm text-primary hover:text-primary/80 transition-colors duration-200"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          {/* Navigation columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium text-foreground mb-4">
                {column.title}
              </h3>
              <nav className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{t}</p>
            <div className="flex items-center gap-6">
              <Link
                href="/en/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/en/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
