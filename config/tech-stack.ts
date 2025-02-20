// config/tech-stacks.ts
export const TECH_STACKS = {
  // Frontend
  React: {
    icon: "/icons/react.svg",
    category: "frontend",
  },
  "Next.js": {
    icon: "/icons/next-js.svg",
    category: "frontend",
  },
  "Material UI": {
    icon: "/icons/mui.svg",
    category: "frontend",
  },
  Tailwindcss: {
    icon: "/icons/tailwindcss.svg",
    category: "frontend",
  },
  "Styled Components": {
    icon: "/icons/styled-components.svg",
    category: "frontend",
  },

  // Backend
  "Node.js": {
    icon: "/icons/nodejs.svg",
    category: "backend",
  },
  Express: {
    icon: "/icons/expressjs.svg",
    category: "backend",
  },
  "Spring Boot": {
    icon: "/icons/springboot.svg",
    category: "backend",
  },
  Flask: {
    icon: "/icons/flask.svg",
    category: "backend",
  },
  NextJS: {
    icon: "/icons/nextjs.svg",
    category: "backend",
  },
  Langchain: {
    icon: "/icons/langchain-text.svg",
    category: "backend",
  },
  HuggingFace: {
    icon: "/icons/huggingface.svg",
    category: "backend",
  },

  // Languages
  JavaScript: {
    icon: "/icons/javascript.svg",
    category: "language",
  },
  TypeScript: {
    icon: "/icons/typescript.svg",
    category: "language",
  },
  Java: {
    icon: "/icons/java.svg",
    category: "language",
  },
  Dart: {
    icon: "/icons/dart.svg",
    category: "language",
  },

  Python: {
    icon: "/icons/python.svg",
    category: "language",
  },

  // Mobile
  Flutter: {
    icon: "/icons/flutter.svg",
    category: "mobile",
  },
  "Android Studio": {
    icon: "/icons/android.svg",
    category: "mobile",
  },

  // Database
  MongoDB: {
    icon: "/icons/mongodb.svg",
    category: "database",
  },
  Oracle: {
    icon: "/icons/oracle.svg",
    category: "database",
  },
  Firebase: {
    icon: "/icons/firebase.svg",
    category: "database",
  },
  Supabase: {
    icon: "/icons/supabase.svg",
    category: "database",
  },
  Postgres: {
    icon: "/icons/Postgres.svg",
    category: "database",
  },

  // Tools & Platforms
  AWS: {
    icon: "/icons/aws.svg",
    category: "cloud",
  },
  Vercel: {
    icon: "/icons/vercel.svg",
    category: "cloud",
  },
  GitHub: {
    icon: "/icons/github.svg",
    category: "tools",
  },
  Vite: {
    icon: "/icons/vitejs.svg",
    category: "tools",
  },
  PowerShell: {
    icon: "/icons/powershell.svg",
    category: "tools",
  },
} as const;

export type TechStackName = keyof typeof TECH_STACKS;
export type TechStackCategory = (typeof TECH_STACKS)[TechStackName]["category"];

// Utility function to validate tech stack names
export function isValidTechStack(name: string): name is TechStackName {
  return name in TECH_STACKS;
}
