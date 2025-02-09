"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/ui/nav-menu";
import Image from "next/image";
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
  ecommerce: {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design and cart functionality.",
    fullDescription: `Our e-commerce platform provides a seamless shopping experience with modern web technologies. The platform is built with performance and user experience in mind.

Key Features:
• Dynamic product catalog with search and filters
• Real-time inventory management
• Secure payment processing
• User authentication and profiles
• Order tracking and history
• Responsive design for all devices
• Admin dashboard
• Analytics and reporting`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "AWS",
    ],
    images: [
      {
        url: "https://picsum.photos/seed/ecommerce-hero/1920/1080",
        caption: "Homepage & Featured Products",
      },
      {
        url: "https://picsum.photos/seed/ecommerce-catalog/1200/800",
        caption: "Product Catalog",
      },
      {
        url: "https://picsum.photos/seed/ecommerce-cart/1200/800",
        caption: "Shopping Cart",
      },
      {
        url: "https://picsum.photos/seed/ecommerce-admin/1200/800",
        caption: "Admin Dashboard",
      },
    ],
    features: [
      {
        title: "Product Management",
        description:
          "Easily manage products, categories, and inventory with our intuitive admin interface.",
      },
      {
        title: "Smart Search",
        description:
          "Advanced search functionality with filters and real-time suggestions.",
      },
      {
        title: "Secure Checkout",
        description:
          "PCI-compliant payment processing with multiple payment options.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Comprehensive analytics and reporting for business insights.",
      },
    ],
    metrics: [
      {
        label: "Products Listed",
        value: "10K+",
      },
      {
        label: "Monthly Orders",
        value: "5K+",
      },
      {
        label: "User Rating",
        value: "4.9/5",
      },
    ],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  taskapp: {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    fullDescription: `Our task management application helps teams stay organized and productive with real-time collaboration features and intuitive project management tools.

Key Features:
• Real-time task updates and collaboration
• Project boards and lists
• Team management and permissions
• File attachments and sharing
• Due date reminders
• Comment threads and mentions
• Activity timeline
• Mobile-responsive design`,
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Redis",
      "Docker",
    ],
    images: [
      {
        url: "https://picsum.photos/seed/task-hero/1920/1080",
        caption: "Dashboard Overview",
      },
      {
        url: "https://picsum.photos/seed/task-board/1200/800",
        caption: "Project Board",
      },
      {
        url: "https://picsum.photos/seed/task-team/1200/800",
        caption: "Team Collaboration",
      },
      {
        url: "https://picsum.photos/seed/task-mobile/1200/800",
        caption: "Mobile Experience",
      },
    ],
    features: [
      {
        title: "Real-time Collaboration",
        description:
          "See changes instantly as team members update tasks and projects.",
      },
      {
        title: "Project Organization",
        description: "Organize tasks with boards, lists, and custom fields.",
      },
      {
        title: "Team Management",
        description: "Manage team members and set granular permissions.",
      },
      {
        title: "Activity Tracking",
        description:
          "Monitor project progress with detailed activity timelines.",
      },
    ],
    metrics: [
      {
        label: "Active Teams",
        value: "1K+",
      },
      {
        label: "Tasks Completed",
        value: "100K+",
      },
      {
        label: "User Satisfaction",
        value: "4.7/5",
      },
    ],
    demoUrl: "https://demo-taskapp.com",
    githubUrl: "https://github.com/username/taskapp",
  },
  aigen: {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
    fullDescription: `Our AI Image Generator leverages cutting-edge machine learning models to transform text descriptions into stunning visual artwork. The platform provides an intuitive interface for both casual users and professional creators.

Key Features:
• Text-to-image generation
• Style transfer and customization
• Batch processing
• High-resolution output
• Custom training options
• API integration
• Gallery and sharing
• Commercial licensing`,
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],
    images: [
      {
        url: "https://picsum.photos/seed/ai-hero/1920/1080",
        caption: "AI Generation Interface",
      },
      {
        url: "https://picsum.photos/seed/ai-gallery/1200/800",
        caption: "Generated Artwork Gallery",
      },
      {
        url: "https://picsum.photos/seed/ai-style/1200/800",
        caption: "Style Customization",
      },
      {
        url: "https://picsum.photos/seed/ai-batch/1200/800",
        caption: "Batch Processing",
      },
    ],
    features: [
      {
        title: "Advanced AI Models",
        description:
          "Multiple AI models for different artistic styles and requirements.",
      },
      {
        title: "Style Control",
        description:
          "Fine-tune the output with detailed style and parameter controls.",
      },
      {
        title: "Batch Generation",
        description:
          "Generate multiple variations or process bulk requests efficiently.",
      },
      {
        title: "Developer API",
        description:
          "Integrate image generation capabilities into your applications.",
      },
    ],
    metrics: [
      {
        label: "Images Generated",
        value: "1M+",
      },
      {
        label: "Active Users",
        value: "25K+",
      },
      {
        label: "API Requests",
        value: "500K+/day",
      },
    ],
    demoUrl: "https://demo-aigen.com",
    githubUrl: "https://github.com/username/aigen",
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
      <div className="relative min-h-screen">
        {/* Hero Image */}
        <div className="w-full h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              width={400}
              height={400}
              src={project.images[0].url}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center pb-20">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
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
            {"appStoreUrl" in project && (
              <Button variant="outline" asChild>
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </Button>
            )}
            {"playStoreUrl" in project && (
              <Button variant="outline" asChild>
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Store
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {project.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <Image
                width={400}
                height={400}
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
