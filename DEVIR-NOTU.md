# Devir Notu — fennixmedya.com

Bu dosya, siteyi hiç görmemiş bir yazılımcının ilk bir saatte anlaması için yazıldı. Önce sitenin ne olduğu, sonra nasıl çalıştığı, sonra hangi kararların neden alındığı. Ayrıntılar başka dosyalarda; burada yalnızca yol haritası var.

## 1. Bu site nedir

Fennix Medya, İstanbul'da tek kişilik bir video prodüksiyon işi: Semih Hasanoğlu, markalar için dikey sosyal medya videosu (Instagram Reels, TikTok, Shorts) çeker ve kurgular. Sitenin tek görevi **15 dakikalık ücretsiz görüşme talebi almak**. Satış görüşmede olur, sitede değil.

Site bir tanıtım sitesidir: ana sayfa, üç hizmet sayfası (sosyal medya videosu — asıl iş; kurumsal tanıtım filmi; anahtar teslim stüdyo), sosyal medya altında bir sektör sayfası (klinikler), portfolyo (26 video), hakkımda, 18 yazılık blog, yasal sayfalar. Ziyaretçi "Görüşme Ayarlayalım" düğmesine basınca üç soruluk bir sihirbaz açılır, iletişim bilgisi alınır, ardından Cal.com takvimi gelir.

## 2. Teknik özet (bir paragraf)

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3. Veritabanı yok, sunucu tarafı mantık yok; tüm içerik `src/data/` altındaki dosyalarda. GitHub'da `main` dalına gönderilen her değişiklik Vercel tarafından otomatik yayınlanır (1-3 dakika). Form gönderimleri Web3Forms'a gider (Semih'e e-posta), randevu Cal.com gömülü takvimiyle alınır. Ölçüm: Vercel Analytics (çerezsiz), GA4 ve Meta Pixel (ikisi çerez onayına bağlı) — hepsi `src/lib/track.ts` üzerinden.

## 3. Önce okunacak dört dosya (sırayla)

1. **`PRODUCT.md`** — İşin gerçeği: kim için, ne yapılır, ne yapılmaz, fiyat, hangi rakam doğrulanmış, hangi müşteri kim. **Sitedeki hiçbir metin buna aykırı olamaz.** Yeni bir şey yazmadan önce bu okunur.
2. **`TONE.md`** — Sitenin sesi. "Ben" der, okuyucuya "siz" der, "biz" yok. Yasaklı kelime listesi var (algı, otorite, premium, ajans, uçtan uca…). Müşteri sözleri birebir kalır, düzeltilmez. Bağlayıcıdır.
3. **`README.md`** — Çalıştırma, yapı, geri dönüş. Kısa.
4. **`SEO-GEO-PLAN.md`** ve **`OLCUM-GUNLUGU.md`** — Arama görünürlüğü planı ve ölçüm kayıtları. Ne denendi, ne bekleniyor.

## 4. İçerik nerede değişir

| Değiştirmek istediğin | Dosya |
|---|---|
| Portfolyo videoları, sırası, sektörü | `src/data/portfolio.ts` (video dosyaları `public/videos/portfolyo/`, 608×1080 mp4 + jpg kapak) |
| Ana sayfadaki film şeridinin sırası | aynı dosyada `filmStripOrder` |
| Müşteri listesi ve marka şeridi | `src/data/clients.ts` (şerit buradan türer) |
| Fiyatlar ve paket içerikleri | `src/data/pricing.ts` (siteye tek yerden dağılır) |
| Hizmet kartları | `src/data/services.ts` |
| Müşteri sözleri | `src/data/testimonials.ts` (videolardan birebir; değiştirilmez) |
| Blog yazıları | `src/app/blog/<slug>/page.tsx` + başlık/açıklama/kategori `src/data/blog-posts.json` |
| Set fotoğrafları (kontakt föy) | `public/foto/set-NN.jpg` + sıra `src/components/SetWall.tsx` |
| Sihirbaz soruları | `src/components/wizard/funnelConfig.ts`, `studioConfig.ts` |
| Yapay zekâlar için site özeti | `public/llms.txt` |
| Menü, alt bilgi | `src/components/SiteHeader.tsx`, `Footer.tsx` |
| Şirket/kişi şeması (Google'ın anladığı veri) | `src/app/layout.tsx` (Organization, WebSite), `src/app/hakkimizda/page.tsx` (Person) |

## 5. Otomatik olan şeyler (dokunmadan çalışır)

- **Yayın:** `main`'e push → Vercel. Geri almak için Vercel panelinde önceki yayına "Instant Rollback".
- **Site haritaları:** her derlemede `next-sitemap` `sitemap.xml`'i, `araclar/video-sitemap.mjs` `sitemap-video.xml`'i üretir. Blog tarihleri `blog-posts.json`'dan, statik sayfa tarihleri `next-sitemap.config.js`'ten gelir; içerik değişince tarih elle güncellenir.
- **IndexNow:** her push'tan 3 dakika sonra GitHub Action (`.github/workflows/indexnow.yml`) site haritasındaki adresleri Bing/Yandex'e bildirir. Gizli anahtar yok; IndexNow anahtarı zaten herkese açık bir dosya.
- **Tasarım denetçisi:** `.claude/` altındaki impeccable kurulumu yalnızca yapay zekâ asistanı içindir; site kodunun parçası değildir, silinse site etkilenmez.

## 6. Dış hesaplar (hepsi Semih'in — şifre kimseye verilmez)

Kural: hiçbir hesabın şifresi paylaşılmaz. Her hesap "kullanıcı davet et / erişim ver" sunar; yazılımcıya gereken hesapta gereken kadar yetki verilir, iş bitince kaldırılır.

| Hesap | Ne için | Yazılımcıya erişim nasıl verilir |
|---|---|---|
| **Vercel** | Barındırma, otomatik yayın, geri alma (Instant Rollback), ortam değişkenleri, Analytics | Proje → Settings → Members |
| **GitHub** (`novalgine/fennixmedya.com-`) | Kod; `main`'e push = yayın | Repo → Settings → Collaborators |
| **Google hesabı** (semihhasanoglu1@gmail.com) | Search Console (`https://fennixmedya.com/`), Google İşletme Profili, GA4 (`G-VY99XYWRS0`) | Her üründe ayrı "kullanıcı ekle"; Google şifresi asla |
| **Bing Webmaster** | Bing/Copilot/ChatGPT arama görünürlüğü, IndexNow | Google hesabıyla giriş; Kullanıcı yönetimi |
| **Cal.com** (`semihhasanoglu/15min`) | Randevu takvimi (sihirbazın son adımı) | Gerekmez; bağlantı herkese açık |
| **Web3Forms** | Form gönderimlerini e-postaya çevirir; anahtar Vercel'de `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Gerekmez; anahtar Vercel'den okunur |
| **Meta (Facebook)** | Pixel (`37456966063894509`), eski Facebook sayfası | Business Suite → Kişiler |
| **Güzel Hosting** | **Alan adı, DNS ve e-posta** — en kritik hesap. `panel` alt alan adı eski WordPress kalıntısı, silinecek | DNS değişikliği gerekirse Semih kendisi yapar |
| **Instagram, LinkedIn** (`/company/fennix-medya` + kişisel profil) | Sosyal profiller; site şemasında `sameAs` | Gerekmez |

Bu iki günlük çalışmada da yöntem buydu: Google ve Bing'e Semih kendi giriş yaptı, asistan yalnızca ekranda tıkladı; hiçbir şifre görülmedi, kaydedilmedi.

## 7. Bilinçli kararlar — "neden böyle?" sorularının cevabı

- **Kurumsal tanıtım filmi sayfası olduğu gibi duruyor.** Semih bu işi nadiren yapıyor, tek örneği var; sayfaya yatırım yapılmıyor ama kaldırılmadı da (kararı: Eylül 2026).
- **YouTube içerik üretimi sayfası kaldırıldı** ve sosyal medya sayfasına yönlendirildi: hiç yapılmamış bir işti. Geri eklenmez.
- **Eski 18 blog yazısının dili değiştirilmedi.** Yanlış bilgiler düzeltildi; ton eski kaldı. Yeni üslup yalnızca yeni yazılarda.
- **Yuvarlak rakam yazılmaz.** "Civarı", "yaklaşık 20" yok; sayı ya kesin ya hiç.
- **Ölçülmüş müşteri sonucu yok** (dönüşüm, takipçi artışı). Uydurulmaz. Kanıt = gerçek işler, isimli müşteriler, birebir alıntılar.
- **Sayaçlar (500+ video, 10M+ erişim, 9 sektör)** Semih'in kendi kayıtlarıyla doğrulandı; büyütülmez.
- **Font ağırlığı (190 KB) bilerek bırakıldı**; gerçek ziyaretçi verisi gelmeden hız işine girilmedi.
- **Sıradaki işler** (`SEO-GEO-PLAN.md`): sektör sayfaları (koçlar, butik markalar), ayda iki yeni yazı, ölçüm 20 Ekim 2026.

## 8. Değişiklik yapma disiplini

Yerelde `npm run dev` ile bak, `npm run build` ile derle (tip kontrolü ve site haritaları dahil), `npx eslint src` temiz olsun (Eylül 2026'da sıfırlandı). Metin değişikliğinde PRODUCT.md ve TONE.md'ye bak. Yayına almadan önce Semih'e göster; yayın sonrası canlıda doğrula. Video eklerken 608×1080, ~1 Mbps, `faststart`; fotoğraf eklerken aynı adla üzerine yazma (CDN eski dosyayı gösterir), yeni ad ver.
