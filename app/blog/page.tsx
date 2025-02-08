interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Next.js 13",
    excerpt:
      "Learn how to build modern web applications with Next.js 13 and its powerful features.",
    date: "2024-02-08",
    category: "Tech",
    readTime: "5 min read",
  },
  {
    title: "Understanding TypeScript Generics",
    excerpt:
      "A comprehensive guide to using generics in TypeScript for better type safety.",
    date: "2024-02-07",
    category: "Tech",
    readTime: "8 min read",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "Exploring upcoming trends and technologies shaping the future of web development.",
    date: "2024-02-06",
    category: "Tech",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold hover:text-primary cursor-pointer">
                {post.title}
              </h2>
              <span className="text-sm text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {post.category}
              </span>
              <time className="text-sm text-muted-foreground">
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
  );
}
