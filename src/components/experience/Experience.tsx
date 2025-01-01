import React from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: "Network Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Managing and optimizing network infrastructure, implementing security protocols, and conducting regular system audits."
  },
  {
    title: "Junior Security Analyst",
    company: "CyberGuard Systems",
    period: "2021 - 2022",
    description: "Monitored network traffic, performed vulnerability assessments, and assisted in incident response procedures."
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">
        <GradientText>Professional Experience</GradientText>
      </h2>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF512F] via-[#DD2476] to-transparent" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-16 group"
            >
              <div className="absolute left-6 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#FF512F] group-hover:scale-125 transition-transform" />
              
              <div className="bg-[#0A0A0A] rounded-xl p-6 hover:bg-[#111] transition-all duration-300 group-hover:translate-x-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#FF512F] to-[#DD2476]">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#FF512F] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-[#FF512F]">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {exp.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-[#FF512F] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;