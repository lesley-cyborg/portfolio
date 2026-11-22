// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 1. Await params in generateMetadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Project Documentation`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Project Documentation`,
      description: project.description,
      type: "article",
    },
  };
}

async function ProjectPageContent({
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto min-h-[60vh] max-w-5xl animate-pulse px-4 py-16 md:px-6">
          <div className="mb-8 h-8 w-2/3 rounded bg-muted" />
          <div className="h-24 rounded-lg bg-muted" />
        </div>
      }
    >
      <ProjectPageContent params={params} />
    </Suspense>
  );
}