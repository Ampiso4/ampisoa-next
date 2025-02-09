"use client";

import { Input } from "@/components/ui/input";
import { NavMenu } from "@/components/ui/nav-menu";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const latestPosts: BlogPost[] = [
  {
    title: "Deep Dive into React Server Components",
    excerpt:
      "Understanding the architecture and benefits of React Server Components in modern web applications.",
    date: "2024-02-09",
    category: "React",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/react-components/800/600",
  },
  {
    title: "Getting Started with Next.js 13",
    excerpt:
      "Learn how to build modern web applications with Next.js 13 and its powerful features.",
    date: "2024-02-08",
    category: "Tech",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/nextjs-13/800/600",
  },
  {
    title: "2024 Web Development Trends",
    excerpt:
      "Exploring the latest trends and technologies that will shape web development in 2024.",
    date: "2024-02-08",
    category: "Industry",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/webdev-2024/800/600",
  },
];

const categories = [
  { name: "All", count: 42 },
  { name: "React", count: 15 },
  { name: "JavaScript", count: 12 },
  { name: "TypeScript", count: 8 },
  { name: "Web Development", count: 18 },
  { name: "Tech News", count: 6 },
];

const popularTags = [
  "NextJS",
  "React",
  "JavaScript",
  "TypeScript",
  "Web Dev",
  "Frontend",
  "CSS",
  "API",
];

export default function LatestBlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto py-4">
          <NavMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover Latest Tech Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay up to date with the latest trends, tutorials, and insights in
            web development and technology.
          </p>
          <div className="max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="col-span-2">
            <div className="sticky top-4">
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary flex justify-between items-center"
                      >
                        {category.name}
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="text-xs px-3 py-1 bg-secondary rounded-full hover:bg-secondary/80"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="col-span-7">
            <div className="grid gap-8">
              {latestPosts.map((post, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-card border"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      width={800}
                      height={600}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary px-2.5 py-0.5 rounded text-xs font-medium text-primary-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>

                    <time className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-3">
            <div className="sticky top-4 space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest posts delivered straight to your inbox.
                </p>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-3"
                />
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Recent Posts */}
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {latestPosts.map((post, index) => (
                    <a key={index} href="#" className="block group">
                      <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">
                        {post.title}
                      </h4>
                      <time className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
