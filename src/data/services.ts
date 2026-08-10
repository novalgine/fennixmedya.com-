export interface Service {
  id: string;
  /** Künye kodu — kartlarda makine dili aksanı olarak kullanılır */
  code: string;
  title: string;
  description: string;
  /** Kart altındaki somut künye satırı: format, ritim, kapsam */
  meta: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "sosyal-medya-video",
    code: "H01",
    title: "Sosyal Medya Videosu",
    description:
      "Instagram Reels, TikTok ve Shorts için dikey videolar. Metni önceden yazarız, ayda iki çekim gününde bir aylık içeriğinizi tamamlarız.",
    meta: ["Dikey · 9:16", "Ayda 2 çekim günü", "Aylık 8 video"],
    href: "/hizmetler/sosyal-medya-video",
  },
  {
    id: "kurumsal-tanitim-filmi",
    code: "H02",
    title: "Kurumsal Tanıtım Filmi",
    description:
      "Markanızı tek bir filmde anlatan yatay prodüksiyon. Web siteniz, fuar standınız ve reklam kampanyalarınız için.",
    meta: ["Yatay · 16:9", "Tek proje", "Senaryo dahil"],
    href: "/hizmetler/kurumsal-tanitim-filmi",
  },
  {
    id: "youtube-icerik-uretimi",
    code: "H03",
    title: "YouTube İçerik Üretimi",
    description:
      "Uzun formatta anlatım videoları. Çekim, kurgu ve altyazı bende; kanalınızın düzenli yayın ritmini birlikte kurarız.",
    meta: ["Yatay · uzun format", "Kurgu + altyazı", "Düzenli yayın"],
    href: "/hizmetler/youtube-icerik-uretimi",
  },
  {
    id: "anahtar-teslim-studyo",
    code: "H04",
    title: "Anahtar Teslim Stüdyo",
    description:
      "Kendi içeriğinizi kendiniz çekmek istiyorsanız: mekân analizi, ekipman listesi, kurulum ve kamera önü provası.",
    meta: ["Tek seferlik kurulum", "Ekipman size ait", "Prova dahil"],
    href: "/hizmetler/anahtar-teslim-studyo",
  },
];
