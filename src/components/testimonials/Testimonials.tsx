import React, { useState } from 'react';
import GradientText from '../ui/GradientText';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
  },
  {
    text: "The database optimization work Islem performed for us resulted in a 40% improvement in query response times. Their attention to detail and methodical approach to problem-solving is outstanding.",
    author: "Emma Rodriguez",
    position: "Database Administrator",
    company: "DataFlow Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  },
  {
    text: "Islem's full-stack development skills helped us launch our application ahead of schedule. Their code was clean, well-documented, and impressively scalable for our growing user base.",
    author: "Priya Sharma",
    position: "Product Manager",
    company: "NextGen Apps",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    text: "The cloud migration project Islem led for us was flawless. They anticipated potential issues before they arose and ensured zero downtime during the transition. A true professional.",
    author: "Thomas Wilson",
    position: "CIO",
    company: "Cloud Solutions Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const totalPages = Math.ceil(testimonials.length / 2);
  
  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Get current testimonials (2 per page)
  const currentTestimonials = testimonials.slice(currentPage * 2, currentPage * 2 + 2);

  // Animation variants for swiping effect
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      filter: "blur(8px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      filter: "blur(8px)"
    })
  };

  return (
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

        <div className="relative max-w-5xl mx-auto px-16">
          {/* Navigation Arrows */}
          <button 
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF512F] to-[#DD2476] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF512F] to-[#DD2476] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                filter: { duration: 0.3 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index + currentPage * 2}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(221, 36, 118, 0.25)" }}
                  className="group relative rounded-2xl"
                  style={{ 
                    boxShadow: "0 15px 30px -15px rgba(221, 36, 118, 0.15)" 
                  }}
                >
                  {/* Gradient border with shadow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-500 shadow-xl" />
                  
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
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index 
                    ? 'w-6 bg-gradient-to-r from-[#FF512F] to-[#DD2476]' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        </div>
    </div>
  </section>
);
};

export default Testimonials;