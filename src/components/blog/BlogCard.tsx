import React from 'react';
import Card from '../ui/Card';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, excerpt, date, readTime, image, link }: BlogCardProps) => (
  <Card className="group cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300">
    <div className="aspect-video overflow-hidden rounded-lg mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-[#FF512F] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 line-clamp-2">{excerpt}</p>
      <a
        href={link}
        className="inline-flex items-center gap-2 text-[#FF512F] group-hover:gap-3 transition-all"
      >
        Read More <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </Card>
);

export default BlogCard;