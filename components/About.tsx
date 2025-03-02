// components/About.tsx
"use client";
import { FC } from "react";
import AboutSection from "./AboutSection";
import { AboutData } from "@/types/about";
import AboutIntro from "./AboutIntro"; // Optional: your personal introduction component

interface AboutProps {
  about?: AboutData[];
}

const About: FC<AboutProps> = ({ about = [] }) => {
  return (
    <div className="bg-amber-50 px-4 md:px-8 lg:px-16">
      {/* Optional personal intro */}
      <AboutIntro />
      {about
        .sort((a, b) => a.order - b.order)
        .map((section) => (
          <AboutSection key={section.id} about={section} />
        ))}
    </div>
  );
};

export default About;
