"use client";
import React, { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

// Tek mount noktası: tüm modallar yalnızca burada render edilir.
// Kapanınca unmount olurlar — state sıfırlama bedavaya gelir.
const FunnelWizardModal = dynamic(() => import("@/components/FunnelWizardModal"), { ssr: false });
const StudioWizardModal = dynamic(() => import("@/components/StudioWizardModal"), { ssr: false });
const PdfLeadModal = dynamic(() => import("@/components/PdfLeadModal"), { ssr: false });

export type WizardKind = "funnel" | "studio" | "pdf";

type WizardContextType = {
  /** Varsayılan "funnel" — mevcut çağrılar değişmeden çalışır */
  openWizard: (kind?: WizardKind) => void;
  closeWizard: () => void;
};

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<WizardKind | null>(null);
  const close = () => setActive(null);

  return (
    <WizardContext.Provider
      value={{ openWizard: (kind = "funnel") => setActive(kind), closeWizard: close }}
    >
      {children}
      {active === "funnel" && <FunnelWizardModal isOpen onClose={close} />}
      {active === "studio" && <StudioWizardModal isOpen onClose={close} />}
      {active === "pdf" && <PdfLeadModal isOpen onClose={close} />}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (!context) throw new Error("useWizard must be used within WizardProvider");
  return context;
}
