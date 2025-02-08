"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/ui/nav-menu";
import { ProjectCard } from "@/components/ui/project-card";
import Link from "next/link";

export default function Home() {
  const collaborators = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: [
      "Alex Thompson",
      "Sarah Chen",
      "Marcus Johnson",
      "Priya Patel",
      "James Wilson",
      "Emma Rodriguez",
      "David Kim",
      "Olivia Taylor",
      "Michael Chang",
      "Sofia Garcia",
      "Ryan Mitchell",
      "Ava Williams",
      "Lucas Brown",
      "Isabella Lee",
      "Ethan Carter",
      "Maya Singh",
    ][i],
    role: ["Developer", "Designer", "Product Manager", "DevOps", "QA Engineer"][
      Math.floor(Math.random() * 5)
    ],
    avatar: `https://picsum.photos/seed/person${i + 1}/100/100`,
  }));

  const projects = [
    {
      title: "Fitness Tracking App",
      description:
        "A modern mobile application for tracking workouts, nutrition, and health goals built with React Native.",
      imageUrl: "https://picsum.photos/seed/fitness1/800/600",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
      demoUrl: "https://demo-fitnessapp.com",
      githubUrl: "https://github.com/username/fitness-app",
      detailsUrl: "/projects/fitness-app",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design and cart functionality.",
      imageUrl: "https://picsum.photos/seed/ecommerce/800/600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
      detailsUrl: "/projects/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      imageUrl: "https://picsum.photos/seed/taskapp/800/600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      demoUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/username/taskapp",
      detailsUrl: "/projects/taskapp",
    },
    {
      title: "AI Image Generator",
      description:
        "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
      imageUrl: "https://picsum.photos/seed/aigen/800/600",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      demoUrl: "https://demo-aigen.com",
      githubUrl: "https://github.com/username/aigen",
      detailsUrl: "/projects/aigen",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            <span className="font-bold text-lg">Portfolio</span>
          </div>
          <div className="flex-1 flex justify-center">
            <NavMenu />
          </div>
          <div className="w-[100px]" /> {/* Spacer for visual balance */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[85vh] flex flex-col relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/portfolio-hero/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container flex-1 flex flex-col items-center justify-center relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
              Crafting Digital Excellence
            </h1>
            <p className="max-w-[800px] mx-auto text-xl sm:text-2xl text-muted-foreground [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
              From mobile apps to web platforms, I bring ideas to life with
              modern technology and thoughtful design.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              asChild
            >
              <Link href="/contact">Let's Connect</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 pb-8 flex justify-center">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container pt-32 pb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-slate-600/[0.04] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
        </div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400">
              Our Creative Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Meet our talented team of developers, designers, and product
              specialists who bring these projects to life.
            </p>
          </div>

          <div className="grid grid-rows-2 gap-3 max-w-6xl mx-auto px-4">
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full"
              >
                {collaborators
                  .slice(rowIndex * 8, (rowIndex + 1) * 8)
                  .map((collaborator) => (
                    <div
                      key={collaborator.id}
                      className="group bg-card hover:bg-accent rounded-xl p-3 flex items-center gap-3 transition-colors border border-border/50 overflow-hidden"
                    >
                      <Avatar className="h-12 w-12 shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
                        <AvatarImage
                          src={collaborator.avatar}
                          alt={collaborator.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-600 text-white">
                          {collaborator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-medium text-sm truncate">
                          {collaborator.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {collaborator.role}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
