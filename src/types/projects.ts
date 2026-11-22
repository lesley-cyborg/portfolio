// src/types/project.ts

export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface ChallengeAndSolution {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string; // Short summary for the project cards
  longDescription: string; // Detailed overview for the documentation page
  techStack: string[];
  category: string; // e.g., "Web App", "API", "CLI Tool", "Library"
  status: ProjectStatus;
  githubUrl: string;
  liveUrl: string;
  imageUrls: string[]; // Array of image paths/URLs for the gallery
  challengesAndSolutions: ChallengeAndSolution[];
  createdAt: string; // ISO date string for sorting
}
