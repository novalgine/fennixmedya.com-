"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const CATEGORIES = ["Tümü", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

/** Blog listesi + kategori filtresi (?kategori=…). Sunucu HTML'i tüm yazıları içerir. */
export default function BlogList() {
  const q = useSearchParams().get("kategori");
  const [cat, setCat] = useState(q && CATEGORIES.includes(q) ? q : "Tümü");

  const choose = (c: string) => {
    setCat(c);
    const url = new URL(window.location.href);
    if (c === "Tümü") url.searchParams.delete("kategori");
    else url.searchParams.set("kategori", c);
    window.history.replaceState(null, "", url);
  };

  const items = cat === "Tümü" ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Kategoriye göre filtrele">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => choose(c)}
            aria-pressed={cat === c}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              cat === c
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {c}
            <span className="ml-1.5 font-mono text-[10px] opacity-70">
              {c === "Tümü" ? blogPosts.length : blogPosts.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {items.map((post) => (
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
    </>
  );
}
