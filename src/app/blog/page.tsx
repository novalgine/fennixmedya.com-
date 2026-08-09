import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog: Video Prodüksiyon Rehberleri",
  description:
    "Sosyal medya videoları, kurumsal filmler ve YouTube içerik üretimi hakkında profesyonel rehberler ve ipuçları.",
  alternates: { canonical: "https://fennixmedya.com/blog" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/blog",
    title: "Blog: Video Prodüksiyon Rehberleri",
    description:
      "Sosyal medya videoları, kurumsal filmler ve YouTube içerik üretimi hakkında profesyonel rehberler ve ipuçları.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-header">
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
