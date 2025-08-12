"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TranslationContextType {
  showTranslation: boolean;
  setShowTranslation: (show: boolean) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <TranslationContext.Provider
      value={{ showTranslation, setShowTranslation }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
