interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const techPosts: BlogPost[] = [
  {
    title: "Deep Dive into React Server Components",
    excerpt:
      "Understanding the architecture and benefits of React Server Components in modern web applications.",
    date: "2024-02-09",
    category: "React",
    readTime: "10 min read",
  },
  {
    title: "Building Secure APIs with Node.js",
    excerpt:
      "Best practices and implementation guides for building secure and scalable APIs using Node.js.",
    date: "2024-02-08",
    category: "Backend",
    readTime: "12 min read",
  },
  {
    title: "Advanced TypeScript Design Patterns",
    excerpt:
      "Exploring advanced design patterns and their implementation in TypeScript applications.",
    date: "2024-02-07",
    category: "TypeScript",
    readTime: "15 min read",
  },
];

export default function TechBlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Tech Articles</h1>
      <div className="grid gap-6">
        {techPosts.map((post, index) => (
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
