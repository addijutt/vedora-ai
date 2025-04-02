// "use client";
// import React, { createContext, useState, useContext, ReactNode } from "react";
// import { en } from "../app/translations/en";
// import { de } from "../app/translations/de";
// import { fr } from "@/app/translations/fr";
// import { it } from "@/app/translations/it";
// import { es } from "@/app/translations/es";
// import { bg } from "@/app/translations/bg";
// import { el } from "@/app/translations/el";
// import { pl } from "@/app/translations/pl";
// import { tr } from "@/app/translations/tr";
// import { pt } from "@/app/translations/pt";

// type Language =
//   | "en"
//   | "de"
//   | "fr"
//   | "es"
//   | "it"
//   | "bg"
//   | "el"
//   | "pl"
//   | "tr"
//   | "pt";

// type Translations = typeof en;

// const translations: Record<Language, Translations> = {
//   en,
//   de,
//   fr,
//   es,
//   it,
//   bg,
//   el,
//   pl,
//   tr,
//   pt,
// };

// interface TranslationContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: Translations;
// }

// const TranslationContext = createContext<TranslationContextType | undefined>(
//   undefined
// );

// export const useTranslations = () => {
//   const context = useContext(TranslationContext);
//   if (context === undefined) {
//     throw new Error(
//       "useTranslations must be used within a TranslationProvider"
//     );
//   }
//   return context;
// };

// interface TranslationProviderProps {
//   children: ReactNode;
// }

// export const TranslationProvider: React.FC<TranslationProviderProps> = ({
//   children,
// }) => {
//   const [language, setLanguage] = useState<Language>("en");

//   const value = {
//     language,
//     setLanguage,
//     t: translations[language],
//   };

//   return (
//     <TranslationContext.Provider value={value}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };