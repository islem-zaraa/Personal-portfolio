import React from 'react';
import GradientText from '../ui/GradientText';
import ContactForm from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import Card from '../ui/Card';

const Contact = () => (
  <section id="contact" className="py-20 bg-[#0A0A0A]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Let's build the future together!</GradientText>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential collaborations? 
          I'm always open to new opportunities and challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <ContactForm />
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#FF512F]" />
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-gray-400">hello@example.com</p>
            </div>
          </Card>
          
          <Card className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#FF512F]" />
            <div>
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </Card>
          
          <Card className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#FF512F]" />
            <div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;