// app/page.tsx
import ClientLayout from "@/components/ClientLayout";
import { getProjects } from "@/lib/notion";
import type { Project } from "@/types/project"; // adjust the import path if needed

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  let projects: Project[] = [];
  let error: Error | null = null;

  try {
    projects = await getProjects();
  } catch (e) {
    console.error("Error fetching projects:", e);
    error = e as Error;
  }

  return <ClientLayout initialProjects={projects} error={error} />;
}
