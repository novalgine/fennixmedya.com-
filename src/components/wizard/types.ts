export type ContactFields = { name: string; email: string; phone: string };

export type ChoiceOption = {
  /** Cevap olarak saklanan VE e-postaya giden değer — mevcut metinler birebir korunmalı */
  value: string;
  /** Görünen başlık (value'dan farklı olabilir, örn. "Anahtar Teslim (A'dan Z'ye)") */
  title: string;
  description?: string;
  badge?: string;
};

export type ChoiceStep<A> = {
  key: Exclude<keyof A, keyof ContactFields> & string;
  title: string | ((a: A) => string);
  subtitle: string | ((a: A) => string);
  options: ChoiceOption[] | ((a: A) => ChoiceOption[]);
};

export type WizardConfig<A extends ContactFields> = {
  id: "funnel" | "studio";
  /** Yalnızca seçim adımları; iletişim + takvim adımlarını WizardShell ekler */
  steps: ChoiceStep<A>[];
  /** Varsa ilerleme çubuğunun altında adım etiketi gösterilir (Studio) */
  stepLabels?: string[];
  initialAnswers: A;
  contact: { title: string; subtitle: string; submitLabel: string };
  submit: {
    subject: (a: A) => string;
    fromName: string;
    /** E-postadaki alan adları birebir korunmalı (Türkçe anahtarlar dahil) */
    mapPayload: (a: A) => Record<string, string>;
  };
  cal: { link: string };
};
