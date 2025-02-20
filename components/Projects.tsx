"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TechStackIcon from "./TechStackIcon";
import { Project } from "@/types/project";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const defaultImage = "/icons/placeholder.png";

  if (!projects || projects.length === 0) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
        <AlertCircle className="h-5 w-5" />
        <AlertDescription>
          No projects available at the moment. Please check back later.
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
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.imageUrl || defaultImage}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== defaultImage) {
                      target.src = defaultImage; // Set fallback image only once
                    }
                  }}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl font-bold mb-3 line-clamp-1">
                {project.title}
              </CardTitle>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-secondary/30 rounded-md p-2"
                  >
                    <TechStackIcon name={tech} className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 p-6 pt-0">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="flex-1 flex items-center gap-2 hover:bg-secondary"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">Code</span>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  className="flex-1 flex items-center gap-2 bg-primary hover:bg-primary/90"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-medium">Demo</span>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
