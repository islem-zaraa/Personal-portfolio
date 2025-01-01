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
  Key
} from 'lucide-react';
import GradientText from '../ui/GradientText';
import HeroButton from './HeroButton';
import FloatingIcon from './FloatingIcon';
import BackgroundGrid from './BackgroundGrid';

const Hero = () => (
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

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-6">
          <GradientText>Islem Zaraa</GradientText>
        </h1>
        <h2 className="text-xl md:text-4xl text-gray-400 mb-8 font-light">
          Network Engineer & Junior Cybersecurity Analyst
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <span className="px-4 py-2 rounded-full bg-[#1A1A1A] text-gray-400 text-sm">
            Network Engineering
          </span>
          <span className="px-4 py-2 rounded-full bg-[#1A1A1A] text-gray-400 text-sm">
            Database Administration
          </span>
          <span className="px-4 py-2 rounded-full bg-[#1A1A1A] text-gray-400 text-sm">
            Cybersecurity
          </span>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
          Implementing networks, optimizing databases, and protecting digital assets with
          Innovative solutions and industry best practices.
        </p>
        <HeroButton href="#work">Explore My Work</HeroButton>
      </div>
    </div>
  </section>
);

export default Hero;
