import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  isHovered?: boolean;
}

const ProjectCard = ({ title, description, image, tags, github, live, isHovered }: ProjectCardProps) => (
  <div className="relative group h-full">
    {/* Gradient border effect */}
    <div 
      className={`absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } blur-sm transition-all duration-300`}
    ></div>
    
    <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#1A1A1A] h-full flex flex-col group-hover:border-transparent transition-colors z-10">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#FF512F] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[#1A1A1A] text-gray-400 group-hover:bg-[#FF512F]/10 group-hover:text-[#FF512F] transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#1A1A1A] text-gray-300 hover:bg-[#FF512F]/90 hover:text-white transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#1A1A1A] text-gray-300 hover:bg-[#FF512F]/90 hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;