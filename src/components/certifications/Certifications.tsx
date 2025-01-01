import React from 'react';
import GradientText from '../ui/GradientText';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Islem's expertise in network security has been invaluable to our organization. Their proactive approach to identifying and mitigating potential threats has significantly improved our security posture.",
    author: "Sarah Johnson",
    position: "IT Director",
    company: "Tech Solutions Inc."
  },
  {
    text: "Working with Islem was a great experience. Their deep understanding of network infrastructure and ability to explain complex concepts in simple terms made our collaboration extremely productive.",
    author: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations Ltd."
  }
];

const Certifications = () => (
  <section id="testimonials" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">
        <GradientText>What People Say</GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FF512F] opacity-50" />
              <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-[#FF512F] text-sm">{testimonial.position}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;