export interface PortfolioItem {
  id: string;
  title: string;
  category: "Sosyal Medya" | "Kurumsal" | "YouTube" | "Tümü";
  format: "Dikey" | "Yatay";
  videoSrc: string;
  thumbnailSrc?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "vaveyla",
    title: "Vaveyla Home",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/vaveyla.mp4",
    thumbnailSrc: "/videos/portfolyo/vaveyla.jpg",
  },
  {
    id: "umay",
    title: "Ayzıt Umay",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/umay.mp4",
    thumbnailSrc: "/videos/portfolyo/umay.jpg",
  },
  {
    id: "boogold",
    title: "Boogold Kuyumculuk",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/boogold.mp4",
    thumbnailSrc: "/videos/portfolyo/boogold.jpg",
  },
  {
    id: "melis",
    title: "Melis Ulaş Wellness",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/melis.mp4",
    thumbnailSrc: "/videos/portfolyo/fuzul.jpg",
  },
  {
    id: "vethouse",
    title: "Vet House",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/vethouse.mp4",
    thumbnailSrc: "/videos/portfolyo/vethouse.jpg",
  },
  {
    id: "buzdagi",
    title: "Buzdağı Suları",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/buzdagi.mp4",
    thumbnailSrc: "/videos/portfolyo/buzdagi.jpg",
  },
  {
    id: "afife",
    title: "Afife Turne",
    category: "Sosyal Medya",
    format: "Dikey",
    videoSrc: "/videos/portfolyo/afife.mp4",
    thumbnailSrc: "/videos/portfolyo/afife.jpg",
  },
  {
    id: "petadress",
    title: "Petadress Tanıtım Filmi",
    category: "Kurumsal",
    format: "Yatay",
    videoSrc: "/videos/portfolyo/petadress.mp4",
    thumbnailSrc: "/videos/portfolyo/petadress.jpg",
  },
];
