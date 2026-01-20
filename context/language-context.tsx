"use client";

import { createContext, useContext, useEffect } from "react";
import type { LanguageType } from "@/lib/translations";

interface LanguageContextType {
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: LanguageType;
}) {
  useEffect(() => {
    // Trigger any side effects needed after mount
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang: () => {} }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
