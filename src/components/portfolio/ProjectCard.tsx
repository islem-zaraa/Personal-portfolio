import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

const ProjectCard = ({ title, description, image, tags, github, live }: ProjectCardProps) => (
  <Card className="group transition-all duration-500 hover:translate-y-[-4px]">
    <div className="aspect-video overflow-hidden rounded-lg mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs rounded-full bg-[#1A1A1A] text-gray-400"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF512F] transition-colors"
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF512F] transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </a>
    </div>
  </Card>
);

export default ProjectCard;