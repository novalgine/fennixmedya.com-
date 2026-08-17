/**
 * Birebir çalışılan gerçek markalar (2025–2026).
 * Sayı iddiası yerine listenin kendisi kanıttır — bu yüzden hepsi isimle.
 *
 * NOT: Şu an hiçbir bileşen bu dosyayı import etmiyor (ClientMarquee kendi düz
 * listesini taşıyor). Dosya, müşteri kaydı olarak bilinçli tutuluyor — silme.
 */
export interface ClientGroup {
  sector: string;
  clients: { name: string; note?: string }[];
}

export const clientGroups: ClientGroup[] = [
  {
    sector: "Tiyatro & Sanat",
    clients: [
      { name: "Afife Tiyatro Oyunu", note: "Ocak 2026'dan beri sürüyor" },
      { name: "Zuhal", note: "Edinburgh Festivali'ne katılmaya hak kazandı — Öykü Su Okur" },
    ],
  },
  {
    sector: "Sağlık & Medikal",
    clients: [
      { name: "Vethouse Pet Sağlık Merkezi", note: "5 aydır sürüyor" },
      { name: "Petadress Veteriner Kliniği", note: "Tanıtım filmi" },
      { name: "Dt. Ayzıt Umay", note: "Klinik ve ressamlık sayfası" },
    ],
  },
  {
    sector: "Eğitim & Danışmanlık",
    clients: [
      { name: "Derya Kayaalp", note: "Şan eğitmeni" },
      { name: "Mukaddes Doman", note: "Storytelling eğitmeni" },
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
    sector: "Spor & Etkinlik",
    clients: [
      { name: "Uyaran Spor Kulübü", note: "Özel çocuklara yönelik spor kulübü" },
      { name: "Ekremcan Arslandağ", note: "Düğün çekimi" },
    ],
  },
];

export const clientCount = clientGroups.reduce((n, g) => n + g.clients.length, 0);
