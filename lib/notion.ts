// lib/notion.ts
import { Client } from "@notionhq/client";
import { Project, NotionProjectResponse } from "@/types/project";
import { isValidTechStack } from "@/config/tech-stacks";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getProjects(): Promise<Project[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DB_ID!,
    sorts: [
      {
        property: "Order",
        direction: "ascending",
      },
    ],
  });

  return response.results.map((page: NotionProjectResponse) => {
    // Filter out any tech stacks that aren't in our config
    const technologies = page.properties.Technologies.multi_select
      .map((tech) => tech.name)
      .filter(isValidTechStack);

    return {
      id: page.id,
      title: page.properties.Title.title[0].plain_text,
      description: page.properties.Description.rich_text[0].plain_text,
      imageUrl: page.properties.Image.files[0]?.file.url || "",
      githubUrl: page.properties.GithubURL.url || "",
      liveUrl: page.properties.LiveURL?.url || "",
      technologies,
      order: page.properties.Order.number,
    };
  });
}
