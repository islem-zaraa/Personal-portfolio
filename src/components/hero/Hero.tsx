import React from 'react';
import { 
  Code,
  Container,
  FileCode,
  Github,
  LayoutGrid,
  Layers,
  Monitor,
  Smartphone,
  Terminal,
  GitBranch,
  Cpu,
  Braces,
  Brackets,
  Bug,
  Database, 
  Hash
} from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';
import HeroButton from './HeroButton';
import FloatingIcon from './FloatingIcon';
import BackgroundGrid from './BackgroundGrid';
import TypeWriter from '../ui/TypeWriter';

const Hero = () => {
  // Simple array of phrases that cycle through the typewriter
  const titles = [
    "Network Engineer & Cybersecurity Analyst",
    "Professional Bug Creator & Fixer",
    "Coffee to Code Converter",
    "404: Sleep Not Found",
    "Turning Coffee into Code Since 2015",
    "Chief Keyboard Smasher",
    "Sudo Make Me a Sandwich Expert",
    "I Speak Fluent Binary... 01101010/01101011",
    "Professional Googler with Tech Skills"
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: custom * 0.1
      }
    })
  };

  return (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
    <BackgroundGrid />
    
    <div className="glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
    <div className="glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

      {/* Layer 1 - Original icons */}
      <FloatingIcon Icon={Code} position="top-1/4 left-1/4" delay={0} />
      <FloatingIcon Icon={Terminal} position="top-1/3 right-1/4" delay={0.5} />
      <FloatingIcon Icon={Github} position="bottom-1/4 left-1/3" delay={1} />
      <FloatingIcon Icon={FileCode} position="top-1/2 right-1/3" delay={1.5} />
      <FloatingIcon Icon={LayoutGrid} position="bottom-1/3 right-1/4" delay={2} />
      <FloatingIcon Icon={Layers} position="top-2/3 left-1/4" delay={2.5} />
      <FloatingIcon Icon={Cpu} position="bottom-1/4 right-1/3" delay={3} />
      <FloatingIcon Icon={Container} position="top-1/4 right-1/2" delay={3.5} />
      <FloatingIcon Icon={GitBranch} position="bottom-1/2 left-1/3" delay={4} />
      <FloatingIcon Icon={Smartphone} position="top-1/3 left-2/3" delay={4.5} />

      {/* Layer 2 - Additional icons */}
      <FloatingIcon Icon={Braces} position="top-1/5 left-1/5" delay={1.2} />
      <FloatingIcon Icon={Hash} position="bottom-1/5 right-1/5" delay={2.3} />
      <FloatingIcon Icon={Brackets} position="top-3/5 right-2/5" delay={3.4} />
      <FloatingIcon Icon={Bug} position="bottom-2/5 left-2/5" delay={0.7} />
      <FloatingIcon Icon={Monitor} position="top-3/4 left-1/4" delay={2.8} />
      <FloatingIcon Icon={Database} position="bottom-3/4 right-1/3" delay={3.9} />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
          <GradientText>Islem Zaraa</GradientText>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-4xl text-gray-400 mb-4 font-light min-h-16"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={1}
          >
            <TypeWriter 
              texts={titles} 
              typingSpeed={80} 
              deletingSpeed={40}
              delayBetween={2000}
            />
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
          >
            {[
              "Network Engineering", 
              "Database Administration", 
              "Full-stack Dev"
            ].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#191919] to-[#0D0D0D] text-gray-300 text-sm border border-[#333] shadow-lg"
              >
                {skill}
          </span>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={3}
          >
            Dedicated to delivering robust solutions in network security, database optimization, 
            and software development with a focus on performance, reliability, and innovation.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={4}
            className="flex justify-center gap-4 flex-wrap"
          >
            <HeroButton href="#work" primary>
              Explore My Work
            </HeroButton>
            <HeroButton href="#contact" secondary>
              Get In Touch
            </HeroButton>
          </motion.div>
        </div>
      </div>
      
      {/* Animated gradient blob */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
  </section>
);
};

export default Hero;