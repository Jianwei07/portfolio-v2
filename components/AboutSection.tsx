// components/AboutSection.tsx
"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TechStackIcon from "./TechStackIcon";
import { AboutData } from "@/types/about";

interface AboutSectionProps {
  about: AboutData;
  isEven: boolean;
}

const AboutSection: FC<AboutSectionProps> = ({ about, isEven }) => {
  const { title, description, technologies, imageSrc, altText } = about;

  // Handle both string and array formats for description
  const descriptionArray = Array.isArray(description)
    ? description
    : [description].filter(Boolean);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`py-16 md:py-24 ${isEven ? "bg-amber-100/20" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 md:gap-16`}
        >
          {/* Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full h-[400px] max-w-sm overflow-hidden rounded-lg border-4 border-amber-50 shadow-lg">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={altText || title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
          </div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-3/5"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {title}
              </h2>

              <div className="text-gray-700 mb-8">
                {descriptionArray.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px w-full max-w-md bg-gray-300 my-8"></div>

              {technologies && technologies.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <TechStackIcon
                          name={tech}
                          size={36}
                          showLabel
                          className="transition-all"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
