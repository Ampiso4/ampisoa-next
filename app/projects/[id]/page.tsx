"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/ui/nav-menu";
import Link from "next/link";
import { useParams } from "next/navigation";

const projects = {
  "fitness-app": {
    title: "Fitness Tracking App",
    description:
      "A comprehensive mobile application for tracking workouts, nutrition, and health goals. Features include real-time workout tracking, meal planning, progress visualization, and social sharing capabilities.",
    fullDescription: `Our fitness tracking application is designed to help users maintain a healthy lifestyle through comprehensive workout and nutrition management. The app provides an intuitive interface for tracking various aspects of fitness and wellness.

Key Features:
• Personalized workout plans based on user goals
• Real-time exercise tracking with form guidance
• Nutrition tracking with barcode scanner
• Progress visualization with detailed analytics
• Social features for sharing achievements
• Integration with wearable devices
• Offline mode support
• Push notifications for workout reminders`,
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Node.js",
      "MongoDB",
      "AWS",
      "Firebase",
    ],
    images: [
      {
        url: "https://picsum.photos/seed/fitness-hero/1920/1080",
        caption: "Mobile App Overview",
      },
      {
        url: "https://picsum.photos/seed/fitness-workout/1200/800",
        caption: "Workout Tracking Interface",
      },
      {
        url: "https://picsum.photos/seed/fitness-progress/1200/800",
        caption: "Progress Analytics Dashboard",
      },
      {
        url: "https://picsum.photos/seed/fitness-social/1200/800",
        caption: "Social Features & Sharing",
      },
    ],
    features: [
      {
        title: "Smart Workout Tracking",
        description:
          "Automatically tracks your exercises, sets, and reps with detailed analytics.",
      },
      {
        title: "Nutrition Planning",
        description:
          "Plan and track your meals with a comprehensive food database and barcode scanner.",
      },
      {
        title: "Progress Visualization",
        description:
          "View your fitness journey through beautiful charts and progress photos.",
      },
      {
        title: "Social Integration",
        description:
          "Connect with friends, share achievements, and participate in challenges.",
      },
    ],
    metrics: [
      {
        label: "Active Users",
        value: "50K+",
      },
      {
        label: "App Rating",
        value: "4.8/5",
      },
      {
        label: "Downloads",
        value: "100K+",
      },
    ],
    demoUrl: "https://demo-fitnessapp.com",
    githubUrl: "https://github.com/username/fitness-app",
    appStoreUrl: "https://apps.apple.com/app/fitness-app",
    playStoreUrl: "https://play.google.com/store/apps/fitness-app",
  },
};

export default function ProjectDetails() {
  const params = useParams();
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4 font-bold">
            <Link href="/">My Portfolio</Link>
          </div>
          <NavMenu />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="w-full h-[70vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.images[0].url}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-bold text-foreground [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
                  {project.title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Demo
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-20">
        {/* Project Content */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Store
              </a>
            </Button>
          </div>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {project.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full aspect-video object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2">
                {image.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About the Project</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {project.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.includes("•") ? (
                  <ul className="list-disc pl-4 space-y-2">
                    {paragraph
                      .split("•")
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i}>{item.trim()}</li>
                      ))}
                  </ul>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Project Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card shadow-sm text-center"
              >
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
