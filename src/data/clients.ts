/**
 * Birebir çalışılan gerçek markalar (2025–2026).
 * Sayı iddiası yerine listenin kendisi kanıttır — bu yüzden hepsi isimle.
 *
 * Ana sayfadaki marka şeridi (ClientMarquee) bu listeden türetilir — tek kaynak.
 */
export interface ClientGroup {
  sector: string;
  clients: {
    name: string;
    note?: string;
    /** Ana sayfa şeridinde görünen kısa ad; yoksa name kullanılır */
    marquee?: string;
    /** Şeride girmez (ör. düğün — kişi, marka değil) */
    hidden?: boolean;
  }[];
}

export const clientGroups: ClientGroup[] = [
  {
    sector: "Tiyatro & Sanat",
    clients: [
      { name: "Afife Tiyatro Oyunu", marquee: "Afife Tiyatro", note: "Ocak 2026'dan beri sürüyor" },
      { name: "Zuhal", note: "Edinburgh Festivali'ne katılmaya hak kazandı — Öykü Su Okur" },
    ],
  },
  {
    sector: "Sağlık & Medikal",
    clients: [
      { name: "Vethouse Pet Sağlık Merkezi", marquee: "Vethouse", note: "6 aydır sürüyor" },
      { name: "Petadress Veteriner Kliniği", marquee: "Petadress", note: "Tanıtım filmi" },
      { name: "Dt. Ayzıt Umay", note: "Klinik ve ressamlık sayfası" },
    ],
  },
  {
    sector: "Eğitim & Danışmanlık",
    clients: [
      { name: "Derya Kayaalp", note: "Şan eğitmeni" },
      { name: "Mukaddes Gün", note: "Storytelling eğitmeni" },
      { name: "Bilal Şendir", note: "Matematik öğretmeni & koç" },
      { name: "Melis Ulaş Wellness", note: "Wellness eğitmeni" },
    ],
  },
  {
    sector: "E-Ticaret & Perakende",
    clients: [
      { name: "Vavelya Home", note: "Çeyiz — Filiz Kösemusul" },
      { name: "Herwish Home", note: "Çanta — Elif Oğuz" },
      { name: "Boogold Kuyumculuk", note: "Altın takı tasarımı" },
      { name: "Doğal Köpükler", note: "Doğal sabun — Esranur Umurbeyli" },
    ],
  },
  {
    sector: "Kafe & Yeme-İçme",
    clients: [{ name: "ZaKofi", note: "Fatih'te kafe" }],
  },
  {
    sector: "Spor & Etkinlik",
    clients: [
      { name: "Uyaran Spor Kulübü", note: "Özel çocuklara yönelik spor kulübü" },
      { name: "Ekremcan Arslandağ", note: "Düğün çekimi", hidden: true },
    ],
  },
];

export const clientCount = clientGroups.reduce((n, g) => n + g.clients.length, 0);

/** Şerit için düz ad listesi — sektör sırası korunur */
export const marqueeNames = clientGroups.flatMap((g) =>
  g.clients.filter((c) => !c.hidden).map((c) => c.marquee ?? c.name)
);
