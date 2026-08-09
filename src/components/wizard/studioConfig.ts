import type { ContactFields, WizardConfig } from "./types";

export type StudioAnswers = ContactFields & {
  location: string;
  purpose: string;
  budget: string;
  experience: string;
  editing: string;
};

export const studioConfig: WizardConfig<StudioAnswers> = {
  id: "studio",
  stepLabels: ["Mekan", "Kullanım", "Bütçe", "Deneyim", "Kurgu", "İletişim", "Takvim"],
  initialAnswers: {
    location: "",
    purpose: "",
    budget: "",
    experience: "",
    editing: "",
    name: "",
    email: "",
    phone: "",
  },
  steps: [
    {
      key: "location",
      title: "Stüdyonuzu Tasarlayalım",
      subtitle: "Stüdyonuzu nereye kuracaksınız?",
      options: [
        {
          value: "Evde bir oda",
          title: "Evde bir oda",
          description: "Evinizde bir odayı profesyonel stüdyoya dönüştürelim",
        },
        {
          value: "Ofiste bir alan",
          title: "Ofiste bir alan",
          description: "Ofisinizde içerik üretim alanı oluşturalım",
        },
        {
          value: "Henüz karar vermedim",
          title: "Henüz karar vermedim",
          description: "Birlikte en uygun mekanı belirleyelim",
        },
      ],
    },
    {
      key: "purpose",
      title: "Kullanım Amacı",
      subtitle: "Stüdyoyu ne için kullanacaksınız?",
      options: [
        { value: "Sosyal medya içerikleri (Reels/TikTok)", title: "Sosyal medya içerikleri (Reels/TikTok)" },
        { value: "Podcast / Söyleşi", title: "Podcast / Söyleşi" },
        { value: "YouTube / Eğitim videoları", title: "YouTube / Eğitim videoları" },
        { value: "Ürün tanıtım çekimleri", title: "Ürün tanıtım çekimleri" },
        { value: "Hepsi bir arada", title: "Hepsi bir arada" },
      ],
    },
    {
      key: "budget",
      title: "Bütçe Aralığı",
      subtitle: "Bu proje için düşündüğünüz bütçe nedir?",
      options: [
        { value: "20.000₺ – 40.000₺", title: "20.000₺ – 40.000₺" },
        { value: "40.000₺ – 75.000₺", title: "40.000₺ – 75.000₺" },
        { value: "75.000₺ ve üzeri", title: "75.000₺ ve üzeri" },
        { value: "Henüz bir bütçe belirlemedim", title: "Henüz bir bütçe belirlemedim" },
      ],
    },
    {
      key: "experience",
      title: "İçerik Deneyiminiz",
      subtitle: "Daha önce içerik ürettiniz mi?",
      options: [
        {
          value: "Evet, düzenli üretiyorum ama kaliteden memnun değilim",
          title: "Evet, düzenli üretiyorum ama kaliteden memnun değilim",
          description: "Profesyonel ortamla seviye atlayalım",
        },
        {
          value: "Birkaç kez denedim ama sürdüremedim",
          title: "Birkaç kez denedim ama sürdüremedim",
          description: "Doğru sistemle sürdürülebilir hale getirelim",
        },
        {
          value: "Hayır, sıfırdan başlayacağım",
          title: "Hayır, sıfırdan başlayacağım",
          description: "Sizi A'dan Z'ye hazırlayalım",
        },
      ],
    },
    {
      key: "editing",
      title: "Kurgu (Montaj) İhtiyacı",
      subtitle:
        "Videolarınızı çektikten sonra, profesyonel kurgusunu da üstlenmemizi ister misiniz?",
      options: [
        {
          value: "Evet, kurgu desteği de almak isterim",
          title: "Evet, kurgu desteği de almak isterim",
          description: "Çekim sonrası tüm düzenleme ve efektleri biz yapalım",
        },
        {
          value: "Hayır, sadece stüdyo kurulumu yeterli",
          title: "Hayır, sadece stüdyo kurulumu yeterli",
          description: "Kurguyu ben veya kendi ekibim yapacak",
        },
      ],
    },
  ],
  contact: {
    title: "Harika! Son bir adım...",
    subtitle:
      "Size özel stüdyo planınızı oluşturabilmemiz için iletişim bilgilerinizi girin ve takvime geçin.",
    submitLabel: "Randevu Oluştur →",
  },
  submit: {
    subject: (a) => `Yeni Stüdyo Kurulum Talebi: ${a.name}`,
    fromName: "Fennix Medya Stüdyo Wizard",
    mapPayload: (a) => ({
      "Ad Soyad": a.name,
      "E-posta": a.email,
      "Telefon": a.phone,
      "Mekan": a.location,
      "Kullanım Amacı": a.purpose,
      "Bütçe Aralığı": a.budget,
      "Deneyim": a.experience,
      "Kurgu İhtiyacı": a.editing,
    }),
  },
  cal: { link: "semihhasanoglu/15min" },
};
