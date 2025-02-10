import Image from "next/image";
import TechStackIcon from "./TechStackIcon";
import { Project } from "@/types/project";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  // Defensive check to ensure project is defined
  if (!project) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <p className="p-6 text-gray-600">Project data is unavailable.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl || "/icons/placeholder.png"} // Use fallback image
          alt={project.title || "Project Image"}
          fill
          className="object-cover cursor-pointer"
          onClick={() =>
            window.open(project.liveUrl || project.githubUrl || "#", "_blank")
          }
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {project.title || "Untitled Project"}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {project.description || "No description available."}
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.length > 0 ? (
            project.technologies.map((tech) => (
              <TechStackIcon key={tech} name={tech} size={20} />
            ))
          ) : (
            <span className="text-gray-500">No technologies listed.</span>
          )}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {/* GitHub Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={16}
                height={16}
              />
              View Code
            </a>
          )}

          {/* Live Demo Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <Image
                src="/icons/external-link.svg"
                alt="Live Demo"
                width={16}
                height={16}
              />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
