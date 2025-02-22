"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { Github, Linkedin } from "lucide-react";

// Reusable Tech Icon Component
const TechIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="group relative">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center transition-transform transform hover:-translate-y-1 hover:shadow-md duration-300">
        <Image
          src={icon}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="opacity-75 group-hover:opacity-100"
          aria-label={`${name} logo`}
        />
      </div>
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
    { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
    { name: "Linux", icon: "/icons/linux.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div
        className={`max-w-5xl mx-auto w-full transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl transform -rotate-6" />
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/jayden_dp.png"
                alt="Jayden Liaw"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform hover:scale-105 duration-500"
                priority
                aria-label="Profile picture of Jayden Liaw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-public-sans">
              Software Engineer & Tech Enthusiast
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 max-w-2xl">
              Hello! I`m Jayden, a Full-Stack Engineer passionate about building
              impactful solutions. Based in Singapore, I specialize in software
              architecture and modern development practices.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/liawjianwei/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-8 h-8 text-gray-600 hover:text-gray-900" />
              </a>
              <a
                href="https://github.com/Jianwei07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-8 h-8 text-gray-600 hover:text-gray-900" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              {techStacks.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
