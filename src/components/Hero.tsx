import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#DD2476]/10 animate-gradient" />
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-transparent bg-clip-text">
          John Doe
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
          Full Stack Developer & UI Designer
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12 text-lg">
          Crafting beautiful digital experiences with modern technologies and innovative design solutions.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/10 hover:bg-gradient-to-r from-[#FF512F] to-[#DD2476] transition-all duration-300 group"
        >
          View My Work
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;