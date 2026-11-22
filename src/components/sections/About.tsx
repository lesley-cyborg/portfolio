// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { skillCategories, professionalSummary } from "@/data/skills";
import { Code2, Server, Wrench } from "lucide-react";

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  "Tools & DevOps": Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {professionalSummary}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.name as keyof typeof iconMap] || Code2;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}