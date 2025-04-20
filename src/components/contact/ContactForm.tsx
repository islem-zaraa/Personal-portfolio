import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  // FormSubmit.co will handle form submission directly
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't prevent default since we want the form to actually submit to FormSubmit.co
    
    // Show success message
      setStatus('success');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  // Animation variants for success message
  const successVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Animation variants for success icons
  const iconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Particle animation variants
  const particleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      // Create a circular/radial pattern
      x: Math.cos(i * (Math.PI * 2 / 12)) * 100,
      y: Math.sin(i * (Math.PI * 2 / 12)) * 100,
      scale: [0, 1.5, 0],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2 + (i * 0.04),
        times: [0, 0.4, 1]
      }
    })
  };

  return (
    <form 
      action="https://formsubmit.co/islemzaraapro@gmail.com" 
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6 relative"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_next" value={window.location.href} />
      <input type="hidden" name="_subject" value="New portfolio contact message!" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
          Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333] focus:border-[#FF512F] focus:ring-2 focus:ring-[#FF512F]/20 transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
          Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333] focus:border-[#FF512F] focus:ring-2 focus:ring-[#FF512F]/20 transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333] focus:border-[#FF512F] focus:ring-2 focus:ring-[#FF512F]/20 transition-all duration-300 resize-none"
        ></motion.textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
      >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      <AnimatePresence>
      {status === 'success' && (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm rounded-lg z-10 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-black to-[#1A1A1A] opacity-95"></div>
            
            {/* Animated particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={particleVariants}
                initial="hidden"
                animate="visible"
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 3 === 0 
                    ? 'linear-gradient(to right, #FF512F, #DD2476)' 
                    : i % 3 === 1 
                      ? 'linear-gradient(to right, #DD2476, #FF512F)' 
                      : 'linear-gradient(to right, #FF512F, #FF512F)'
                }}
              />
            ))}
            
            {/* Success checkmark with glow effect */}
            <motion.div
              variants={iconVariants}
              className="relative mb-4"
        >
              <div className="absolute inset-0 rounded-full bg-[#FF512F]/20 blur-xl scale-150"></div>
              <div className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] p-3 rounded-full relative">
                <CheckCircle2 size={40} className="text-white" />
              </div>
            </motion.div>
            
            {/* Success text */}
            <motion.h3
              variants={iconVariants}
              className="text-white font-bold text-xl mb-1 relative"
            >
              Message Sent!
            </motion.h3>
            
        <motion.p
              variants={iconVariants}
              className="text-gray-300 text-center max-w-xs px-6 relative"
        >
              Thanks for reaching out! I'll get back to you as soon as possible.
        </motion.p>
          </motion.div>
      )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;