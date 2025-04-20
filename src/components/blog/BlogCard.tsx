import React, { useState } from 'react';
import Card from '../ui/Card';
import { ArrowRight, LucideIcon, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  icon: React.ElementType;
  category: string;
}

const BlogCard = ({ title, excerpt, date, readTime, image, link, icon: Icon, category }: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 z-0"></div>
      <div className="relative bg-[#0A0A0A] rounded-2xl h-full flex flex-col border border-[#1A1A1A] group-hover:border-transparent transition-colors z-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-[#151515]">
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#151515] to-[#202020] flex items-center justify-center">
              <div className="text-gray-500 animate-pulse">Loading...</div>
            </div>
          )}
          
          {/* Image error fallback */}
          {imageError && (
            <div className="absolute inset-0 bg-[#151515] flex items-center justify-center flex-col gap-2">
              <ImageIcon className="w-8 h-8 text-[#FF512F]" />
              <p className="text-gray-400 text-sm">Image not available</p>
            </div>
          )}
        
          {!imageError && (
      <img
        src={image}
        alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80"></div>
          <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full flex items-center gap-2">
            <Icon className="w-3.5 h-3.5 text-[#FF512F]" />
            {category}
          </div>
    </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
        <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
        <span>{readTime}</span>
      </div>
          
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF512F] group-hover:to-[#DD2476] transition-colors">
        {title}
      </h3>
          
          <p className="text-gray-400 text-sm mb-6 line-clamp-3">{excerpt}</p>
          
      <a
        href={link}
            className="mt-auto inline-flex items-center gap-2 text-sm text-white py-2 px-4 rounded-full bg-[#1A1A1A] hover:bg-[#FF512F]/20 transition-colors duration-300 hover:text-[#FF512F]"
      >
            Read Article <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
      </div>
    </motion.div>
);
};

export default BlogCard;