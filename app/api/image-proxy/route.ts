/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// filepath: c:\Users\liawj\Documents\Github\portfolio-v2\app\api\image-proxy\route.ts
import { NextRequest, NextResponse } from "next/server";

// List of allowed image domains to prevent misuse of the proxy
const ALLOWED_DOMAINS = [
  "prod-files-secure.s3.us-west-2.amazonaws.com",
  "file.notion.so",
  // Add any other domains Notion might use for files if you discover them
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return new NextResponse(
      JSON.stringify({ error: "Missing image URL parameter" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let urlObject: URL;
  try {
    urlObject = new URL(imageUrl);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Invalid image URL format" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Validate the domain
  if (!ALLOWED_DOMAINS.includes(urlObject.hostname)) {
    console.warn(
      `Image proxy request blocked for disallowed domain: ${urlObject.hostname}`
    );
    return new NextResponse(
      JSON.stringify({ error: "Image domain not allowed" }),
      {
        status: 403, // Forbidden
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Fetch the image from the original source (Notion/AWS)
    const response = await fetch(imageUrl, {
      headers: {
        // Avoid forwarding sensitive headers from the original request
        "User-Agent": "JaydenPortfolio-ImageProxy/1.0", // Identify your proxy
      },
      signal: AbortSignal.timeout(20000), // Increased timeout to 20 seconds (20000 ms)
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch image from source: ${response.status} ${response.statusText} for URL: ${imageUrl}`
      );
      return new NextResponse(
        JSON.stringify({
          error: `Failed to fetch image: ${response.statusText}`,
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Get content type and image buffer
    const contentType =
      response.headers.get("content-type") || "application/octet-stream";
    const imageBuffer = await response.arrayBuffer();

    // Return the image data with appropriate headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Cache aggressively: public, 1 week immutable
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  } catch (error: any) {
    if (error.name === "TimeoutError") {
      console.error(`Image proxy timeout for URL: ${imageUrl}`);
      return new NextResponse(
        JSON.stringify({ error: "Image fetch timed out" }),
        { status: 504, headers: { "Content-Type": "application/json" } }
      ); // Gateway Timeout
    }
    console.error("Image proxy internal error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
