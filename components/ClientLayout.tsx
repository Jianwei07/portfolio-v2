/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ClientLayout.tsx
"use client";
import { useRef, useEffect, useState, Suspense, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ProjectsSkeleton from "@/components/ProjectSkeleton";
import ProjectsError from "@/components/ProjectsError";

interface ClientLayoutProps {
  initialProjects: any[];
  error: Error | null;
}

export default function ClientLayout({
  initialProjects,
  error,
}: ClientLayoutProps) {
  const [activeSection, setActiveSection] = useState("home");

  // Create individual refs at the top level.
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Memoize the refs object so it doesn't get recreated on each render.
  const refs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    [] // empty dependency because the individual refs are stable
  );

  // Smooth scroll function
  const scrollToSection = (sectionId: keyof typeof refs) => {
    const section = refs[sectionId].current;
    if (section) {
      const offset = 80; // Height of fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer for active section
  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    Object.entries(refs).forEach(([id, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of the viewport
          }
        );

        observer.observe(ref.current);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [refs]); // refs is now stable, so this useEffect runs only once

  return (
    <main className="min-h-screen relative">
      <Header
        activeSection={activeSection}
        scrollToHome={() => scrollToSection("home")}
        scrollToAbout={() => scrollToSection("about")}
        scrollToProjects={() => scrollToSection("projects")}
        scrollToContact={() => scrollToSection("contact")}
      />

      <section ref={homeRef} className="min-h-screen" id="home">
        <Hero />
      </section>

      {/* Uncomment and add your About component when ready */}
      {/* <section ref={aboutRef} className="min-h-screen py-16" id="about">
      </section> */}

      <section ref={projectsRef} className="min-h-screen py-16" id="projects">
        <Suspense fallback={<ProjectsSkeleton />}>
          {error ? <ProjectsError /> : <Projects projects={initialProjects} />}
        </Suspense>
      </section>

      <section ref={contactRef} className="min-h-screen py-16" id="contact">
        <Contact />
      </section>
    </main>
  );
}
