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
}

const ProjectCard = ({ title, description, image, tags, github, live }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group bg-[#0A0A0A] rounded-xl overflow-hidden border border-[#1A1A1A] hover:border-[#FF512F]/50 transition-all duration-300"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#FF512F] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
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
      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF512F] transition-colors"
        >
          <Github className="w-4 h-4" />
          Code
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF512F] transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;