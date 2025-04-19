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
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FF512F] transition-colors">
            {title}
          </h3>
          <p className="text-white text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[#1A1A1A] text-white group-hover:bg-gradient-to-r from-[#FF512F]/20 to-[#DD2476]/20 group-hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#252525] text-white hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#DD2476] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FF512F]/30 border border-[#333] hover:border-transparent"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#252525] text-white hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#DD2476] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FF512F]/30 border border-[#333] hover:border-transparent"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;