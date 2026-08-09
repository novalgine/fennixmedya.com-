"use client";
import WizardShell from "@/components/WizardShell";
import { studioConfig } from "@/components/wizard/studioConfig";

type StudioWizardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function StudioWizardModal({ isOpen, onClose }: StudioWizardModalProps) {
  return (
    <WizardShell
      config={studioConfig}
      open={isOpen}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    />
  );
}
