// src/components/sections/ProjectDetail.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, GitBranch, ExternalLink, Calendar, 
  CheckCircle2, Clock, AlertTriangle, Lightbulb 
} from "lucide-react";
import { Project } from "@/types/projects";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const statusConfig = {
    completed: { label: "Completed", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" },
    "in-progress": { label: "In Progress", icon: Clock, color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-800" },
    archived: { label: "Archived", icon: Clock, color: "text-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700" },
  };

  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Top Navigation Bar for Detail Page */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl px-4 py-4 md:px-6">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        
        {/* 1. Hero Header */}
        <header className="mb-12 border-b border-border pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
              status.color
            )}>
              <StatusIcon className="h-3.5 w-3.5" />
              {status.label}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(project.createdAt)}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-3xl">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <GitBranch className="h-4 w-4" />
              View Source Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          
          {/* 2. Main Content Column */}
          <div className="space-y-12">
            
            {/* Overview Section */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
                <Lightbulb className="h-5 w-5 text-primary" />
                Overview
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>{project.longDescription}</p>
              </div>
            </section>

            {/* Challenges & Solutions Section */}
            <section>
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challengesAndSolutions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-lg border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-destructive">
                        The Challenge
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        The Solution
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Image Gallery Section */}
            {project.imageUrls.length > 0 && (
              <section>
                <h2 className="mb-6 text-xl font-semibold text-foreground">
                  Project Gallery
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.imageUrls.map((url, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                    >
                      <Image
                        src={url}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* 3. Sidebar Column (Tech Stack) */}
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub Repository
                    </a>
                  </li>
                  {project.liveUrl && (
                    <li>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Deployment
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </motion.article>
  );
}