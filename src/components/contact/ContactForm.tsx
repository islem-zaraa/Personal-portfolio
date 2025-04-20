import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

// EmailJS initialization
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_email: 'islemzaraapro@gmail.com' // Hidden recipient email field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using EmailJS to send email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: formData.to_email, // This should be included in your EmailJS template
        }
      );
      
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        to_email: 'islemzaraapro@gmail.com'
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus('error');
    }
  };

  // Reset status after 5 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
          Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333] focus:border-[#FF512F] focus:ring-2 focus:ring-[#FF512F]/20 transition-all duration-300 resize-none"
        ></motion.textarea>
      </div>

      {/* Hidden field for recipient email */}
      <input 
        type="hidden" 
        name="to_email" 
        value={formData.to_email} 
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 group"
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
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
      
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm text-center"
        >
          Failed to send message. Please try again or email me directly.
        </motion.p>
      )}
    </form>
  );
};

export default ContactForm;