/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Reusable Tech Icon Component
const TechIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="group relative">
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"
      >
        <Image
          src={icon}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="opacity-95 group-hover:opacity-100"
          aria-label={`${name} logo`}
        />
      </motion.div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStacks = [
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "HuggingFace", icon: "/icons/huggingface.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-48 h-48 lg:w-64 lg:h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl transform -rotate-6" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/jayden_dp.png"
                alt="Jayden Liaw"
                layout="fill"
                objectFit="cover"
                className="transform"
                priority
                aria-label="Profile picture of Jayden Liaw"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-public-sans"
            >
              Software Engineer & Tech Enthusiast
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 max-w-2xl"
            >
              Hello! I`m Jayden, a Full-Stack Engineer passionate about building
              impactful solutions. Based in Singapore, I specialize in software
              architecture and modern development practices.
            </motion.p>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 max-w-2xl">
              Currently exploring Applied AI, implementing and adopting
              artificial intelligence in existing solutions to create more
              intelligent and adaptive systems.
            </p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              <motion.a
                whileHover={{ y: -2 }}
                href="https://www.linkedin.com/in/liawjianwei/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com/Jianwei07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://www.threads.net/@jwayjpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="Threads Profile"
              >
                <div className="w-6 h-6 relative">
                  <Image
                    src="/icons/threads.svg"
                    alt="Threads"
                    layout="fill"
                    objectFit="contain"
                    className="text-gray-600 hover:text-gray-900"
                  />
                </div>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="mailto:liawjianwei@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
            >
              {techStacks.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <TechIcon name={tech.name} icon={tech.icon} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
