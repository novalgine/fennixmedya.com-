# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Birincil:** İşini büyütmekte olan KOBİ sahibi ve kişisel marka — diş hekimi, doktor, koç,
danışman, kuyumcu, butik marka sahibi. 30–50 yaş, pazarlama uzmanı değil. Durumu ve işi:
"Instagram'da düzgün görünmem lazım ama kamera karşısında donuyorum ve bununla uğraşacak
vaktim yok." Site ona genelde telefondan, iki iş arasında bakılıyor.

**İkincil:** Tiyatro ve kültür-sanat kurumları (teaser, turne, oyun tanıtımı). Kendi çekim
düzenini kurmak isteyen içerik üreticisi (anahtar teslim stüdyo).

Kaynak: `TONE.md` → Context (onaylanmış).

## Product Purpose

İstanbul'da markalar için video çekmek ve kurgulamak; metinden teslimata kadar süreci tek
elden yürütmek. Sitenin işi tek bir şey: **15 dakikalık ücretsiz görüşme talebi almak**
(demand gen). Satış görüşmede kapanır, sitede değil.

Başarı ölçüsü, doğru müşteriden gelen görüşme talebi — hacim değil.

## Positioning

Arada temsilci veya ajans katmanı yok: metni yazan, çeken ve kurgulayan aynı kişi.
Ayırt edici mekanizma, ekipman değil **kamera önü koçluğu**: dört yıl tiyatro oyunculuğu ve
sertifikalı yaratıcı drama liderliği geçmişi, çekim anında donan kişiyi kendi doğal tonuna
getirmek için kullanılıyor. Komşu bir prodüksiyon şirketinin dürüstçe kopyalayamayacağı iddia
budur — "tek kişi" bir eksiklik değil, ürünün kendisi.

İkinci ayırt edici: fiyat sitede açık yazıyor ve çalışılmayan iş tipleri açıkça sayılıyor.

## Operating Context

- **Ritim:** Ayda iki çekim günü, günde hedef 4 Reels (3–5 arası değişir), toplam aylık 8 video.
- **Çekim günü:** Genelde öğleden sonra. Müşteriden tek beklenen, belirlenen saatte sette olmak.
- **Metin:** Sete gitmeden önce net. Semih yazar; müşteri isterse kendi yazar; ya da ana
  konulardan birlikte kurulur.
- **Teslim:** Çekim akşamı kurgu başlar, videolar bittikçe sırayla teslim edilir — ay sonu
  toplu teslim yok.
- **Ödeme:** Çekim gününün sonunda alınır.
- **Randevu:** Cal.com gömülü widget (`WizardShell`). Form gönderimleri Web3Forms üzerinden.
- **Sette kullanılan ekipman:** Sony FX30, Tamron 17–70mm, DJI RS4 Gimbal, tripod,
  Rode Wireless GO II.

## Capabilities and Constraints

**Yapılan iş (4 hizmet):** sosyal medya videosu (dikey 9:16), kurumsal tanıtım filmi (yatay
16:9), YouTube içerik üretimi (uzun format + kurgu + altyazı), anahtar teslim stüdyo (mekân
analizi, ekipman listesi, kurulum, kamera önü provası).

**Fiyat (sitede açık):** Aylık üretim 30.000 ₺'den başlar · Tam kapsam 50.000 ₺ bandı
(üretim + sosyal medya yönetimi + Meta reklam yönetimi) · Tek seferlik proje kapsama göre,
sabit fiyat verilmiyor.

**Yapılmayan iş — gelecekteki hiçbir metin bunun tersini ima etmemeli:**
- Grafik tasarım ve statik görsel (güvenilen isimlere yönlendirilir, süreç takip edilir).
- Drone çekimi pakete dahil değil; günlük ayrı kalem.
- "Bir ayda sonuç" sözü verilmez.
- Bütçesi oturmamış, ödemesi belirsiz işler alınmaz.

**Kapasite:** Tek kişilik üretim. Şu an denge durumda — site ne hacim üretmeye ne de daha sert
elemeye ayarlanacak; mevcut denge korunur, yapısal değişiklik yerine iyileştirme yapılır.
(Onay: 2026-08-17)

**Odak:** Önümüzdeki dönemde sitenin getirmesi istenen iş **aylık üretim (30.000 ₺)** koludur.
Diğer üç kol (tam kapsam, tek seferlik kurumsal proje, anahtar teslim stüdyo) durur ama
öncelik değildir. (Onay: 2026-08-17)

**Regülasyon:** Semih için özel bir rejim yok. Ancak müşterilerin bir kısmı hekim ve
Türkiye'de sağlık tanıtımı kısıtlı: klinik işlerinden söz edilirken tedavi sonucu veya hasta
kazanımı vaat edilmez, yalnızca yapılan video işi anlatılır. Formlar KVKK'ya tabi.

**Teknik:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v3, Vercel; `main`'e push
otomatik deploy. `vercel.json` silinemez (proje eski "Vite" preset'iyle kurulu, içindeki
`{"framework":"nextjs"}` onu eziyor). Detaylar `README.md`'de.

## Brand Commitments

- **İsim:** Fennix Medya. Tek kişi: Semih Hasanoğlu. İstanbul.
- **Ses:** `TONE.md` **bağlayıcıdır** ve bu dosyadan önce gelir. Kullanıcıya görünen her Türkçe
  metin — başlık, buton, form etiketi, hata mesajı, meta açıklaması, `alt` metni — ona uyar.
  Marka **ben** der, okuyucuya **siz** der, "biz" hiç kullanılmaz. Yasaklı terim tablosu
  (algı, otorite inşası, uçtan uca, premium, fark yaratmak, ajans, kıtlık ve huni rozetleri)
  geçerlidir.
- **Doğrulanmamış sayı ve uydurma müşteri alıntısı yazılmaz.** Müşteri sözleri birebir kalır,
  tona uydurulmaz.
- **Dil ve pazar:** yalnızca tr-TR / İstanbul. Şu an İngilizce veya ikinci pazar hedefi yok.
- **Okunabilirlik hedefi:** pazarlama terimi bilmeyen bir diş hekiminin ilk okuyuşta anlaması.

## Evidence on Hand

Hepsi gerçek ve elde mevcut:

- **15 portfolyo işi** video + poster karesiyle (`src/data/portfolio.ts`, `public/videos/portfolyo/`).
- **16 isimli müşteri, 5 sektör grubunda** (`src/data/clients.ts`) — sayı iddiası yerine
  listenin kendisi kanıt olarak kullanılıyor.
- **4 referans, isim ve unvanla** (`src/data/testimonials.ts`): Esranur Umurbeyli, Orhan Yardım
  (Boogold), Mukaddes Doman, Berke Derelioğlu (Sistemler.io). Sözler birebir; tona uydurulmaz.
- **25 set fotoğrafı** kontakt föy olarak (`public/foto/set-01…25`) + portre (`semih-portre-4x5.jpg`).
- **Telefon/sinematik karşılaştırma karesi** — aynı kişi, aynı gün (`src/assets/ornek-*.jpg`).
- **Hero videosu** — Semih'in kendi hesabından, sesli (`public/videos/hero-semih.mp4`).
- **18 blog yazısı** (`src/data/blog-posts.json`).
- **Stüdyo kurulum rehberi PDF'i** (`public/studyo-kurulum-rehberi.pdf`), e-posta karşılığı.
- **Sayaçlar: 500+ üretilen video, 10M+ toplam erişim, 8 sektör** — Semih'in kendi kayıtlarıyla
  doğrulanmış (onay: 2026-08-17). Korunur; büyütülmez, yuvarlanmaz.

**Elde olmayan ve uydurulmaması gerekenler:** vaka çalışması / ölçülmüş müşteri sonucu
(dönüşüm, satış, takipçi artışı) yok. Basın, ödül, sertifika görseli yok. Yukarıda sayılmayan
hiçbir müşteri, rakam veya alıntı üretilmez.

## Product Principles

1. **Kanıt iddiadan önce gelir.** Anlatmak yerine göstermek: iş kareleri, isimli müşteriler ve
   set fotoğrafları, sıfat yığınının yerini tutar.
2. **Ne yapmadığını da söyle.** Çalışılmayan iş tipleri, ödeme koşulu ve fiyat sitede açık
   durur — eleme, satıştan sonra değil önce yapılır.
3. **Ziyaretçi kamera karşısında donan kişidir, pazarlamacı değil.** Her metin ve her akış onu
   rahatlatmak için kurulur; jargon rahatsız eder.
4. **Tek kişi olmak saklanmaz.** Ölçek iddiası yerine doğrudan temas vaadi satılır.
5. **Sitenin tek görevi görüşme talebidir.** Her bölüm bu tek eyleme hizmet eder ya da
   yerini bir başkasına bırakır.

## Accessibility & Inclusion

Ürüne özel yasal bir standart tanımlanmadı. Bilinen gerçek ihtiyaçlar: içerik telefonda ve
düşük dikkatle okunuyor; okuyucu pazarlama terimi bilmiyor; hero videosu sessiz başlıyor ve
sesi kullanıcı açıyor. Uzun videolarda otomatik oynatma bilinçli olarak kapalı — ekranın
üstünde onlarca megabayt kullanıcı istemeden inmesin diye (`LazyHeroVideo` eşiği).
