import type { Metadata } from "next";
import postsJson from "./blog-posts.json";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  category: string;
  readTime: string;
}

export const SITE_URL = "https://fennixmedya.com";

/** Tüm yazılar, yeniden eskiye sıralı. */
export const blogPosts: BlogPost[] = [...(postsJson as BlogPost[])].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getPost(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  // Yanlış slug build'i anında patlatsın — sessiz kırık metadata'dan iyidir
  if (!post) throw new Error(`Bilinmeyen blog slug: ${slug}`);
  return post;
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug);
  const same = blogPosts.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = blogPosts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...same, ...rest].slice(0, count);
}

export function createBlogMetadata(slug: string): Metadata {
  const post = getPost(slug);
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Semih Hasanoğlu" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "Fennix Medya",
      locale: "tr_TR",
      publishedTime: `${post.date}T00:00:00+03:00`,
      ...(post.dateModified && {
        modifiedTime: `${post.dateModified}T00:00:00+03:00`,
      }),
      authors: ["Semih Hasanoğlu"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}
