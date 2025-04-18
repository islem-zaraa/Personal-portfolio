import React, { useState } from 'react';
import { ExternalLink, Github, Code, LucideIcon, BarChart, ShoppingCart, Database, Monitor, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: 'Modern E-commerce Platform',
    description: 'Mobile-first e-commerce platform with real-time features and secure payment processing',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    tags: ['Next.js', 'Firebase', 'Stripe'],
    category: 'Web App',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: ShoppingCart
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard for enterprise analytics and reporting',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2',
    tags: ['React', 'D3.js', 'Node.js'],
    category: 'Data Visualization',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: BarChart
  },
  {
    title: 'Secure Database Manager',
    description: 'Advanced database management system with robust security features and optimized performance',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['PostgreSQL', 'Express', 'TypeScript'],
    category: 'Backend',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: Database
  },
  {
    title: 'Frontend Framework',
    description: 'Lightweight component library for building scalable frontend applications',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613',
    tags: ['React', 'Storybook', 'Styled Components'],
    category: 'UI Library',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: Code
  },
  {
    title: 'Security Monitoring System',
    description: 'Real-time security monitoring tool with advanced threat detection algorithms',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42',
    tags: ['Python', 'TensorFlow', 'GraphQL'],
    category: 'Security',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: AlertCircle
  },
  {
    title: 'Responsive Web Application',
    description: 'Full-featured web application with responsive design and cross-platform compatibility',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['Vue.js', 'Tailwind', 'Laravel'],
    category: 'Web App',
    github: 'https://github.com',
    live: 'https://example.com',
    icon: Monitor
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <section id="work" className="py-20 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my latest work showcasing my skills in various technologies and domains
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 z-0"></div>
              
              <div className="relative bg-[#0A0A0A] rounded-2xl h-full flex flex-col border border-[#1A1A1A] group-hover:border-transparent transition-colors z-10">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80"></div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full flex items-center gap-2">
                    <project.icon className="w-3.5 h-3.5 text-[#FF512F]" />
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF512F] transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-[#1A1A1A] text-gray-300 border border-[#333333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white py-2 px-4 rounded-full bg-[#1A1A1A] hover:bg-[#FF512F]/20 transition-colors duration-300 hover:text-[#FF512F]"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white py-2 px-4 rounded-full bg-gradient-to-r from-[#FF512F] to-[#DD2476] hover:shadow-lg hover:shadow-[#FF512F]/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;