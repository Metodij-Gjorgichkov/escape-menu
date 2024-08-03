import React, { createContext, useState } from "react";

export type LangContextType = {
  lang: "MK" | "EN";
  handleLanguageChange: (newLang: LangContextType["lang"]) => void;
};

export const LangContext = createContext<LangContextType>({
  lang: "MK",
  handleLanguageChange: (newTheme: LangContextType["lang"]) => {},
});

interface Props {
  children: React.ReactNode;
}

const LangContextConstructor = ({ children }: Props) => {
  const [lang, setLanguage] = useState<LangContextType["lang"]>("MK");

  const handleLanguageChange = (newLang: LangContextType["lang"]) => {
    setLanguage(newLang);
  };
  return (
    <LangContext.Provider value={{ lang, handleLanguageChange }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextConstructor;
