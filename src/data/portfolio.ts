export interface PortfolioItem {
  id: string;
  title: string;
  category: "Sosyal Medya" | "Kurumsal" | "YouTube" | "Tümü";
  format: "Dikey" | "Yatay";
  videoSrc: string;
  thumbnailSrc?: string;
  /** Sitede yayına alındığı tarih (VideoObject şeması için) */
  uploadDate: string;
  description: string;
  /** Ana sayfa vaka bölümünde gösterilecekse doldurulur */
  caseStudy?: { sector: string; before: string; after: string };
}

export const caseStudiesFrom = (items: PortfolioItem[]) => items.filter((p) => p.caseStudy);

export const portfolioData: PortfolioItem[] = [
  {
    id: "vaveyla",
    caseStudy: { sector: "Ev Tekstili", before: "Sıradan ürün çekimleri ve amatör içerikler.", after: "Kaliteli reklam içerikleriyle artan satışlar ve premium marka algısı." },
    uploadDate: "2026-05-29",
    description: "Vaveyla Home mobilya markası için çekilen dikey sosyal medya tanıtım videosu.",
    title: "Vaveyla Home",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/vaveyla.mp4",
    thumbnailSrc: "/videos/portfolyo/vaveyla.jpg",
  },
  {
    id: "umay",
    caseStudy: { sector: "Diş Hekimi ve Ressam", before: "Sıradan klinik görselleri ve düşük etkileşim.", after: "Sanatsal ve güvenilir bir kişisel marka oluşumu." },
    uploadDate: "2026-05-29",
    description: "Ayzıt Umay için çekilen dikey sosyal medya marka videosu.",
    title: "Ayzıt Umay",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/umay.mp4",
    thumbnailSrc: "/videos/portfolyo/umay.jpg",
  },
  {
    id: "boogold",
    caseStudy: { sector: "Kişiye Özel Altın Takı", before: "Bütçesi kısıtlı bir marka algısı yaratan sıradan içerikler.", after: "Premium müşteri kitlesinin dikkatini çeken ve marka otoritesini anında dönüştüren içerikler." },
    uploadDate: "2026-05-29",
    description: "Boogold Kuyumculuk için çekilen dikey sosyal medya tanıtım videosu.",
    title: "Boogold Kuyumculuk",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/boogold.mp4",
    thumbnailSrc: "/videos/portfolyo/boogold.jpg",
  },
  {
    id: "melis",
    caseStudy: { sector: "Duygusal Beslenme Uzmanı · Wellness", before: "Telefonla çekilmiş amatör içerikler.", after: "Görsel hikaye anlatıcılığı ve otoriteyi birleştiren otantik içerikler." },
    uploadDate: "2026-05-29",
    description: "Melis Ulaş Wellness için çekilen dikey sosyal medya içerik videosu.",
    title: "Melis Ulaş Wellness",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/melis.mp4",
    thumbnailSrc: "/videos/portfolyo/melis.jpg",
  },
  {
    id: "vethouse",
    uploadDate: "2026-05-29",
    description: "Vet House veteriner kliniği için çekilen dikey sosyal medya videosu.",
    title: "Vet House",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/vethouse.mp4",
    thumbnailSrc: "/videos/portfolyo/vethouse.jpg",
  },
  {
    id: "buzdagi",
    uploadDate: "2026-05-29",
    description: "Buzdağı Suları için çekilen dikey sosyal medya tanıtım videosu.",
    title: "Buzdağı Suları",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/buzdagi.mp4",
    thumbnailSrc: "/videos/portfolyo/buzdagi.jpg",
  },
  {
    id: "afife",
    uploadDate: "2026-05-29",
    description: "Afife Turne için çekilen dikey sosyal medya etkinlik videosu.",
    title: "Afife Turne",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/afife.mp4",
    thumbnailSrc: "/videos/portfolyo/afife.jpg",
  },
  {
    id: "petadress",
    uploadDate: "2026-05-29",
    description: "Petadress için çekilen yatay formatta kurumsal tanıtım filmi.",
    title: "Petadress Tanıtım Filmi",
    category: "Kurumsal",
    format: "Yatay",
    videoSrc: "/videos/portfolyo/petadress.mp4",
    thumbnailSrc: "/videos/portfolyo/petadress.jpg",
  },
];

export const caseStudies = caseStudiesFrom(portfolioData);
