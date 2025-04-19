import React from 'react';
import { 
  Database, 
  Shield, 
  Network, 
  Server, 
  Lock, 
  Wifi, 
  HardDrive,
  Cloud,
  Key,
  Code
} from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';
import HeroButton from './HeroButton';
import FloatingIcon from './FloatingIcon';
import BackgroundGrid from './BackgroundGrid';
import TypeWriter from '../ui/TypeWriter';

const Hero = () => {
  // Array of professional titles that showcase skills in an engaging way
  const titles = [
    "Network Engineer & Cybersecurity Analyst",
    "Digital Fortress Builder 🔒",
    "Cyber Threat Hunter & Defender",
    "Making Networks Impenetrable 💪"
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

      <FloatingIcon Icon={Database} position="top-1/4 left-1/4" delay={0} />
      <FloatingIcon Icon={Shield} position="top-1/3 right-1/4" delay={0.5} />
      <FloatingIcon Icon={Network} position="bottom-1/4 left-1/3" delay={1} />
      <FloatingIcon Icon={Server} position="top-1/2 right-1/3" delay={1.5} />
      <FloatingIcon Icon={Lock} position="bottom-1/3 right-1/4" delay={2} />
      <FloatingIcon Icon={Wifi} position="top-2/3 left-1/4" delay={2.5} />
      <FloatingIcon Icon={HardDrive} position="bottom-1/4 right-1/3" delay={3} />
      <FloatingIcon Icon={Cloud} position="top-1/4 right-1/2" delay={3.5} />
      <FloatingIcon Icon={Key} position="bottom-1/2 left-1/3" delay={4} />
      <FloatingIcon Icon={Code} position="top-1/3 left-2/3" delay={4.5} />

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
            className="text-xl md:text-4xl text-gray-400 mb-8 font-light min-h-16"
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
              "Cybersecurity",
              "Cloud Computing"
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
            Securing networks, optimizing databases, and protecting digital assets with
            cutting-edge solutions and industry best practices.
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