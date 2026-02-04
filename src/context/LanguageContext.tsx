import React, { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "cn";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (en: string, cn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>("en");

    const t = (en: string, cn: string): string => {
        return lang === "en" ? en : cn;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
