"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";

interface RecentPostsProps {
  posts: BlogPost[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const router = useRouter();

  const handlePostClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    e.preventDefault();
    router.push(`/en/posts/${slug}`);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="aurora-card p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center font-serif">
          Recent Posts
        </h2>
        <p className="text-muted-foreground text-lg mb-8 text-center">
          Check out our latest articles
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/en/posts/${post.slug}`}
              onClick={(e) => handlePostClick(e, post.slug)}
              className="group"
            >
              <Card className="h-full aurora-card hover-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                {post.description && (
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
