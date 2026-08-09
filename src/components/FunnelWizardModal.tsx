"use client";
import WizardShell from "@/components/WizardShell";
import { funnelConfig } from "@/components/wizard/funnelConfig";

type FunnelWizardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FunnelWizardModal({ isOpen, onClose }: FunnelWizardModalProps) {
  return (
    <WizardShell
      config={funnelConfig}
      open={isOpen}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    />
  );
}
