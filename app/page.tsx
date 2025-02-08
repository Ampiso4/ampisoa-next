"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/ui/nav-menu";
import { ProjectCard } from "@/components/ui/project-card";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design and cart functionality.",
      imageUrl: "https://picsum.photos/seed/ecommerce/800/600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      imageUrl: "https://picsum.photos/seed/taskapp/800/600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      demoUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/username/taskapp",
    },
    {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
      imageUrl: "https://picsum.photos/seed/aigen/800/600",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      demoUrl: "https://demo-aigen.com",
      githubUrl: "https://github.com/username/aigen",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4 font-bold">
            <span>My Portfolio</span>
          </div>
          <NavMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Explore my latest projects and see what I've been working on. Each
          project showcases different skills and technologies.
        </p>
        <div className="flex gap-4">
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
