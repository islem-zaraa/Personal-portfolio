import React from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Shield, Server, Database, Lock, Cloud } from 'lucide-react';

const skills = [
  {
    name: "Network Infrastructure",
    level: 90,
    icon: Server,
    color: "from-[#FF512F] to-[#DD2476]"
  },
  {
    name: "Network Security",
    level: 85,
    icon: Shield,
    color: "from-[#FF512F] to-[#F09819]"
  },
  {
    name: "Database Management",
    level: 80,
    icon: Database,
    color: "from-[#DD2476] to-[#FF512F]"
  },
  {
    name: "Cybersecurity",
    level: 75,
    icon: Lock,
    color: "from-[#F09819] to-[#DD2476]"
  },
  {
    name: "Cloud Computing",
    level: 85,
    icon: Cloud,
    color: "from-[#FF512F] to-[#DD2476]"
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
            className="group relative bg-[#0A0A0A] rounded-xl p-6 hover:bg-[#111] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/10 to-[#DD2476]/10 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform`}>
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-medium text-white">{skill.name}</h3>
                </div>
                <span className="text-[#FF512F] font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;