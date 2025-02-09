"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/ui/nav-menu";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5/CSS3",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "RESTful APIs",
      ],
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
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

      {/* Profile Section */}
      <div className="container py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile Image & Basic Info */}
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden mb-6">
              <Image
                src="https://picsum.photos/seed/profile/400/400"
                alt="Profile"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-xl text-muted-foreground">
                Senior Software Engineer
              </p>
              <div className="flex gap-4">
                <Button>Download CV</Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="md:w-2/3 space-y-8">
            {/* About Me */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground">
                A passionate software engineer with over 5 years of experience
                in full-stack development. Specializing in building scalable web
                applications and implementing efficient solutions to complex
                problems. Committed to writing clean, maintainable code and
                staying current with emerging technologies.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="space-y-6">
                {skills.map((skillSet) => (
                  <div key={skillSet.category}>
                    <h3 className="text-lg font-semibold mb-2">
                      {skillSet.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-lg font-semibold">
                    Senior Software Engineer
                  </h3>
                  <p className="text-muted-foreground">
                    Tech Corp • 2021 - Present
                  </p>
                  <p className="mt-2">
                    Led development of multiple high-impact projects, mentored
                    junior developers, and implemented best practices that
                    improved team productivity by 30%.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-lg font-semibold">Software Engineer</h3>
                  <p className="text-muted-foreground">
                    Innovation Labs • 2019 - 2021
                  </p>
                  <p className="mt-2">
                    Developed and maintained various web applications,
                    collaborated with cross-functional teams, and contributed to
                    system architecture decisions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
