import React from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Shield, Server, Database, Lock, Cloud } from 'lucide-react';

const skills = [
  {
    name: "Network Infrastructure",
    level: 90,
    icon: Server,
    description: "Design and implementation of secure network architectures"
  },
  {
    name: "Network Security",
    level: 85,
    icon: Shield,
    description: "Advanced threat detection and prevention systems"
  },
  {
    name: "Database Management",
    level: 80,
    icon: Database,
    description: "Database optimization and security implementation"
  },
  {
    name: "Cybersecurity",
    level: 75,
    icon: Lock,
    description: "Penetration testing and vulnerability assessment"
  },
  {
    name: "Cloud Computing",
    level: 85,
    icon: Cloud,
    description: "Cloud infrastructure and security management"
  }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-[#050505]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">
        <GradientText>Technical Skills</GradientText>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-[#0A0A0A] rounded-xl p-6 h-full border border-[#1A1A1A] group-hover:border-[#FF512F]/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#FF512F] to-[#DD2476] group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-[#FF512F] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              </div>
              
              <div className="relative mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm text-[#FF512F]">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
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

export default Skills;