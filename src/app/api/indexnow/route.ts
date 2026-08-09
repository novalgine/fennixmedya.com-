import { NextResponse } from 'next/server';
import { blogPosts, SITE_URL } from '@/data/blog-posts';

const INDEXNOW_KEY = '2345e2adf3aa3158a2c626aaaeaae24e';

const STATIC_PATHS = [
  '',
  '/hakkimizda',
  '/portfolyo',
  '/blog',
  '/hizmetler',
  '/hizmetler/sosyal-medya-video',
  '/hizmetler/kurumsal-tanitim-filmi',
  '/hizmetler/youtube-icerik-uretimi',
  '/hizmetler/anahtar-teslim-studyo',
];

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get('key');
  const secret = process.env.INDEXNOW_TRIGGER_SECRET;
  // Secret tanımlı değilse de kapalı kalır — endpoint spam'e açılmasın
  if (!secret || key !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const urlList = [
    ...STATIC_PATHS.map((p) => SITE_URL + p),
    ...blogPosts.map((p) => `${SITE_URL}/blog/${p.slug}`),
  ];

  const results: { url: string; status: string; error?: string }[] = [];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'fennixmedya.com',
        key: INDEXNOW_KEY,
        keyLocation: `https://fennixmedya.com/${INDEXNOW_KEY}.txt`,
        urlList,
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

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    totalUrls: urlList.length,
    results,
  });
}
