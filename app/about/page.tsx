// app/about/page.tsx
import About from "@/components/About";
import { getAboutData } from "@/lib/notion";
import type { AboutData } from "@/types/about";

export const revalidate = 3600; // Optional: revalidate every hour

export default async function AboutPage() {
  let about: AboutData[] = [];

  try {
    about = await getAboutData();
    console.log("Fetched About data:", about); // Debug log
  } catch (error) {
    console.error("Error in AboutPage:", error);
  }

  return <About about={about} />;
}
