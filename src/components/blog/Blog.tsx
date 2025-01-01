import React from 'react';
import GradientText from '../ui/GradientText';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "The Future of Network Security: AI and Machine Learning",
    excerpt: "Exploring how artificial intelligence is revolutionizing network security and threat detection...",
    date: "Feb 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    link: "#"
  },
  {
    title: "Essential Cybersecurity Practices for Remote Work",
    excerpt: "Best practices and tools to ensure secure remote work environments...",
    date: "Feb 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    link: "#"
  }
];

const Blog = () => (
  <section id="blog" className="py-20 bg-[#050505]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">
        <GradientText>Latest Articles</GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <BlogCard {...post} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;