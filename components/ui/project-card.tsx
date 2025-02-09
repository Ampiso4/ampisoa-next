"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  detailsUrl?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  githubUrl,
  detailsUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {detailsUrl && (
            <Button variant="default" className="w-full" asChild>
              <Link href={detailsUrl}>View Details</Link>
            </Button>
          )}
          <div className="flex gap-2">
            {demoUrl && (
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => window.open(demoUrl, "_blank")}
              >
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                View Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
