import React, { useState } from 'react';
import GradientText from '../ui/GradientText';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Lock, Code, Server } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  icon: React.ElementType;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of Network Security: AI and Machine Learning",
    excerpt: "Exploring how artificial intelligence is revolutionizing network security and threat detection...",
    date: "Feb 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    link: "#",
    icon: Server,
    category: "Security"
  },
  {
    title: "Essential Cybersecurity Practices for Remote Work",
    excerpt: "Best practices and tools to ensure secure remote work environments...",
    date: "Feb 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    link: "#",
    icon: Lock,
    category: "Cybersecurity"
  },
  {
    title: "Understanding Zero Trust Architecture",
    excerpt: "A comprehensive guide to implementing zero trust security models in modern networks...",
    date: "Jan 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "#",
    icon: Lock,
    category: "Security"
  },
  {
    title: "Cloud Infrastructure Security Best Practices",
    excerpt: "Key strategies for securing your cloud infrastructure against emerging threats...",
    date: "Jan 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    link: "#",
    icon: Server,
    category: "Cloud"
  },
  {
    title: "Modern Database Security Techniques",
    excerpt: "Protecting your data assets with advanced security protocols and encryption...",
    date: "Dec 22, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    link: "#",
    icon: Code,
    category: "Database"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <section id="blog" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-[#FF512F] opacity-5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-[#DD2476] opacity-5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Latest Articles</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing insights and expertise on network security, cybersecurity, and technology trends
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            All Topics
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="#" 
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full overflow-hidden hover:bg-[#0D0D0D] transition-colors duration-300"
          >
            <BookOpen className="w-4 h-4" />
            <span>View All Articles</span>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF512F] to-[#DD2476] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;