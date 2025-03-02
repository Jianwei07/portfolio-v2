/* eslint-disable react/no-unescaped-entities */
// components/AboutIntro.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <div className="py-12 sm:py-16 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-6">
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I'm Jayden Liaw
        </h1>
        <p className="text-lg text-gray-700">
          I'm a passionate software developer with a keen interest in computer
          science, full-stack development, and innovative solutions. Welcome to
          my journey.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutIntro;
