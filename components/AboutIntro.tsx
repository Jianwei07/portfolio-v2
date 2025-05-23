/* eslint-disable react/no-unescaped-entities */
// components/AboutIntro.tsx
"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, BookOpen, Code, Server } from "lucide-react";

// Reusable Social Link Component
const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="p-2 rounded-lg hover:bg-amber-50 transition-colors duration-200"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </motion.a>
  );
};

// Skill Card Component
const SkillCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
    >
      <div className="flex items-start space-x-3">
        <div className="text-amber-500 mt-0.5">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutIntro: FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/70 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Header Section with Image and Title */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12 w-full"
          >
            {/* Profile Image */}
            <div className="w-full max-w-xs md:w-1/3 relative">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -z-10 transform translate-x-6 -translate-y-6 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200 rounded-full -z-10 transform -translate-x-4 translate-y-4 opacity-50"></div>
                <div
                  className="absolute inset-0 z-10"
                  onContextMenu={(e) => e.preventDefault()}
                />

                {/* Image container */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10"
                >
                  <Image
                    src="/images/jayden_dp.png"
                    alt="Jayden Liaw"
                    width={300}
                    height={300}
                    className="object-cover w-full aspect-square pointer-events-none select-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                </motion.div>
              </div>

              {/* Social links positioned below image on mobile, beside on desktop */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4 mt-6 md:mt-8"
              >
                <SocialLink
                  href="https://github.com/Jianwei07"
                  icon={<Github className="w-5 h-5 text-gray-700" />}
                  label="GitHub Profile"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/liawjianwei/"
                  icon={<Linkedin className="w-5 h-5 text-gray-700" />}
                  label="LinkedIn Profile"
                />
                <SocialLink
                  href="https://www.threads.net/@jwayjpeg"
                  icon={
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/icons/threads.svg"
                        alt="Threads"
                        fill
                        sizes="20px"
                        className="text-gray-700"
                      />
                    </div>
                  }
                  label="Threads Profile"
                />
                <SocialLink
                  href="mailto:liawjianwei@outlook.com"
                  icon={<Mail className="w-5 h-5 text-gray-700" />}
                  label="Email"
                />
              </motion.div>
            </div>

            {/* Title and Journey Overview */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-2/3 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 font-public-sans">
                About Me
              </h1>

              <div className="w-20 h-1 bg-amber-400 mx-auto md:mx-0 mb-6"></div>

              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-5">
                My Journey in Computer Science
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  I'm Jayden, a self-driven Full-Stack Engineer with a passion
                  for building innovative solutions that solve real-world
                  problems. My journey in computer science began with curiosity
                  and has evolved into a dedicated pursuit of excellence in
                  software development.
                </p>

                <p>
                  After completing my formal education, I expanded my skills
                  through personal projects, professional work experiences, and
                  continuous learning. I've cultivated expertise in both
                  frontend and backend development, with a growing focus on AI
                  integration and system architecture.
                </p>

                <p>
                  Currently, I'm exploring the intersection of traditional
                  software engineering and AI, finding ways to enhance existing
                  systems with intelligent capabilities and build new solutions
                  that leverage the power of machine learning.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="w-full mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Core Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <SkillCard
                icon={<BookOpen size={20} />}
                title="AI Integration"
                description="Currently developing expertise in implementing AI solutions using HuggingFace, TensorFlow, and other frameworks to enhance applications with intelligent features."
              />
              <SkillCard
                icon={<Code size={20} />}
                title="Full-Stack Development"
                description="Proficient in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind. Experienced in building responsive, accessible, and performant user interfaces. AWS Certified, skilled in resilient and scable system design"
              />

              <SkillCard
                icon={<Server size={20} />}
                title="Product Management"
                description="Experienced in SMEs clients and Enterprised level projects. Resource planning and delivery of tech projects"
              />
            </div>
          </motion.div>

          {/* Career Timeline - Simplified for mobile
          <motion.div
            variants={itemVariants}
            className="w-full mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              My Learning Path
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-medium text-gray-900">
                  2022 - Present
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold text-gray-800">
                    Professional Development
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Working on commercial projects while deepening my expertise
                    in system architecture, cloud services, and AI integration.
                    Focused on building scalable and maintainable solutions.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200"></div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-medium text-gray-900">
                  2019 - 2022
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold text-gray-800">
                    Skill Acquisition
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Immersed myself in learning modern development practices,
                    version control systems, and collaborative workflows. Built
                    a solid foundation in both frontend and backend
                    technologies.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200"></div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 font-medium text-gray-900">
                  2016 - 2019
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold text-gray-800">
                    Computer Science Education
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Formal education in computer science fundamentals,
                    algorithms, data structures, and software engineering
                    principles. Began exploring web development and programming
                    languages.
                  </p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
