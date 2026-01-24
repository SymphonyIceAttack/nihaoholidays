import { BookOpen, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/structured-data/breadcrumb";
import { CollectionPageStructuredData } from "@/components/structured-data/collection-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { getPostsListBreadcrumb } from "@/lib/structured-data";
import type { LanguageType } from "@/lib/translations/config";

export const metadata: Metadata = {
  title: "Blog - NihaoHolidays",
  description:
    "Explore articles about Chinese festivals, traditions, and cultural etiquette. Learn practical tips for celebrating Chinese holidays.",
};
export const revalidate = 84600;
export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: LanguageType }>;
}) {
  const { lang } = await params;
  const blogPosts = await getBlogPosts();

  return (
    <>
      <CollectionPageStructuredData
        url={`${siteConfig.siteUrl}/${lang}/posts`}
        title="Blog - NihaoHolidays"
        description="Explore articles about Chinese festivals, traditions, and cultural etiquette."
        lang={lang}
        items={blogPosts.map((post) => ({
          name: post.title,
          url: `${siteConfig.siteUrl}/${lang}/posts/${post.slug}`,
          description: post.description,
        }))}
      />
      <BreadcrumbStructuredData
        items={getPostsListBreadcrumb(lang)}
        lang={lang}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/80 dark:from-rose-950/20 via-background to-background py-16 md:py-20">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-100/50 dark:bg-rose-900/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100/50 dark:bg-orange-900/20 rounded-full blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-rose-700 dark:text-rose-300 shadow-sm border border-rose-100 dark:border-rose-900/30 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span>Cultural insights & practical guides</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              Explore Chinese Culture
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">
                Through Our Blog
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Discover practical guides, cultural insights, and tips for
              celebrating Chinese festivals with confidence and respect.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            {blogPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/en/posts/${post.slug}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-rose-200/50">
                      {/* Image */}
                      {post.imageUrl && (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            fill
                            src={post.imageUrl}
                            alt={post.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}

                      <CardContent className="p-6 space-y-4">
                        {/* Title */}
                        <h2 className="text-xl font-bold leading-tight text-foreground group-hover:text-rose-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-muted-foreground line-clamp-3 text-sm">
                          {post.description}
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                },
                              )}
                            </time>
                          </div>
                          {post.readTime && (
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          )}
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs font-normal"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Read more link */}
                        <div className="pt-2 flex items-center text-rose-600 dark:text-rose-400 text-sm font-medium">
                          <BookOpen className="w-4 h-4 mr-1.5 transition-transform group-hover:translate-x-1" />
                          <span className="group-hover:underline">
                            Read article
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 mb-4">
                  <BookOpen className="w-8 h-8 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
                <p className="text-muted-foreground">
                  Check back soon for new blog posts about Chinese culture and
                  festivals.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 border-t py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to celebrate like a local?
              </h2>
              <p className="text-muted-foreground mb-6">
                Explore our interactive tools and practical guides for Chinese
                festivals. From greeting generators to food ordering tips, we
                have everything you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-rose-600 hover:bg-rose-700"
                >
                  <Link href="/en/learn">Start Learning</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/en/tool">Explore Tools</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
