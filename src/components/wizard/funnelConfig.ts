import type { ContactFields, WizardConfig } from "./types";

export type FunnelAnswers = ContactFields & {
  format: string;
  model: string;
  content: string;
};

export const funnelConfig: WizardConfig<FunnelAnswers> = {
  id: "funnel",
  initialAnswers: { format: "", model: "", content: "", name: "", email: "", phone: "" },
  steps: [
    {
      key: "format",
      title: "Hangi formata ihtiyacınız var?",
      subtitle: "Prodüksiyonunuzun ana mecrasını belirleyelim.",
      options: [
        {
          value: "Dikey (Sosyal Medya, Reels)",
          title: "Dikey (Sosyal Medya, Reels)",
          description: "Reels, TikTok, Shorts için özel kurgulanmış",
        },
        {
          value: "Yatay (YouTube, TV)",
          title: "Yatay (YouTube, TV)",
          description: "Tanıtım filmleri, YouTube serileri, Klipler",
        },
      ],
    },
    {
      key: "model",
      title: "Çalışma modeli nasıl olsun?",
      subtitle: "İhtiyacınızın süresini belirleyelim.",
      options: [
        {
          value: "Uzun Soluklu / Aylık",
          title: "Aylık Düzenli Üretim",
          description: "Ayda sadece birkaç saat ayırarak 30 günlük içerik",
          badge: "ÖNERİLEN",
        },
        {
          value: "Tek Seferlik",
          title: "Tek Seferlik",
          description: "Belirli bir kampanya veya deneme çekimi",
        },
      ],
    },
    {
      key: "content",
      title: (a) => (a.format.includes("Dikey") ? "İçerik ve Senaryo" : "Video Türü"),
      subtitle: (a) =>
        a.format.includes("Dikey") ? "Fikirleri kim üretecek?" : "Nasıl bir içerik planlıyorsunuz?",
      options: (a) =>
        a.format.includes("Dikey")
          ? [
              {
                value: "Anahtar Teslim (Fennix Medya)",
                title: "Anahtar Teslim (A'dan Z'ye)",
                description: "Konsept, metin, çekim ve kurguyu ben halledeyim",
              },
              {
                value: "Sadece Çekim ve Kurgu",
                title: "Sadece Çekim & Kurgu",
                description: "Fikir ve metin bende, siz profesyonelce çekin",
              },
            ]
          : ["Tanıtım Filmi", "YouTube Serisi", "Müzik Klibi / Etkinlik", "Diğer"].map((v) => ({
              value: v,
              title: v,
            })),
    },
  ],
  contact: {
    title: "Harika! Son bir adım...",
    subtitle:
      "Size özel stratejimizi oluşturabilmemiz için iletişim bilgilerinizi girin ve takvime geçin.",
    submitLabel: "Randevu Oluştur →",
  },
  submit: {
    subject: (a) => `Yeni Form Başvurusu (Sihirbaz): ${a.name}`,
    fromName: "Fennix Medya Wizard",
    mapPayload: (a) => ({
      "Ad Soyad": a.name,
      "E-posta": a.email,
      "Telefon": a.phone,
      "Format": a.format,
      "Model": a.model,
      "İçerik/Senaryo Türü": a.content,
    }),
  },
  cal: { link: "semihhasanoglu/15min" },
};
