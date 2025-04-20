import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

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

  return (
    <form 
      action="https://formsubmit.co/islemzaraapro@gmail.com" 
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
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

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-500 text-sm text-center"
        >
          Message sent successfully! I'll get back to you soon.
        </motion.p>
      )}
    </form>
  );
};

export default ContactForm;