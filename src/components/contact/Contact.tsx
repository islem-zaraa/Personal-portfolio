import React from 'react';
import GradientText from '../ui/GradientText';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-full blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#DD2476] to-[#FF512F] rounded-full blur-[128px] opacity-20 animate-pulse delay-1000" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Let's build the future together!</GradientText>
        </h2>
        <p className="text-gray-400">
          Have a project in mind or want to discuss potential collaborations?
          I'm always open to new opportunities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <div className="relative group">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          {/* Main card */}
          <div className="relative bg-[#0A0A0A] rounded-xl p-8 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;