# fennixmedya.com

Semih Hasanoğlu'nun video prodüksiyon sitesi. Next.js 16 (App Router), React 19, TypeScript, Tailwind v3. Vercel'de barınıyor, `main`'e her push otomatik deploy tetikliyor.

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # derleme + sitemap üretimi
```

`.env.local` gerekli iki değişken: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, `INDEXNOW_TRIGGER_SECRET`. İkisi de Vercel'in üç ortamında kurulu.

## Metin yazmadan önce

**`TONE.md` bağlayıcıdır.** Kullanıcıya görünen her Türkçe metin — başlık, buton, form etiketi, hata mesajı, meta açıklaması, `alt` metni — oradaki sözleşmeye uyar. Kısa hâli: marka **ben** der, okuyucuya **siz** der, "biz" hiç kullanılmaz; yasaklı terim tablosuna bakılır; doğrulanmamış sayı ve uydurma müşteri alıntısı yazılmaz. Müşteri sözleri birebir kalır, tona uydurulmaz.

`AGENTS.md` bunu yapay zekâ ajanları için tekrarlar.

## Bilinmesi gerekenler

- **`vercel.json` silinmemeli.** Vercel projesi eski siteden kalma "Vite" preset'iyle kurulu; içindeki `{"framework":"nextjs"}` onu eziyor. Silinirse deploy'lar sessizce bozulur.
- **Next 16'da `images.qualities` bir izin listesi.** `next.config.ts`'de tanımlı olmayan bir `quality` değeri sessizce 75'e yuvarlanır.
- **Görsel değişip dosya adı sabit kalırsa** Vercel'in optimize edici önbelleği eski baytları servis etmeye devam eder. İçerik değiştiyse adı da değiştirin.
- **`public/googlec8a2bb1bf9a343f4.html`** Google Search Console doğrulama dosyasıdır, silinirse doğrulama düşer.
- **Uzun videolarda otomatik oynatma kapalı** (`LazyHeroVideo`'nun `autoPlay` eşiği). Açılırsa ekranın üstünde onlarca megabayt kullanıcı istemeden iner.

## Yapı

```
src/app/          rotalar; hizmet sayfaları ortak Service* bileşenlerini kullanır
src/components/   editor/TimelineHud = ana sayfanın kurgu masası zaman çizelgesi
src/data/         portfolyo, referanslar, hizmetler, fiyat — metin buradan gelir
public/videos/    portfolyo ve referans videoları + poster kareleri
public/foto/      set fotoğrafları (set-01…set-25) ve portre
```

## Geri dönüş

Yeniden tasarım tek merge commit'iyle girdi:

```bash
git revert -m 1 d75f2b928b177f02ac7ae394fe7d1e4b5089340c
```
