// components/AboutSection.tsx
"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutData } from "@/types/about";
import TechStackIcon from "./TechStackIcon";

interface AboutSectionProps {
  about: AboutData;
}

const AboutSection: FC<AboutSectionProps> = ({ about }) => {
  const defaultImage = "/icons/placeholder.png";

  // Group technologies by category for better organization
  const categories = {
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "Go",
      "Ruby",
      "PHP",
    ],
    Frontend: [
      "React",
      "Vue",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind",
      "SCSS",
      "Redux",
    ],
    Backend: ["Node.js", "Express", "Django", "Spring", "Laravel", "ASP.NET"],
    Database: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Firebase",
      "Supabase",
    ],
    DevOps: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD", "Git"],
    Tools: ["Webpack", "Vite", "Jest", "Cypress", "Figma", "VS Code"],
  };

  const getTechCategory = (tech: string): string => {
    for (const [category, techs] of Object.entries(categories)) {
      if (techs.includes(tech)) return category;
    }
    return "Other";
  };

  const groupedTech: Record<string, string[]> = {};
  about.technologies.forEach((tech) => {
    const category = getTechCategory(tech);
    if (!groupedTech[category]) groupedTech[category] = [];
    groupedTech[category].push(tech);
  });

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row items-start gap-6"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={about.imageSrc || defaultImage}
              alt={about.altText || `${about.title}`}
              width={80}
              height={80}
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== defaultImage) {
                  target.src = defaultImage;
                }
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2">
              {about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              {Array.isArray(about.description)
                ? about.description[0]
                : about.description}
            </p>
          </div>
        </motion.div>

        {/* Skills Timeline */}
        <div className="space-y-12">
          {Object.entries(groupedTech)
            .filter(([_, techs]) => techs.length > 0)
            .map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pb-8 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-start justify-between flex-col sm:flex-row">
                  <div className="mb-4 sm:mb-0 sm:w-1/4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {category}
                    </h3>
                    <div className="w-12 h-0.5 bg-amber-400 mt-2"></div>
                  </div>

                  <div className="sm:w-3/4">
                    <div className="flex flex-wrap gap-3 mb-4">
                      {techs.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -2 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-md"
                        >
                          <TechStackIcon
                            name={tech}
                            className="h-4 w-4 text-amber-500"
                          />
                          <span className="text-sm text-gray-700">{tech}</span>
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 mt-3">
                      {Array.isArray(about.description) &&
                      about.description[index + 1]
                        ? about.description[index + 1]
                        : `Experience with ${category.toLowerCase()} technologies`}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Mobile Skills Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:hidden"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {about.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-50 rounded text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
