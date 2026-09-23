# fennixmedya.com — SEO ve GEO Planı

Tarih: 22 Eylül 2026 · Sahibi: Semih Hasanoğlu · Yazan: Claude (site oturumu)
Bu dosya `PRODUCT.md` ve `TONE.md` ile birlikte okunur. Onlar "ne" ve "nasıl konuşur"; bu dosya "arama motorlarında ve yapay zekâ cevaplarında nasıl bulunur".

---

## 1. Nerede duruyoruz (veriyle)

Search Console, son 12 ay (dışa aktarım 22 Eylül 2026):

- **504 gösterim, 17 tıklama.** Site 23 Mayıs 2026'da yayına girdi; 4 aylık.
- **Dizin:** 31 sayfadan 28'i dizinde. Sorun dizin değil, sıralama.
- **Kendi adında 4-5. sıra.** "fennix" 35 gösterim, 1 tıklama. Olması gereken: 1. sıra + sağda işletme kartı.
- **Gösterimlerin %42'si yanlış sayfaya:** kurumsal tanıtım filmi sayfası 212 gösterim, ortalama 81. sıra. Semih'in nadiren yaptığı, tek örneği olan iş. Karar: sayfa dokunulmadan kalır, yatırım yapılmaz.
- **Asıl iş görünmüyordu:** sosyal medya video sayfası yılda 3 gösterim, 31. sıra. (22 Eylül'de güçlendirildi.)
- **En iyi oran:** anahtar teslim stüdyo, 33 gösterim / 7 tıklama (%21), 5. sıra. Karar: şimdilik dursun.
- **1. sayfada sıkışan yazılar (7-9. sıra):** ilk 3 saniye kuralı, kamera karşısında rahat konuşma, prodüksiyon maliyetleri, kurumsal YouTube. Az tıklanıyor → başlıklar yenilendi.
- **Dış bağlantı:** 57 (kaynak kalitesi bilinmiyor). **Google İşletme Profili: 23 Eylül 2026'da açıldı.** **Bing Webmaster:** 22 Eylül'de açıldı, henüz veri yok.
- **Hız:** telefonda 85/100; darboğaz 190 KB font. Gerçek kullanıcı verisi oluşacak trafik yok → Google bu siteyi hızdan değerlendirmiyor. Öncelik değil.

### 24 Eylül
İşletme Profili bağlantısı ve Knowledge Graph kimliği şirket şemasında · LinkedIn şirket sayfası bulundu ve bağlandı · paketler güncellendi (Next 16.3.6) · 433 lint bulgusu 0'a indi · ilk ölçüm günlüğü: `OLCUM-GUNLUGU.md` (Google/Bing 1. sıra, Perplexity 0/5).

### 23 Eylül ek yapılanlar
Vercel Analytics + GA4 + tek izleme noktası · randevu akışı testi (temiz) · sihirbaz metinleri ürün gerçeğiyle hizalandı · LinkedIn tek adres (şirket sayfası yok) · portfolyo sektör filtresi (`?sektor=`), blog kategori filtresi (`?kategori=`) · erişilebilirlik (ana içeriğe atla, odak halkası) · `sitemap-video.xml` (26 video) · her yayında otomatik IndexNow (GitHub Action) · Google/Bing'e dizine ekleme istekleri gönderildi.

### 22 Eylül'de yapılanlar (21 yayın)
Sosyal medya video sayfası asıl hizmet olarak güçlendi (işler, fiyat, referanslar, sorular) · Klinikler için sektör sayfası açıldı · YouTube hizmeti kaldırıldı (yönlendirmeyle) · `llms.txt` · robots bot adları · site haritası tarihleri · blog yazar şeması Hakkımda'ya bağlandı · 3 yazının Google başlığı/açıklaması yenilendi · IndexNow bildirimi · 11 yeni video, 7 set karesi, yeni portre · referanslar videodan birebir · ödeme/teslim/süre cümleleri gerçekle hizalandı.

---

## 2. Strateji (tek cümle)

**Dikey sosyal medya videosu için, İstanbul'da, sektör sektör bulunmak.** Geniş ve rekabetli "video prodüksiyon" yarışına girmek yerine, gerçek işlerin olduğu dar aramalarda (klinik, koç, kafe, butik marka, tiyatro) ilk sayfaya çıkmak; kendi adında 1. olmak; ChatGPT/Perplexity/Copilot cevaplarında "İstanbul'da Reels çekimi" sorulduğunda alıntılanmak.

Üç kanal, aynı içerik: **Google** (klasik arama) · **Bing** (ChatGPT ve Copilot'un kaynağı) · **Yapay zekâ cevapları** (llms.txt, şema, kısa cevap blokları, isim tutarlılığı).

---

## 3. Plan — fazlar, sahipler, ölçüm

### Faz 0 — Bu hafta · Sahibi: Semih (toplam ~2 saat, tek seferlik)

Bunlar sitede yapılabilecek her şeyden daha çok getirir; hiçbiri kod işi değil.

| # | İş | Süre | Ne getirir |
|---|---|---|---|
| 0.1 | ~~Google İşletme Profili aç~~ — **23 Eylül'de açıldı ve doğrulandı**; logo, kapak, 14 set karesi, Cal.com rezervasyon bağlantısı eklendi. Kalan: yorumlar (0.2), profil bağlantısının site şemasına eklenmesi. ~~ Kategori: "Video prodüksiyon hizmeti"; "müşteriye giden işletme" seçeneği (adres göstermek zorunlu değil). Telefon, site, çalışma saatleri. Açıklama/hizmet metinlerini Claude hazırlar. | 30 dk + doğrulama | Kendi adında sağdaki kart; "İstanbul video çekimi" haritasında görünürlük; yorumlar |
| 0.2 | **İlk 5 yorum iste:** Vet House, Boogold (Orhan), Mukaddes Gün, Sistemler.io (Berke), Doğal Köpükler (Esranur) — zaten video referans vermiş kişiler. | 15 dk | Kartın çalışması yoruma bağlı |
| 0.3 | **Bing Webmaster:** Site Haritaları → `https://fennixmedya.com/sitemap.xml`; URL İnceleme → klinik sayfasını dizine ekleme isteği. | 5 dk | ChatGPT/Copilot'un kaynağına girmek |
| 0.4 | **Search Console:** URL denetimi → `/hizmetler/sosyal-medya-video/klinikler` → dizine eklenmesini iste. Aynısını `/hizmetler/sosyal-medya-video` için. | 3 dk | Haftalar yerine günler |
| 0.5 | **Güzel Hosting panelinde `panel.fennixmedya.com` DNS kaydını sil** (WordPress kalıntısı; "My WordPress Blog" başlığıyla dizinde). E-posta aynı firmadan geçiyor: paketi kapatma, sadece o satırı sil. | 10 dk | Marka aramasında çöp sonuç gider; güvenlik |
| 0.6 | **Müşterilerden bağlantı iste:** "Sitenizde/Instagram bio'nuzda 'Video: Fennix Medya' diye bir bağlantı ekler misiniz?" Adaylar: Vet House, Boogold, Sistemler.io, Mukaddes Storytelling, ZaKofi, Uyaran, Herwish, Vavelya, Afife/Zuhal oyun sayfaları. | 20 dk mesaj | Sitenin en eksik sinyali: dışarıdan güven |
| 0.7 | **Instagram/LinkedIn bio'da site bağlantısı** doğru sayfaya gitsin (`/hizmetler/sosyal-medya-video`, ana sayfa değil). | 2 dk | Doğru sayfaya trafik |

### Faz 1 — Ekim · Sahibi: Claude (Semih onaylar) · Sektör sayfaları

Klinik sayfasının kalıbı hazır (`/hizmetler/sosyal-medya-video/klinikler`). Her sektör sayfası aynı iskelet: gerçek işler, sektöre uyarlanmış süreç, aynı fiyat, 6-7 soru, Service+Offer+Audience şeması. **Kanıtı olmayan sektöre sayfa açılmaz.**

Öncelik sırası (kanıt gücü × arama potansiyeli):

1. **Koçlar, eğitmenler, danışmanlar** — Derya Kayaalp (şan eğitmeni), Bilal Şendir (matematik koçu), Melis Ulaş (beslenme), Mukaddes Gün (storytelling). Hedef aramalar: "koçlar için video", "eğitmenler için reels", "danışman sosyal medya videosu". Semih "dursun" dedi (22 Eylül); o açınca başlar.
2. **Butik markalar ve e-ticaret** — Herwish Home, Vavelya Home, Boogold, Doğal Köpükler. "ürün videosu çekimi İstanbul", "butik marka reels".
3. **Kafe ve yeme-içme** — ZaKofi. Tek iş; ikinci kafe gelince açılır.
4. **Tiyatro ve sahne** — Afife, Zuhal. "tiyatro teaser çekimi", "oyun tanıtım videosu". Dar ama rakipsiz.

Her sayfa açıldığında: sosyal medya sayfasındaki "Sizin İşiniz İçin" bloğuna kart, menüye satır, `llms.txt`'ye satır, IndexNow bildirimi, Search Console'da dizine ekleme isteği (Semih).

### Faz 2 — Ekim'den itibaren sürekli · İçerik ritmi · Sahibi: birlikte

**Ayda 2 yeni yazı, yeni üslupla** (TONE.md). Eski 18 yazıya dokunulmaz (karar). Her yeni yazı:
- Bir sektör sayfasını veya sosyal medya sayfasını besler (iç bağlantı).
- Başta 2-3 cümlelik **kısa cevap** (yapay zekâ cevaplarına alıntılanacak biçimde: kim, ne, nerede, kaça).
- Gerçek bir işe dayanır; uydurma rakam yok; "civarı" yok.
- Yayın sonrası IndexNow + dizine ekleme isteği.

Konu listesi (hedef arama → yazı):

| Hedef arama | Yazı | Beslediği sayfa |
|---|---|---|
| diş hekimi reels çekimi | Bir diş hekimiyle üç ayda ne çektik (Ayzıt Umay, Ankara) | Klinikler |
| veteriner kliniği instagram video | Veteriner kliniğinde çekim günü nasıl geçer (Vet House, 6 ay) | Klinikler |
| reels çekimi istanbul fiyat | Reels çekimi İstanbul'da kaça mal olur — kendi fiyatımla | Sosyal medya |
| kamera karşısında donmak | Kamera açılınca donan müşteriye sette ne yapıyorum | Sosyal medya |
| ayda kaç video paylaşmalı | Ayda 8 video neden yetiyor (ve neden 30 gerekmiyor) | Sosyal medya |
| kafe reels çekimi | Bir kafede iki saatte üç video (ZaKofi) | Kafe (açılınca) |
| koçlar için video içerik | Koçların kamera sorunu: ezber değil, sohbet (Bilal, Derya) | Koçlar (açılınca) |
| tiyatro oyunu tanıtım videosu | Afife: üç sezon, üç teaser | Tiyatro (açılınca) |
| otizmli çocuklar spor videosu | Uyaran: hassas konuda nasıl çekilir | Sosyal medya |
| çanta ürün videosu çekimi | Herwish: kutu açılışından bebeğe, ürün videosu nasıl kurulur | Butik (açılınca) |

Ocak 2027'de "(2026)" başlıklı yazılar gözden geçirilir (adresler değişmez, içerik ve yıl güncellenir).

### Faz 3 — Sürekli · GEO (yapay zekâ cevapları) · Sahibi: Claude

- **`llms.txt` bakımı:** her yeni sayfa/yazıda güncellenir. Yılda bir tam okuma.
- **İsim ve bilgi tutarlılığı:** Fennix Medya / Semih Hasanoğlu / İstanbul / telefon — sitede, İşletme Profili'nde, Instagram'da, LinkedIn'de birebir aynı. (Yapay zekâ modelleri tutarsız kayıtları birleştiremiyor.)
- **Şema:** her yeni sayfada Service/FAQPage; her yazıda BlogPosting → `#person`. Yeni referans videoları eklenince VideoObject.
- **Kısa cevap blokları:** yeni yazılarda standart. Eski yazılara dokunulmaz.
- **Aylık ölçüm (Claude yapar; kayıt `OLCUM-GUNLUGU.md`):** ChatGPT, Perplexity ve Copilot'a aynı 5 soru sorulur, cevaplarda site geçiyor mu kaydedilir: "İstanbul'da Reels çekimi yapan biri", "diş hekimi için sosyal medya videosu İstanbul", "kamera karşısında rahat konuşma teknikleri", "Fennix Medya kimdir", "İstanbul kliniğe video çekimi fiyat". Bing Webmaster → AI Performance sekmesi de aylık okunur.

### Faz 4 — Düşük öncelik · Teknik bakım

- ~~IndexNow otomasyonu~~ — 23 Eylül'de GitHub Action ile kuruldu (`.github/workflows/indexnow.yml`), gizli anahtar gerekmedi.
- **Hız:** ancak gerçek kullanıcı verisi oluşunca (Search Console → Önemli Web Verileri) ele alınır. O gün tek konu: Inter fontunu sistem fontuyla değiştirmek (tasarım kararı).
- ~~Video sitemap~~ — 23 Eylül'de `araclar/video-sitemap.mjs` ile kuruldu; `sitemap-video.xml` robots'ta ve Search Console/Bing'e gönderildi.
- **Lint borcu (739):** SEO'yu etkilemiyor; ayrı bir bakım turu.

---

## 4. Ne yapmayacağız (bilinçli)

- Kurumsal tanıtım filmi için sıralama kovalamak — kanıt yok, istek yok.
- Eski blog yazılarının dilini değiştirmek — karar: kalsın, yeni üslup yenilerde.
- Hız optimizasyonuna vakit harcamak — trafik yokken ölçülemiyor.
- Bağlantı satın almak, dizin sitelerine toplu kayıt — risk, sıfır güven.
- Yapay zekâyla toplu yazı üretmek — sitenin tek sermayesi dürüstlük ve gerçek iş.
- Yuvarlak rakam, kanıtsız iddia, "civarı" — yasak (PRODUCT.md).

---

## 5. Ölçüm takvimi

**Her 4 haftada bir** Semih Search Console'dan üç dışa aktarımı alır (Sorgular — tıklama açık, Sayfalar, Dizine ekleme) + Bing'den Arama Performansı ve AI Performance ekran görüntüsü. Claude karşılaştırır.

İzlenecekler (garanti değil, yön):

| Gösterge | 22 Eylül 2026 | Bakılacak |
|---|---|---|
| "fennix" aramasında sıra | 4,7 | 1'e iniyor mu (İşletme Profili sonrası) |
| Sosyal medya sayfası gösterim / ay | ~0 | artıyor mu, hangi aramalarla |
| Klinik sayfası | yeni | ilk gösterimler hangi aramalarda |
| 1. sayfadaki 3 yazının tıklanma oranı | %0 | başlık değişikliği tıklatıyor mu |
| Toplam gösterim / ay | ~40 | eğilim |
| Dış bağlantı | 57 | müşteri sitelerinden yeni bağlantı geldi mi |
| Yapay zekâ cevaplarında geçme | ölçülmedi | aylık 5 soru testi |

İlk anlamlı okuma: **20 Ekim 2026**. İkinci: 17 Kasım. Kararlar (hangi sektör sayfası, hangi yazı) bu okumalara göre güncellenir.

---

## 6. Sonraki oturumda söylenecek tek cümleler

- "Koçlar sayfasını aç." → Faz 1.1
- "İşletme Profili metinlerini hazırla." → Faz 0.1
- "Search Console dışa aktarımlarını bıraktım, karşılaştır." → Faz 5
- "Şu konuda yazı yaz: …" → Faz 2 (konu listesinden veya yeni)
- "Yeni referans videosu var, ekle." → şema + referans kartı
- "Yapay zekâ testi yap." → Faz 3 aylık ölçüm
