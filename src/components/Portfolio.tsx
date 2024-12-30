import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform with real-time features',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    tags: ['Next.js', 'Firebase', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Project Three',
    description: 'AI-powered content management system',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2',
    tags: ['Python', 'React', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 hover:border-[#FF512F]/50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-[#FF512F] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-[#FF512F] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;