"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TechStackIcon from "./TechStackIcon";
import { Project } from "@/types/project";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const defaultImage = "/icons/placeholder.png";
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (projectId: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  if (!projects || projects.length === 0) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
        <AlertCircle className="h-5 w-5" />
        <AlertDescription>
          Unable to fetch projects. Please check back later or contact me below.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects
        .sort((a, b) => a.order - b.order)
        .map((project) => (
          <Card
            key={project.id}
            className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <div className="relative w-full">
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={project.imageUrl || defaultImage}
                    alt={`${project.title} thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute top-0 left-0 w-full h-full object-contain bg-secondary/10"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== defaultImage) {
                        target.src = defaultImage;
                      }
                    }}
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow p-4 space-y-3">
              <CardTitle className="text-lg font-bold line-clamp-1">
                {project.title}
              </CardTitle>

              <div className="space-y-2">
                <p
                  className={`text-sm text-muted-foreground ${
                    expandedDescriptions[project.id] ? "" : "line-clamp-2"
                  }`}
                >
                  {project.description}
                </p>
                {project.description.length > 100 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-xs p-0 h-auto hover:bg-transparent hover:text-primary"
                    onClick={() => toggleDescription(project.id)}
                  >
                    {expandedDescriptions[project.id] ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        <span>Show less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        <span>Show more</span>
                      </>
                    )}
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-secondary/20 rounded-lg p-2 hover:bg-secondary/30 transition-colors"
                  >
                    <TechStackIcon name={tech} className="h-7 w-7" />
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-3 p-4 pt-0">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 hover:bg-secondary h-12"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="h-5 w-5" />
                  <span className="font-semibold">Code</span>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 h-12"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-semibold">Live Demo</span>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
