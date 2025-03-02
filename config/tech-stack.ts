// config/tech-stacks.ts
export const TECH_STACKS = {
  // Frontend
  React: {
    icon: "/icons/react.svg",
    category: "frontend",
  },
  MaterialUI: {
    icon: "/icons/Material UI.svg",
    category: "frontend",
  },
  Tailwindcss: {
    icon: "/icons/tailwindcss.svg",
    category: "frontend",
  },
  CSS: {
    icon: "/icons/CSS3.svg",
    category: "frontend",
  },
  HTML: {
    icon: "/icons/html.svg",
    category: "frontend",
  },

  Figma: {
    icon: "/icons/Figma.svg",
    category: "frontend",
  },
  "Styled Components": {
    icon: "/icons/styled-components.svg",
    category: "frontend",
  },

  // Backend
  NodeJS: {
    icon: "/icons/nodejs.svg",
    category: "backend",
  },
  Express: {
    icon: "/icons/expressjs.svg",
    category: "backend",
  },
  Springboot: {
    icon: "/icons/Spring.svg",
    category: "backend",
  },
  Flask: {
    icon: "/icons/flask.svg",
    category: "backend",
  },
  FastAPI: {
    icon: "/icons/FastAPI.svg",
    category: "backend",
  },
  NextJS: {
    icon: "/icons/nextjs.svg",
    category: "backend",
  },
  Langchain: {
    icon: "/icons/langchain-color.svg",
    category: "backend",
  },
  HuggingFace: {
    icon: "/icons/huggingface.svg",
    category: "backend",
  },
  PyTorch: {
    icon: "/icons/PyTorch.svg",
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
    icon: "/icons/MongoDB.svg",
    category: "database",
  },
  ChromaDB: {
    icon: "/icons/chromadb.svg",
    category: "database",
  },
  Oracle: {
    icon: "/icons/oracle.svg",
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
  Firebase: {
    icon: "/icons/Firebase.svg",
    category: "database",
  },

  // DevOps & Platforms
  AWS: {
    icon: "/icons/aws.svg",
    category: "cloud",
  },
  Vercel: {
    icon: "/icons/vercel.svg",
    category: "cloud",
  },
  Github: {
    icon: "/icons/github.svg",
    category: "DevOps",
  },
  Bitbucket: {
    icon: "/icons/BitBucket.svg",
    category: "DevOps",
  },
  Confluence: {
    icon: "/icons/confluence.svg",
    category: "DevOps",
  },
  Jira: {
    icon: "/icons/jira.svg",
    category: "DevOps",
  },
  Miro: {
    icon: "/icons/miro.svg",
    category: "DevOps",
  },
  Git: {
    icon: "/icons/git.svg",
    category: "DevOps",
  },
  Vite: {
    icon: "/icons/vitejs.svg",
    category: "DevOps",
  },
  PowerShell: {
    icon: "/icons/powershell.svg",
    category: "DevOps",
  },
  Linux: {
    icon: "/icons/linux.svg",
    category: "DevOps",
  },
  Docker: {
    icon: "/icons/docker.svg",
    category: "DevOps",
  },
  Kubernetes: {
    icon: "/icons/Kubernetes.svg",
    category: "DevOps",
  },

  // Others

  Threads: {
    icon: "/icons/Threads.svg",
    category: "Others",
  },
  Google: {
    icon: "/icons/google.svg",
    category: "Others",
  },
  GoogleAnalytics: {
    icon: "/icons/google-analytics.svg",
    category: "Others",
  },
} as const;

export type TechStackName = keyof typeof TECH_STACKS;
export type TechStackCategory = (typeof TECH_STACKS)[TechStackName]["category"];

// Utility function to validate tech stack names
export function isValidTechStack(name: string): name is TechStackName {
  return name in TECH_STACKS;
}
