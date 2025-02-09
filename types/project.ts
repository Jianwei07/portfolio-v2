// types/project.ts
import { TechStackName } from "@/config/tech-stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: TechStackName[]; // Now uses the type from tech-stacks config
  order: number;
}

// If you need runtime type checking for the Notion response
export interface NotionProjectResponse {
  id: string;
  properties: {
    Title: {
      title: Array<{ plain_text: string }>;
    };
    Description: {
      rich_text: Array<{ plain_text: string }>;
    };
    Image: {
      files: Array<{ file: { url: string } }>;
    };
    GithubURL: {
      url: string;
    };
    LiveURL?: {
      url: string;
    };
    Technologies: {
      multi_select: Array<{ name: string }>;
    };
    Order: {
      number: number;
    };
  };
}
