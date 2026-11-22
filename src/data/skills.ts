// src/data/skills.ts

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    name: "Backend",
    items: ["Python", "Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"],
  },
  {
    name: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"],
  },
];

export const professionalSummary = 
  "I am a passionate Full-Stack Engineer specializing in building scalable, high-performance web applications. With a strong foundation in systems design and a keen eye for UI/UX, I bridge the gap between complex backend architecture and intuitive frontend experiences. I thrive on solving difficult technical challenges and writing clean, maintainable code.";