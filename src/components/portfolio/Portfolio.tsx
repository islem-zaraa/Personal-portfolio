import React from 'react';
import GradientText from '../ui/GradientText';
import ProjectCard from './ProjectCard';

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
  }
];

const Portfolio = () => (
  <section id="work" className="py-20 bg-[#050505]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">
        <GradientText>Featured Projects</GradientText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;