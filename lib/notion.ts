/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/notion.ts
import { Client } from "@notionhq/client";
import { Project } from "@/types/project";

// Initialize the Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Validate environment variables
if (!process.env.NOTION_API_KEY || !process.env.NOTION_PROJECTS_DB_ID) {
  throw new Error(
    "Missing required environment variables: NOTION_API_KEY or NOTION_PROJECTS_DB_ID"
  );
}

/**
 * Fetches projects from the Notion database.
 * @returns A list of projects with filtered and validated data.
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID!,
      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });

    // Map and validate the results
    return response.results.map(mapNotionPageToProject);
  } catch (error) {
    console.error("Error fetching projects from Notion:", error);
    throw new Error("Failed to fetch projects from Notion.");
  }
}

/**
 * Maps a Notion page to a Project object.
 * @param page - A single result from the Notion API.
 * @returns A validated Project object.
 */
function mapNotionPageToProject(page: any): Project {
  const properties = page.properties;

  // Extract and validate fields
  const title = properties.Title?.title?.[0]?.plain_text || "Untitled";
  const description = properties.Description?.rich_text?.[0]?.plain_text || "";
  const imageUrl = properties.Image?.files?.[0]?.file?.url || undefined;
  const githubUrl = properties.GithubURL?.url || undefined;
  const liveUrl = properties.LiveURL?.url || undefined;
  const technologies =
    properties.Technologies?.multi_select?.map((tech: any) => tech.name) || [];
  const order = properties.Order?.number || 0;

  return {
    id: page.id,
    title,
    description,
    imageUrl,
    githubUrl,
    liveUrl,
    technologies,
    order,
  };
}
