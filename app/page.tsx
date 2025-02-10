// app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { getProjects } from "@/lib/notion";
import ProjectsSkeleton from "@/components/ProjectSkeleton"; // Extracted skeleton
import ProjectsError from "@/components/ProjectsError"; // Extracted error boundary
import { Suspense } from "react";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  try {
    // Fetch projects data
    const projects = await getProjects();

    return (
      <main className="min-h-screen">
        <Hero />
        {/* Render Projects with Suspense */}
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects projects={projects} />
        </Suspense>
        <Contact />
      </main>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    // Render error boundary if fetching fails
    return (
      <main className="min-h-screen">
        <Hero />
        <ProjectsError />
        <Contact />
      </main>
    );
  }
}
