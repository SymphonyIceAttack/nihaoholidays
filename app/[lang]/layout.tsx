import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import type React from "react";

import "../globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LanguageProvider } from "@/context/language-context";
import { UserTypeProvider } from "@/context/user-type-context";
import { siteConfig } from "@/lib/config";
import { type LanguageType, supportedLocales } from "@/lib/translations/config";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [
      { url: "/base-logo.webp", type: "image/webp", sizes: "1024x1024" },
      { url: "/base-logo.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: [{ url: "/base-logo.png", type: "image/png", sizes: "1024x1024" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { color: "#e11d48" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!supportedLocales.includes(lang as LanguageType)) {
    notFound();
  }

  const typedLang = lang as LanguageType;

  return (
    <html
      lang={lang}
      className={`${jetbrainsMono.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body className="font-mono antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider lang={typedLang}>
            <UserTypeProvider>
              <div className="min-h-screen flex flex-col cyber-grid">
                <Header lang={typedLang} />
                <main className="flex-1 relative">{children}</main>
                <Footer lang={typedLang} />
              </div>
            </UserTypeProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
