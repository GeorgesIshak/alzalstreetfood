"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "ar";

const LanguageContext = createContext({
  lang: "en" as Lang,
  setLang: (_: Lang) => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
