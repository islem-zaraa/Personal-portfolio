import React, { useState } from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowUpRight, Building, Award, Users } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education' | 'certificate';
  icon: React.ElementType;
  color: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Network Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Managing and optimizing network infrastructure, implementing security protocols, and conducting regular system audits.",
    achievements: [
      "Improved network performance by 40%",
      "Implemented zero-trust security architecture",
      "Led team of 5 junior engineers",
      "Reduced downtime by 75% through proactive monitoring"
    ],
    type: 'work',
    icon: Building,
    color: "from-[#FF512F] to-[#DD2476]"
  },
  {
    title: "Cybersecurity Certification",
    company: "CompTIA Security+",
    period: "2022",
    description: "Completed advanced certification in cybersecurity fundamentals, network security, and threat assessment.",
    achievements: [
      "Passed with score of 95%",
      "Specialized in penetration testing",
      "Recognized for excellence in practical assessments"
    ],
    type: 'certificate',
    icon: Award,
    color: "from-[#4776E6] to-[#8E54E9]"
  },
  {
    title: "Junior Security Analyst",
    company: "CyberGuard Systems",
    period: "2021 - 2022",
    location: "Boston, MA",
    description: "Monitored network traffic, performed vulnerability assessments, and assisted in incident response procedures.",
    achievements: [
      "Detected and prevented 50+ security threats",
      "Developed automated security scanning tools",
      "Reduced incident response time by 60%",
      "Contributed to company security policy updates"
    ],
    type: 'work',
    icon: Users,
    color: "from-[#FF512F] to-[#DD2476]"
  }
];

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'certificate'>('all');
  
  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  return (
    <section id="experience" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-[#FF512F] opacity-5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#DD2476] opacity-5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Professional Experience</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey through my professional career in network security and engineering
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            All Experience
          </button>
          <button
            onClick={() => setActiveFilter('work')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'work'
                ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveFilter('certificate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === 'certificate'
                ? 'bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white shadow-lg shadow-[#4776E6]/20'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            Certifications
          </button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative mb-12 last:mb-0"
            >
              {/* Timeline connector */}
              {index !== filteredExperiences.length - 1 && (
                <div className="absolute left-[45px] top-[85px] bottom-[-40px] w-px bg-gradient-to-b from-[#FF512F] to-transparent" />
              )}

              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline dot */}
                <div className="relative">
                  <div className={`sticky top-8 w-24 h-24 rounded-2xl bg-[#0D0D0D] border border-[#1A1A1A] p-6 group-hover:bg-gradient-to-br ${exp.color} group-hover:bg-opacity-10 transition-all duration-500`}>
                    <exp.icon className={`w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`} />
                  </div>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 z-0`}></div>
                    <div className="relative bg-[#0A0A0A] rounded-2xl p-8 border border-[#1A1A1A] group-hover:border-transparent transition-colors z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF512F] group-hover:to-[#DD2476] transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-[#1A1A1A] text-white`}>
                          <Building className="w-3 h-3" /> {exp.company}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-[#1A1A1A] text-gray-300">
                            {exp.location}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full text-white ${
                          exp.type === 'work' 
                            ? 'bg-gradient-to-r from-[#FF512F]/20 to-[#DD2476]/20' 
                            : exp.type === 'certificate'
                              ? 'bg-gradient-to-r from-[#4776E6]/20 to-[#8E54E9]/20'
                              : 'bg-[#1A1A1A]'
                        }`}>
                          {exp.type === 'work' ? 'Work Experience' : exp.type === 'certificate' ? 'Certification' : 'Education'}
                        </span>
                      </div>

                      <p className="text-gray-400 mb-6">{exp.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-300 mb-3">Key Achievements</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2 text-gray-300 group-hover:text-white transition-colors">
                              <ArrowUpRight className="w-4 h-4 text-[#FF512F] shrink-0 mt-0.5" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default Experience;