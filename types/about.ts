// types/about.ts
import { TechStackName } from "@/config/tech-stack";

export interface AboutData {
  id: string;
  title: string;
  description: string[];
  technologies: TechStackName[];
  imageSrc: string;
  altText: string;
  order: number;
}

export interface NotionAboutResponse {
  id: string;
  properties: {
    Title: {
      title: Array<{ plain_text: string }>;
    };
    Description: {
      rich_text: Array<{ plain_text: string }>;
    };
    Technologies: {
      multi_select: Array<{ name: string }>;
    };
    Image: {
      files: Array<{ file: { url: string } }>;
    };
    AltText: {
      rich_text: Array<{ plain_text: string }>;
    };
    Order: {
      number: number;
    };
  };
}
