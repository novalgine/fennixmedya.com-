import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Fennix Medya - Video Prodüksiyon Rehberleri",
  description:
    "Sosyal medya videoları, kurumsal filmler ve YouTube içerik üretimi hakkında profesyonel rehberler ve ipuçları.",
  alternates: { canonical: "https://fennixmedya.com/blog" },
};

// Blog post metadata — in a real setup this would come from MDX/CMS
const blogPosts = [
  {
    slug: "sosyal-medya-videosu-nasil-planlanir",
    title: "Sosyal Medya Videosu Nasıl Planlanır? (2026 Rehberi)",
    excerpt:
      "İster Reels, ister TikTok, ister Shorts — profesyonel bir sosyal medya videosu planlamanın tüm adımlarını bu rehberde bulabilirsiniz.",
    date: "2026-05-20",
    readTime: "2-3 dk",
    category: "Sosyal Medya",
  },
  {
    slug: "iphone-vs-profesyonel-kamera",
    title: "iPhone ile mi Profesyonel Kamera ile mi Çekilmeli?",
    excerpt:
      "Markanız için iPhone yeterli mi yoksa profesyonel ekipmana mı ihtiyacınız var? Karşılaştırmalı analiz.",
    date: "2026-05-18",
    readTime: "2-3 dk",
    category: "Ekipman",
  },
  {
    slug: "doktorlar-icin-video-icerik-rehberi",
    title: "Doktorlar İçin Sosyal Medya Video İçerik Rehberi",
    excerpt:
      "Sağlık sektöründe video içerikle hasta güveni inşa etmenin yolları. Etik kurallar ve içerik fikirleri.",
    date: "2026-05-15",
    readTime: "2-3 dk",
  },
  {
    slug: 'sirketler-icin-video-pazarlama-stratejisi-2026',
    title: 'Şirketler İçin Video Pazarlama Stratejisi (2026)',
    excerpt: '2026 yılında B2B ve B2C şirketlerin kullanması gereken en etkili video pazarlama stratejileri ve trendleri.',
    date: '2026-05-28',
    readTime: '4-5 dk',
    category: 'Strateji',
  },
  {
    slug: 'ugc-vs-profesyonel-cekim',
    title: 'Kullanıcı Tarafından Oluşturulan İçerik (UGC) vs Profesyonel Çekim',
    excerpt: 'Hangi durumda UGC (User Generated Content), hangi durumda sinematik profesyonel çekim kullanılmalı? Markalar için karşılaştırmalı rehber.',
    date: '2026-05-26',
    readTime: '4-5 dk',
    category: 'Prodüksiyon',
  },
  {
    slug: 'saglik-turizminde-video-kullanimi',
    title: 'Sağlık Turizminde Videonun Gücü: Yabancı Hasta Nasıl Bulunur?',
    excerpt: 'Türkiye\'deki klinikler ve hastaneler için yurtdışından hasta getiren güven odaklı video pazarlama stratejileri.',
    date: '2026-05-24',
    readTime: '4-5 dk',
    category: 'Sektörel',
  },
  {
    slug: 'gayrimenkul-satislarinda-video-produksiyon',
    title: 'Gayrimenkul Satışlarında Video Prodüksiyonun Gücü',
    excerpt: 'Lüks konut ve ticari gayrimenkul satışlarında video içeriklerle satış sürecini hızlandırma rehberi.',
    date: '2026-05-22',
    readTime: '4-5 dk',
    category: 'Sektörel',
  },
  {
    slug: 'iyi-bir-kurumsal-tanitim-filmi-nasil-olmali',
    title: 'İyi Bir Kurumsal Tanıtım Filmi Nasıl Olmalı?',
    excerpt: 'B2B markalar için sıkıcı olmayan, akılda kalıcı ve vizyoner bir kurumsal tanıtım filmi hazırlamanın sırları.',
    date: '2026-05-20',
    readTime: '4-5 dk',
    category: 'Kurumsal Film',
  },
  {
    slug: 'reels-tiktok-algoritmasi-2026',
    title: 'Reels ve TikTok Algoritması (2026 Güncellemesi)',
    excerpt: 'Sosyal medya algoritmaları 2026 yılında nasıl çalışıyor? Etkileşimi ve organik erişimi artırmanın yolları.',
    date: '2026-05-18',
    readTime: '4-5 dk',
    category: 'Sosyal Medya',
  },
  {
    slug: 'high-ticket-satislar-icin-video-funnel',
    title: 'High-Ticket (Yüksek Fiyatlı) Satışlar İçin Video Funnel',
    excerpt: 'Premium hizmetler veya yüksek fiyatlı ürünler satanlar için müşteri itirazlarını kıran video huni (funnel) mimarisi.',
    date: '2026-05-16',
    readTime: '4-5 dk',
    category: 'Strateji',
  },
  {
    slug: 'videolarda-ilk-3-saniye-kurali-hook',
    title: 'Videolarda İlk 3 Saniye Kuralı (Hook Stratejileri)',
    excerpt: 'İzleyicinin dikkatini anında yakalamak ve kaydırmasını (scroll) durdurmak için etkili kanca (hook) taktikleri.',
    date: '2026-05-14',
    readTime: '4-5 dk',
    category: 'İçerik',
  },
  {
    slug: 'kurumsal-youtube-kanali-acmak-isteyenlere-tavsiyeler',
    title: 'Kurumsal YouTube Kanalı Açmak İsteyenlere Tavsiyeler',
    excerpt: 'Şirketiniz için sıfırdan başarılı, izlenen ve müşteri getiren bir YouTube kanalı oluşturma rehberi.',
    date: '2026-05-12',
    readTime: '4-5 dk',
    category: 'YouTube',
  },
  {
    slug: 'kamera-karsisinda-rahat-konusma-teknikleri',
    title: 'Kamera Karşısında Rahat Konuşma Teknikleri',
    excerpt: 'CEO\'lar, uzmanlar ve marka yüzleri için kamera önü gerginliğini atıp doğal ve otoriter görünme ipuçları.',
    date: '2026-05-10',
    readTime: '4-5 dk',
    category: 'Kamera Önü',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">Blog</span>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6">
            Video Prodüksiyon <span className="text-gradient-gold">Rehberleri</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Markanızı büyütecek video stratejileri, ekipman karşılaştırmaları ve sektörel ipuçları.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group bg-muted/20 border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Devamını Oku <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
