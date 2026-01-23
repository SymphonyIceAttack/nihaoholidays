"use client";

import { Utensils, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { type LanguageType, translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export function Header({ lang }: { lang: LanguageType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a
              href={`/${lang}`}
              className="flex items-center gap-2.5 group"
              aria-label="NihaoHolidays Home"
            >
              <div className="relative">
                <img
                  src="/base-logo.png"
                  alt="NihaoHolidays"
                  className="w-9 h-9 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-background opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:block group-hover:text-primary transition-colors duration-200">
                nihaoholidays
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-0.5">
            <a
              href={`/${lang}/food`}
              className="relative flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-all duration-200 hover:bg-muted/50 group"
              tabIndex={0}
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                <Utensils className="w-4 h-4" />
              </span>
              <span className="relative z-10">{t["common.nav.food"]}</span>
            </a>
            <a
              href={`/${lang}/tool`}
              className="relative flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-all duration-200 hover:bg-muted/50 group"
              tabIndex={0}
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                <Wrench className="w-4 h-4" />
              </span>
              <span className="relative z-10">{t["common.nav.tool"]}</span>
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative group">
              <ThemeToggle />
            </div>
            <a
              href={`/${lang}/learn`}
              className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 h-9 px-5"
            >
              {t["header.start"]}
            </a>
            <button
              type="button"
              className="lg:hidden p-2.5 -mr-2 rounded-xl hover:bg-muted/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label={
                mobileMenuOpen ? t["header.closeMenu"] : t["header.openMenu"]
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative block">
                <span
                  className={cn(
                    "block w-5 h-0.5 bg-foreground transition-all duration-300",
                    mobileMenuOpen
                      ? "rotate-45 translate-y-0.5"
                      : "-translate-y-0.5",
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 bg-foreground transition-all duration-300 mt-1",
                    mobileMenuOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 bg-foreground transition-all duration-300 mt-1",
                    mobileMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-0.5",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-0 z-[-1] bg-background/95 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      >
        <div
          className={cn(
            "pt-20 px-4 pb-6 transition-all duration-300",
            mobileMenuOpen ? "translate-y-0" : "translate-y-8",
          )}
        >
          <nav className="space-y-2">
            <a
              href={`/${lang}/food`}
              className="flex items-center gap-3 px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-xl transition-all duration-200 animate-in slide-in-from-left-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="opacity-60">
                <Utensils className="w-4 h-4" />
              </span>
              <span>{t["common.nav.food"]}</span>
            </a>
            <a
              href={`/${lang}/tool`}
              className="flex items-center gap-3 px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-xl transition-all duration-200 animate-in slide-in-from-left-2"
              style={{ animationDelay: "50ms" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="opacity-60">
                <Wrench className="w-4 h-4" />
              </span>
              <span>{t["common.nav.tool"]}</span>
            </a>

            <div className="pt-4">
              <a
                href={`/${lang}/learn`}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] animate-in slide-in-from-bottom-2"
                style={{ animationDelay: "100ms" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t["header.start"]}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
