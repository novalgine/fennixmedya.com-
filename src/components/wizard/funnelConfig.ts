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
          value: "Yatay (Tanıtım filmi, etkinlik)",
          title: "Yatay (Tanıtım filmi, etkinlik)",
          description: "Tanıtım filmi, etkinlik ve düğün çekimi, klip",
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
          description: "Ayda iki çekim günü, sekiz video",
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
                value: "Metinden kurguya bende",
                title: "Metinden kurguya bende",
                description: "Konuyu birlikte kurarız; metni, çekimi ve kurguyu ben yaparım",
              },
              {
                value: "Sadece Çekim ve Kurgu",
                title: "Sadece Çekim & Kurgu",
                description: "Fikir ve metin bende, siz profesyonelce çekin",
              },
            ]
          : ["Tanıtım Filmi", "Etkinlik / Düğün", "Müzik Klibi", "Diğer"].map((v) => ({
              value: v,
              title: v,
            })),
    },
  ],
  contact: {
    title: "Harika! Son bir adım...",
    subtitle:
      "Görüşmeye hazırlanabilmem için iletişim bilgilerinizi bırakın, sonra takvimden saat seçin.",
    submitLabel: "Randevu Oluştur →",
  },
  submit: {
    subject: (a) => `Yeni Form Başvurusu (Sihirbaz): ${a.name}`,
    fromName: "fennixmedya.com formu",
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
