import React, { useState } from 'react';
import GradientText from '../ui/GradientText';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Database, Code, Server, Network, Layout, Globe } from 'lucide-react';

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
    title: "Modern Network Architecture Patterns",
    excerpt: "Exploring efficient network design principles for enterprise environments with scalability in mind...",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image: "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_1280.jpg",
    link: "#",
    icon: Network,
    category: "Network Engineering"
  },
  {
    title: "Optimizing Database Performance",
    excerpt: "Advanced techniques for improving query performance and database responsiveness...",
    date: "Feb 28, 2024",
    readTime: "5 min read",
    image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    link: "#",
    icon: Database,
    category: "Database Administration"
  },
  {
    title: "Building Responsive UI with React and Tailwind",
    excerpt: "A comprehensive guide to creating modern user interfaces with React and Tailwind CSS...",
    date: "Feb 15, 2024",
    readTime: "8 min read",
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    link: "#",
    icon: Layout,
    category: "Full-stack Dev"
  },
  {
    title: "Network Monitoring Best Practices",
    excerpt: "Key strategies for effective network monitoring and performance optimization...",
    date: "Jan 30, 2024",
    readTime: "7 min read",
    image: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
    link: "#",
    icon: Server,
    category: "Network Engineering"
  },
  {
    title: "Working with NoSQL vs SQL Databases",
    excerpt: "Comparing relational and non-relational database approaches for different use cases...",
    date: "Jan 15, 2024",
    readTime: "6 min read",
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg",
    link: "#",
    icon: Database,
    category: "Database Administration"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;
    
  // Limit posts to 3 initially when not filtering by category
  const displayedPosts = (showAll || selectedCategory) 
    ? filteredPosts 
    : filteredPosts.slice(0, 3);

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
            Insights and tutorials
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
          {displayedPosts.map((post, index) => (
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
        
        {/* Show More/Less Button - Only show if we're not filtering and there are more than 3 posts */}
        {!selectedCategory && filteredPosts.length > 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#FF512F] to-[#DD2476] hover:shadow-lg hover:shadow-[#FF512F]/20 transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'Show More Articles'}
            </button>
          </motion.div>
        )}
    </div>
  </section>
);
};

export default Blog;