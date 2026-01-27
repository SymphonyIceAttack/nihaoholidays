"use client";

import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { LanguageType } from "@/lib/translations/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "节日", href: "#festivals" },
  { label: "美食", href: "#food" },
  { label: "工具", href: "#tools" },
  { label: "关于我们", href: "#about" },
];

export function Header({ lang }: { lang: LanguageType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-transform group-hover:scale-105">
                节
              </div>
              <div className="absolute inset-0 rounded-xl bg-rose-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-semibold text-foreground hidden sm:block font-serif">
              节日文化通
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>中文</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <Button
              size="sm"
              asChild
              className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 hover-glow transition-all duration-300"
            >
              <Link href={`/${lang}/learn`}>Start Learning</Link>
            </Button>
            <button
              type="button"
              className="md:hidden p-2 -mr-2 hover:bg-muted rounded-lg transition-colors"
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

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-200 bg-background/95 backdrop-blur-md rounded-b-lg -mx-4 px-4",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
