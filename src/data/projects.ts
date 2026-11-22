// src/data/projects.ts

import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "1",
    title: "DevPulse Internal Developer Portal",
    slug: "devpulse-internal-developer-portal",
    description: "A real-time DevSecOps dashboard that ingests GitHub webhooks to track PR velocity and enforce security policies.",
    longDescription: "An internal engineering dashboard that ingests GitHub webhooks to track PR velocity and enforce security policies. It features a real-time UI, a fail-closed security gate for secret scanning, and a robust backend designed to handle the quirks of the GitHub API (like 64-bit BigInt IDs). The architecture uses Express + TypeScript + Prisma on the backend, and Next.js 15 with Tailwind CSS on the frontend, all tied together with Cloudflare Tunnels for secure local webhook testing.",
    techStack: ["Next.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Cloudflare Tunnels", "Tailwind CSS"],
    category: "Web App",
    status: "completed",
    githubUrl: "https://github.com/lesley-cyborg/devpulse-internal-developer-portal",
    liveUrl: "",
    imageUrls: [
      "/images/devpulse-dashboard.png",
      "/images/devpulse-architecture.png"
    ],
    challengesAndSolutions: [
      {
        challenge: "Calculating time-to-merge metrics directly in PostgreSQL caused type-casting friction with Prisma's $queryRaw and JavaScript.",
        solution: "Refactored to use Prisma's type-safe findMany and computed time deltas in the application layer, ensuring full type safety and avoiding database dialect lock-in."
      },
      {
        challenge: "Preventing duplicate data processing during GitHub webhook network retries.",
        solution: "Implemented an idempotency engine using the X-GitHub-Delivery header to guarantee each event is processed exactly once, paired with HMAC-SHA256 signature verification using timingSafeEqual."
      }
    ],
    createdAt: "2024-11-20T00:00:00.000Z"
  },
  {
    id: "2",
    title: "Automated IAM Provisioning System",
    slug: "automated-iam-provisioning-system",
    description: "Event-driven IAM orchestration API automating user provisioning via HMAC-secured webhooks and Redis async queues.",
    longDescription: "An event-driven IAM orchestration API that automates user provisioning. It ingests HMAC-secured webhooks from HR systems, enqueues jobs in Redis with exponential backoff, and provisions accounts across external services (e.g., GitHub, Slack) via an async worker. It features JWT-based RBAC, immutable PostgreSQL audit logging for SOC2/ISO27001 compliance, and structured JSON logging for SIEM ingestion.",
    techStack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "JWT", "DevSecOps"],
    category: "API / Backend",
    status: "completed",
    githubUrl: "https://github.com/lesley-cyborg/Automated-IAM-Provisioning-System",
    liveUrl: "",
    imageUrls: [
      "/images/iam-architecture.png",
      "/images/iam-audit-log.png"
    ],
    challengesAndSolutions: [
      {
        challenge: "External API rate limits (e.g., 429 errors) causing provisioning jobs to fail permanently.",
        solution: "Implemented an async Redis queue (arq) with exponential backoff retry logic (2s, 4s) and a hard cap of 3 retries to prevent poison pills while ensuring eventual consistency."
      },
      {
        challenge: "Ensuring cryptographic integrity of incoming HR system webhooks to prevent spoofing.",
        solution: "Enforced HMAC-SHA256 signature validation on all incoming payloads at the API gateway level before any processing or database writes occur."
      }
    ],
    createdAt: "2026-11-19T00:00:00.000Z"
  },
  {
    id: "3",
    title: "Secure Digital Evidence Management Platform",
    slug: "secure-digital-evidence-platform",
    description: "A security-first engineering platform combining live RTSP computer vision with AES-GCM encryption and immutable audit logs.",
    longDescription: "A security-first engineering platform that combines live RTSP computer vision (YOLOv8) with a modular FastAPI backend. It ensures data integrity through AES-GCM encryption, RSA-PSS signatures, and immutable chain-of-custody audit logs in PostgreSQL. Designed for high-security environments where digital evidence must be tamper-proof and legally defensible.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Cryptography", "Computer Vision", "YOLOv8", "Security Engineering"],
    category: "Security Engineering",
    status: "in-progress",
    githubUrl: "https://github.com/lesley-cyborg/Secure-Surveillance-and-Digital-Evidence-Management-Platform",
    liveUrl: "",
    imageUrls: [
      "/images/camera-platform-ui.png",
      "/images/dashboard-encryption-flow.png",
      "/images/incidents-platform-ui.png",
      "/images/evidence-transfer-process.png",
      "/images/evidence-encryption-flow.png"
    ],
    challengesAndSolutions: [
      {
        challenge: "Maintaining an immutable, tamper-proof chain of custody for digital evidence in a standard relational database.",
        solution: "Implemented RSA-PSS digital signatures for every evidence artifact and stored the cryptographic hashes in an append-only PostgreSQL audit table, ensuring any retroactive alteration is immediately detectable."
      }
    ],
    createdAt: "2026-07-17T00:00:00.000Z"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set(projects.map((project) => project.category));
  return Array.from(categories);
}