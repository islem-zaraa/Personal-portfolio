import React from 'react';
import GradientText from '../ui/GradientText';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'islemzaraapro@gmail.com',
    href: 'mailto:islemzaraapro@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+213 555 888 119',
    href: 'tel:+213555888119'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tebessa, DZ',
    href: 'https://maps.google.com/?q=Tebessa,+Algeria'
  }
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/islem-zaraa',
    label: 'Github',
    color: 'hover:text-white'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/islem-zaraa',
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  }
];

const Contact = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-r from-[#DD2476] to-[#FF512F] rounded-full blur-[150px] opacity-20 animate-pulse delay-1000" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
          className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
            <GradientText>Get In Touch</GradientText>
        </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential collaborations?
            I'm always open to new opportunities and exciting challenges.
        </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={childVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <p className="text-gray-400">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-[#1A1A1A] rounded-lg group-hover:bg-[#FF512F]/10 transition-colors">
                      <item.icon className="w-5 h-5 text-[#FF512F]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white group-hover:text-[#FF512F] transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={childVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1A1A1A] rounded-full hover:bg-[#0D0D0D] transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className={`w-5 h-5 text-gray-400 ${social.color} transition-colors`} />
                  </a>
                ))}
              </div>
            </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
      >
        <div className="relative group">
          {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF512F] to-[#DD2476] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
          
          {/* Main card */}
              <div className="relative bg-[#0A0A0A] rounded-2xl p-8 shadow-xl border border-[#1A1A1A] group-hover:border-transparent transition-colors">
                <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </motion.div>
        </div>
    </div>
  </section>
);
};

export default Contact;