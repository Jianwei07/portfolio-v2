// components/TechStackIcon.tsx
import Image from "next/image";
import { TECH_STACKS, isValidTechStack } from "@/config/tech-stack";

interface TechStackIconProps {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
}

export default function TechStackIcon({
  name,
  size = 28,
  showLabel = true,
  className = "",
}: TechStackIconProps) {
  if (!isValidTechStack(name)) {
    return null; // Or a fallback icon
  }

  const tech = TECH_STACKS[name];

  return (
    <div className={`group relative ${className}`}>
      <div
        className="relative rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100 transition-colors flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src={tech.icon}
          alt={`${name} icon`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {showLabel && (
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
}
