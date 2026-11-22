// src/components/sections/Hero.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code, User, Mail } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-20 md:px-6"
    >
      {/* Animated gradient orbs — now blue + magenta */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-4xl text-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Kagiso Lesley Setilo
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto"
        >
          An Aspiring DevSecOps Engineer crafting scalable systems and intuitive
          user experiences. I build robust applications and document the
          architecture behind them.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            View My Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/lesley-cyborg" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Code className="h-5 w-5" />
          </a>
          <a href="www.linkedin.com/in/kagiso-setilo-b6b340255" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <User className="h-5 w-5" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-accent">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}