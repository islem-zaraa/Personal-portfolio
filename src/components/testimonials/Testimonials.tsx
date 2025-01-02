import React from 'react';
import GradientText from '../ui/GradientText';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Islem's expertise in network security has been invaluable to our organization. Their proactive approach to identifying and mitigating potential threats has significantly improved our security posture.",
    author: "Sarah Johnson",
    position: "IT Director",
    company: "Tech Solutions Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    text: "Working with Islem was a great experience. Their deep understanding of network infrastructure and ability to explain complex concepts in simple terms made our collaboration extremely productive.",
    author: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations Ltd.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
    {/* Background gradient effects */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF512F] opacity-10 blur-[100px] rounded-full" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DD2476] opacity-10 blur-[100px] rounded-full" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>What People Say</GradientText>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from our clients about their experiences working together
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            {/* Gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-500" />
            
            {/* Content */}
            <div className="relative bg-[#0A0A0A] p-8 rounded-2xl">
              <Quote className="w-10 h-10 text-[#FF512F] opacity-20 mb-4 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF512F]/20 group-hover:ring-[#FF512F] transition-all"
                />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-[#FF512F] transition-colors">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.position} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;