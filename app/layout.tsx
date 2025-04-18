import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define base URL for metadata
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jayden-portfolio-v2.vercel.app"; // Fallback to your production URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Important for resolving relative image URLs
  title: "Jayden Liaw | Software Engineer Portfolio",
  description:
    "Explore Jayden Liaw's software engineering projects, skills, and experience. Portfolio powered by Notion CMS.",
  openGraph: {
    title: "Jayden Liaw | Software Engineer Portfolio",
    description:
      "Explore Jayden Liaw's software engineering projects and skills.",
    url: siteUrl,
    siteName: "Jayden Liaw Portfolio",
    images: [
      {
        url: "/images/jayden_dp.png", // Correct path relative to /public
        width: 1200, // Ensure jayden_dp.png is ideally this size
        height: 630, // Ensure jayden_dp.png is ideally this size
        alt: "Jayden Liaw Portfolio Preview", // Add descriptive alt text
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayden Liaw | Software Engineer Portfolio",
    description:
      "Explore Jayden Liaw's software engineering projects and skills.",
    images: [`${siteUrl}/images/jayden_dp.png`], // Absolute URL for Twitter
  },
  // Add other relevant metadata like icons/manifest if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Notion's image domains */}
        <link
          rel="preconnect"
          href="https://prod-files-secure.s3.us-west-2.amazonaws.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://file.notion.so"
          crossOrigin="anonymous"
        />
        {/* Add other head elements like favicons here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
