"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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

function getFooterColumns(lang: LanguageType): FooterColumn[] {
  const base = `/${lang}`;
  return [
    {
      title: "Explore",
      links: [
        { label: "Home", href: base },
        { label: "Blog", href: `${base}/posts` },
        { label: "Learn Chinese", href: `${base}/learn` },
        { label: "Festivals", href: `${base}/festival/chinese-new-year` },
        { label: "Chinese Culture", href: `${base}/culture/chinese-new-year` },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "All Tools", href: `${base}/tool` },
        { label: "Greeting Cards", href: `${base}/tool/greetings` },
        { label: "Red Envelopes", href: `${base}/tool/red-envelope` },
        { label: "AI Assistant", href: `${base}/tool/menu` },
      ],
    },
    {
      title: "About",
      links: [
        { label: "About Us", href: `${base}/about` },
        { label: "Contact", href: `${base}/contact` },
        { label: "Subscribe", href: `${base}/subscribe` },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: `${base}/privacy` },
        { label: "Terms of Service", href: `${base}/terms` },
        { label: "Disclaimer", href: `${base}/disclaimer` },
      ],
    },
  ];
}

export function Footer({ lang }: { lang: LanguageType }) {
  const t = footerTranslations[lang];
  const columns = getFooterColumns(lang);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const productHuntBadge =
    mounted && theme === "dark" ? (
      <a
        href="https://www.producthunt.com/products/nihaoholidays?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nihaoholidays"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="NihaoHolidays on Product Hunt"
      >
        <img
          alt="nihaoholidays - Know what to say and do at every Chinese festival | Product Hunt"
          width="250"
          height="54"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1067783&theme=dark&t=1769328764014"
          className="rounded-lg"
        />
      </a>
    ) : (
      <a
        href="https://www.producthunt.com/products/nihaoholidays?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nihaoholidays"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="NihaoHolidays on Product Hunt"
      >
        <img
          alt="nihaoholidays - Know what to say and do at every Chinese festival | Product Hunt"
          width="250"
          height="54"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1067783&theme=light&t=1769328764014"
          className="rounded-lg"
        />
      </a>
    );

  const nextGenToolsBadge = (
    <a
      href="https://www.nxgntools.com/tools/nihaoholidays?utm_source=nihaoholidays"
      target="_blank"
      rel="noopener"
      aria-label="NihaoHolidays on NextGen Tools"
      className="inline-block"
    >
      <img
        src="https://www.nxgntools.com/api/embed/nihaoholidays?type=FEATURED_ON"
        alt="NextGen Tools Badge - The #1 AI Tools Directory & Launch Platform"
        className="h-12 w-auto rounded-lg dark:filter dark:invert dark:hue-rotate-180"
      />
    </a>
  );

  const turbo0Badge = (
    <a
      href="https://turbo0.com/item/nihaoholidays"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Listed on Turbo0"
    >
      <img
        src="https://img.turbo0.com/badge-listed-light.svg"
        alt="Listed on Turbo0"
        className="h-[54px] w-auto rounded-lg dark:filter dark:invert"
      />
    </a>
  );

  const fazierBadge = mounted ? (
    theme === "dark" ? (
      <a
        href="https://fazier.com/launches/nihaoholidays"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazier Daily Featured"
      >
        <img
          src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=6896&badge_type=daily&theme=dark"
          alt="Fazier badge"
          width="270"
          className="rounded-lg"
        />
      </a>
    ) : (
      <a
        href="https://fazier.com/launches/nihaoholidays"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazier Daily Featured"
      >
        <img
          src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=6896&badge_type=daily&theme=light"
          alt="Fazier badge"
          width="270"
          className="rounded-lg"
        />
      </a>
    )
  ) : null;

  const ufindBadge = (
    <a
      href="https://ufind.best/products/nihaoholidays?utm_source=ufind.best"
      target="_blank"
      rel="noopener"
      aria-label="Featured on ufind.best"
      className="inline-block"
    >
      <img
        src="https://ufind.best/badges/ufind-best-badge-light.svg"
        alt="Featured on ufind.best"
        width="150"
        className="rounded-lg"
      />
    </a>
  );

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
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
            <p className="text-sm text-muted-foreground">
              Your gateway to Chinese festivals and culture. Learn, celebrate,
              and connect.
            </p>
          </div>

          {/* Social column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium text-foreground mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-primary hover:text-primary/80 transition-colors duration-200"
              >
                {siteConfig.contactEmail}
              </a>
              <a
                href="https://github.com/SymphonyIceAttack/nihaoholidays"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <div className="mt-2">{productHuntBadge}</div>
              <div className="mt-2">{nextGenToolsBadge}</div>
              <div className="mt-2">{turbo0Badge}</div>
              <div className="mt-2">{fazierBadge}</div>
              <div className="mt-2">{ufindBadge}</div>
            </div>
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
                href={`/${lang}/privacy`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href={`/${lang}/terms`}
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
