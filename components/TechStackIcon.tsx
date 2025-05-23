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
    return null; // Optionally show a placeholder icon or just skip
  }

  const tech = TECH_STACKS[name];

  return (
    <div className={`group relative ${className}`}>
      <div
        className="rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src={tech.icon}
          alt={`${name} icon`}
          width={size}
          height={size}
          className="object-contain"
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
