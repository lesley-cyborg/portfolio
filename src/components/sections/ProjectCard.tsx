// src/components/sections/ProjectCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusConfig = {
    completed: { label: "Completed", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400" },
    "in-progress": { label: "In Progress", icon: Clock, color: "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400" },
    archived: { label: "Archived", icon: Clock, color: "text-slate-600 bg-slate-50 dark:bg-slate-800 dark:text-slate-400" },
  };

  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  // Limit displayed tech stack to 3 items, show count for the rest
  const visibleTech = project.techStack.slice(0, 3);
  const remainingTechCount = project.techStack.length - 3;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={project.imageUrls[0] || "/images/placeholder-project.png"}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-md", status.color)}>
            <StatusIcon className="h-3.5 w-3.5" />
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {remainingTechCount > 0 && (
            <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              +{remainingTechCount}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            View Details
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Code2 className="h-4 w-4" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}