import React, { useState } from 'react';
import GradientText from '../ui/GradientText';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Network Security Dashboard',
    description: 'Real-time network monitoring system with threat detection and visualization capabilities',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Network Engineering', 'Security', 'React'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Advanced Database Manager',
    description: 'Comprehensive solution for database management with performance optimization tools',
    image: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Database', 'SQL', 'Backend'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Responsive Portfolio Website',
    description: 'Modern portfolio website with responsive design and interactive elements',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Frontend', 'React', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Secure VPN Solution',
    description: 'Enterprise-level VPN implementation with advanced encryption and access controls',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Network Engineering', 'Security', 'Infrastructure'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Data Visualization Platform',
    description: 'Interactive dashboard for visualizing complex datasets with real-time updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Data', 'Frontend', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'API Gateway Service',
    description: 'Centralized API management system with authentication and rate limiting',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Backend', 'API', 'Security'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  // Limit projects to 3 initially
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  
  return (
    <section id="work" className="py-20 bg-[#050505] overflow-hidden">
    <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
        <GradientText>Featured Projects</GradientText>
      </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore a selection of my professional projects that demonstrate my expertise
          </p>
        </motion.div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectCard 
                {...project} 
                isHovered={hoveredProject === index}
              />
            </motion.div>
        ))}
      </div>
        
        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#FF512F] to-[#DD2476] hover:shadow-lg hover:shadow-[#FF512F]/20 transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </button>
          </motion.div>
        )}
    </div>
  </section>
);
};

export default Portfolio;