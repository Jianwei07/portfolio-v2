// components/ProjectItem.tsx
import Image from "next/image";
import TechStackIcon from "./TechStackIcon";
import { Project } from "@/types/project";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover cursor-pointer"
          onClick={() =>
            window.open(project.liveUrl || project.githubUrl, "_blank")
          }
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechStackIcon key={tech} name={tech} size={20} />
          ))}
        </div>

        <div className="mt-6 flex gap-4">
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
