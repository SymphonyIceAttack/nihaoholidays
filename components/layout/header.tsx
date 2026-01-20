"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import type { LanguageType } from "@/lib/translations";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "common.nav.festivals", href: "/{lang}/#festivals" },
  { key: "common.nav.food", href: "/{lang}/#food" },
  { key: "common.nav.tools", href: "/{lang}/#tools" },
  { key: "common.nav.about", href: "/{lang}/about" },
];

const pageNavItems = [
  { key: "common.nav.contact", href: "/{lang}/contact" },
  { key: "common.nav.privacy", href: "/{lang}/privacy" },
  { key: "common.nav.terms", href: "/{lang}/terms" },
];

const translations: Record<LanguageType, Record<string, string>> = {
  en: {
    "common.nav.festivals": "Festivals",
    "common.nav.food": "Food",
    "common.nav.tools": "Tools",
    "common.nav.about": "About",
    "common.nav.contact": "Contact",
    "common.nav.privacy": "Privacy",
    "common.nav.terms": "Terms",
    "header.start": "Start Learning",
  },
};

export function Header({ lang }: { lang: LanguageType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const getHref = (href: string) => href.replace("{lang}", lang);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a href={`/${lang}`} className="flex items-center gap-2 group">
              <div className="relative">
                <img
                  src="/base-logo.png"
                  alt="NihaoHolidays"
                  className="w-8 h-8 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                />
                <div className="absolute inset-0 rounded-lg bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-semibold text-foreground hidden sm:block group-hover:text-rose-600 transition-colors">
                nihaoholidays
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={getHref(item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {t[item.key]}
              </a>
            ))}
            <span className="text-muted-foreground/30">|</span>
            <a
              href={`/${lang}/contact`}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
            >
              {t["common.nav.contact"]}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 hover:shadow-xl hover:shadow-rose-600/30 transition-all duration-300 active:scale-[0.98]"
            >
              {t["header.start"]}
            </Button>
            <button
              type="button"
              className="md:hidden p-2 -mr-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={getHref(item.href)}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t[item.key]}
              </a>
            ))}
            {pageNavItems.map((item) => (
              <a
                key={item.href}
                href={getHref(item.href)}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t[item.key]}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
