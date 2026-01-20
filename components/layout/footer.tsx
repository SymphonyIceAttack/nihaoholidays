import Link from "next/link";
import type { LanguageType } from "@/lib/translations";

const footerTranslations: Record<LanguageType, string> = {
  en: "© 2025 nihaoholidays. All rights reserved.",
};

const footerLinks = {
  en: [
    { label: "About", href: "/en/about" },
    { label: "Contact", href: "/en/contact" },
    { label: "Privacy", href: "/en/privacy" },
    { label: "Terms", href: "/en/terms" },
    { label: "Disclaimer", href: "/en/disclaimer" },
  ],
};

export function Footer({ lang }: { lang: LanguageType }) {
  const t = footerTranslations[lang];
  const links = footerLinks[lang];

  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/base-logo.png"
              alt="NihaoHolidays"
              className="w-10 h-10 rounded-xl shadow-sm"
            />
            <span className="font-semibold text-foreground">nihaoholidays</span>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">{t}</p>
        </div>
      </div>
    </footer>
  );
}
