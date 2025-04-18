import React from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Shield, Server, Database, Lock, Cloud, Code, Globe, Layout, Monitor, PenTool } from 'lucide-react';

const skills = [
  {
    name: "Network Infrastructure",
    level: 90,
    icon: Server,
    description: "Design and implementation of secure network architectures",
    category: "Infrastructure"
  },
  {
    name: "Network Security",
    level: 85,
    icon: Shield,
    description: "Advanced threat detection and prevention systems",
    category: "Security"
  },
  {
    name: "Database Management",
    level: 80,
    icon: Database,
    description: "Database optimization and security implementation",
    category: "Backend"
  },
  {
    name: "Cybersecurity",
    level: 75,
    icon: Lock,
    description: "Penetration testing and vulnerability assessment",
    category: "Security"
  },
  {
    name: "Cloud Computing",
    level: 85,
    icon: Cloud,
    description: "Cloud infrastructure and security management",
    category: "Infrastructure"
  },
  {
    name: "Frontend Development",
    level: 88,
    icon: Layout,
    description: "Creating responsive and interactive user interfaces",
    category: "Frontend"
  },
  {
    name: "Backend Development",
    level: 82,
    icon: Code,
    description: "Building scalable server-side applications",
    category: "Backend"
  },
  {
    name: "Web Technologies",
    level: 85,
    icon: Globe,
    description: "Modern web frameworks and technologies",
    category: "Frontend"
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  
  const categories = [...new Set(skills.map(skill => skill.category))];
  
  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  return (
    <section id="skills" className="py-20 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Technical Skills</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various domains.
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
            All
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
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
              <div className="relative bg-[#0A0A0A] rounded-2xl p-6 border border-[#1A1A1A] h-full flex flex-col group-hover:border-transparent transition-colors z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#FF512F]/10 to-[#DD2476]/10 border border-[#FF512F]/20 group-hover:from-[#FF512F]/20 group-hover:to-[#DD2476]/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-[#FF512F]" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#1A1A1A] text-gray-400 rounded-full mb-2">
                      {skill.category}
                    </span>
                    <h3 className="font-semibold text-white text-lg group-hover:text-[#FF512F] transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6">{skill.description}</p>
                
                <div className="mt-auto">
                  <div className="flex justify-between mb-2 items-center">
                    <span className="text-sm text-gray-500">Proficiency</span>
                    <span className="text-sm font-medium text-white bg-[#1A1A1A] px-2 py-0.5 rounded">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF512F] to-[#DD2476]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
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

export default Skills;