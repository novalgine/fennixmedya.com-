import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getRelatedPosts } from "@/data/blog-posts";

export default function RelatedPosts({ slug }: { slug: string }) {
  const posts = getRelatedPosts(slug, 3);
  if (posts.length === 0) return null;

  return (
    <aside className="mt-16 border-t border-border/50 pt-10">
      <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">
        İlgili <span className="text-gradient-gold">Yazılar</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group bg-muted/20 border border-border rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 flex flex-col gap-3"
          >
            <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium self-start">
              {p.category}
            </span>
            <h3 className="font-heading font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-auto">
              <Clock className="w-3.5 h-3.5" /> {p.readTime}
              <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
