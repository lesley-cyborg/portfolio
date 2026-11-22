// src/components/sections/ProjectsSection.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, getAllCategories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const categories = useMemo(() => ["All", ...getAllCategories()], []);
  const statuses = ["All", "completed", "in-progress", "archived"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
      return matchesCategory && matchesStatus;
    });
  }, [selectedCategory, selectedStatus]);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of technical case studies, open-source contributions, and production applications I have built and documented.
          </p>
        </div>

        {/* Filtering UI */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <p className="text-lg font-medium text-foreground">No projects found.</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
