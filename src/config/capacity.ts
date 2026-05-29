/**
 * KONTENJAN AYARLARI
 * 
 * Buradaki sayıları değiştirerek sitedeki tüm kontenjan bilgilerini 
 * tek bir yerden güncelleyebilirsiniz.
 */
export const CAPACITY_CONFIG = {
    TOTAL_SLOTS: 5,        // Toplam kontenjan (sabit 5 kalsın demiştik)
    OCCUPIED_SLOTS: 3,     // Şu an dolu olan yer (Burayı manuel güncelleyin)

    // Mesajlar
    CAPACITY_TEXT: "Kalan Yer:",
    FULL_TEXT: "Kontenjan Dolu",

    // Görsel Eşikler
    WARNING_THRESHOLD: 4,  // Kaçıncı dolulukta renk kırmızıya dönsün?
};
