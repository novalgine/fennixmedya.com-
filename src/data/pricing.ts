/** Gerçek fiyatlar — tek seferlik projeler kapsama göre değiştiği için rakamsız. */
export interface Package {
  id: string;
  name: string;
  price: string;
  unit?: string;
  includes: string[];
  featured?: boolean;
  note?: string;
}

export const packages: Package[] = [
  {
    id: "aylik",
    name: "Aylık Üretim",
    price: "30.000 ₺",
    unit: "/ ay başlangıç",
    includes: [
      "Ayda 8 video",
      "2 çekim günü",
      "Senaryo, çekim, kurgu",
      "Kamera önü koçluğu",
      "Bittikçe teslimat",
    ],
    featured: true,
  },
  {
    id: "tam",
    name: "Tam Kapsam",
    price: "50.000 ₺",
    unit: "/ ay bandı",
    includes: [
      "Aylık üretimin tamamı",
      "Sosyal medya yönetimi",
      "Meta reklam yönetimi",
    ],
  },
  {
    id: "proje",
    name: "Tek Seferlik Proje",
    price: "Projeye göre",
    includes: [
      "Lansman, teaser, açılış",
      "Etkinlik ve düğün çekimi",
      "Kurumsal tanıtım filmi",
    ],
    note: "Kapsam çok değiştiği için sabit fiyat vermiyorum — görüşmede netleştiriyoruz.",
  },
];

export const pricingNotes = [
  "Ödemeyi çekim gününün sonunda alıyorum.",
  "Drone çekimi pakete dahil değil; günlük ayrı kalem olarak fiyatlandırıyorum.",
];
