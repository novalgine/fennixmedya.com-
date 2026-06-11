import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '2345e2adf3aa3158a2c626aaaeaae24e';

const ALL_URLS = [
  'https://fennixmedya.com',
  'https://fennixmedya.com/hakkimizda',
  'https://fennixmedya.com/portfolyo',
  'https://fennixmedya.com/blog',
  'https://fennixmedya.com/hizmetler/sosyal-medya-video',
  'https://fennixmedya.com/hizmetler/kurumsal-tanitim-filmi',
  'https://fennixmedya.com/hizmetler/youtube-icerik-uretimi',
  'https://fennixmedya.com/hizmetler/anahtar-teslim-studyo',
  'https://fennixmedya.com/blog/doktorlar-icin-video-icerik-rehberi',
  'https://fennixmedya.com/blog/gayrimenkul-satislarinda-video-produksiyon',
  'https://fennixmedya.com/blog/high-ticket-satislar-icin-video-funnel',
  'https://fennixmedya.com/blog/iphone-vs-profesyonel-kamera',
  'https://fennixmedya.com/blog/iyi-bir-kurumsal-tanitim-filmi-nasil-olmali',
  'https://fennixmedya.com/blog/kamera-karsisinda-rahat-konusma-teknikleri',
  'https://fennixmedya.com/blog/kurumsal-youtube-kanali-acmak-isteyenlere-tavsiyeler',
  'https://fennixmedya.com/blog/reels-tiktok-algoritmasi-2026',
  'https://fennixmedya.com/blog/saglik-turizminde-video-kullanimi',
  'https://fennixmedya.com/blog/sirketler-icin-video-pazarlama-stratejisi-2026',
  'https://fennixmedya.com/blog/sosyal-medya-videosu-nasil-planlanir',
  'https://fennixmedya.com/blog/ugc-vs-profesyonel-cekim',
  'https://fennixmedya.com/blog/videolarda-ilk-3-saniye-kurali-hook',
];

export async function GET() {
  const results: { url: string; status: string; error?: string }[] = [];

  // Submit to IndexNow (Bing + Yandex)
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'fennixmedya.com',
        key: INDEXNOW_KEY,
        keyLocation: `https://fennixmedya.com/${INDEXNOW_KEY}.txt`,
        urlList: ALL_URLS,
      }),
    });

    results.push({
      url: 'IndexNow Batch Submit',
      status: `${response.status} ${response.statusText}`,
    });
  } catch (error) {
    results.push({
      url: 'IndexNow Batch Submit',
      status: 'ERROR',
      error: String(error),
    });
  }

  // Ping Google sitemap
  try {
    const googlePing = await fetch(
      'https://www.google.com/ping?sitemap=https://fennixmedya.com/sitemap.xml'
    );
    results.push({
      url: 'Google Sitemap Ping',
      status: `${googlePing.status} ${googlePing.statusText}`,
    });
  } catch (error) {
    results.push({
      url: 'Google Sitemap Ping',
      status: 'ERROR',
      error: String(error),
    });
  }

  // Ping Bing sitemap
  try {
    const bingPing = await fetch(
      'https://www.bing.com/ping?sitemap=https://fennixmedya.com/sitemap.xml'
    );
    results.push({
      url: 'Bing Sitemap Ping',
      status: `${bingPing.status} ${bingPing.statusText}`,
    });
  } catch (error) {
    results.push({
      url: 'Bing Sitemap Ping',
      status: 'ERROR',
      error: String(error),
    });
  }

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    totalUrls: ALL_URLS.length,
    results,
  });
}
