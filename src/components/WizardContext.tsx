"use client";
import React, { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

const FunnelWizardModal = dynamic(() => import("@/components/FunnelWizardModal"), {
  ssr: false,
});

type WizardContextType = {
  openWizard: () => void;
  closeWizard: () => void;
};

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WizardContext.Provider value={{ openWizard: () => setIsOpen(true), closeWizard: () => setIsOpen(false) }}>
      {children}
      {isOpen && <FunnelWizardModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (!context) throw new Error("useWizard must be used within WizardProvider");
  return context;
}
