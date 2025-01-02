import React from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: "Network Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Managing and optimizing network infrastructure, implementing security protocols, and conducting regular system audits.",
    achievements: [
      "Improved network performance by 40%",
      "Implemented zero-trust security architecture",
      "Led team of 5 junior engineers"
    ]
  },
  {
    title: "Junior Security Analyst",
    company: "CyberGuard Systems",
    period: "2021 - 2022",
    description: "Monitored network traffic, performed vulnerability assessments, and assisted in incident response procedures.",
    achievements: [
      "Detected and prevented 50+ security threats",
      "Developed automated security scanning tools",
      "Reduced incident response time by 60%"
    ]
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF512F] opacity-5 blur-[100px] rounded-full" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DD2476] opacity-5 blur-[100px] rounded-full" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Professional Experience</GradientText>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A journey through my professional career in network security and engineering
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative mb-12 last:mb-0"
          >
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[45px] top-[85px] bottom-[-40px] w-px bg-gradient-to-b from-[#FF512F] to-transparent" />
            )}

            <div className="flex gap-8">
              {/* Timeline dot */}
              <div className="relative">
                <div className="sticky top-8 w-24 h-24 rounded-2xl bg-[#1A1A1A] p-6 group-hover:bg-[#FF512F]/10 transition-colors duration-300">
                  <Briefcase className="w-12 h-12 text-[#FF512F]" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF512F]" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#1A1A1A]/50 rounded-2xl p-8 hover:bg-[#1A1A1A] transition-colors duration-300 group-hover:translate-x-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#FF512F] transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-[#FF512F] mb-4">{exp.company}</p>
                <p className="text-gray-400 mb-6">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#FF512F]" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;