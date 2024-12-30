import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import SocialIcon from './SocialIcon';

const Footer = () => (
  <footer className="py-12 bg-[#0A0A0A] border-t border-[#1A1A1A]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">© 2024 John Doe. All rights reserved.</p>
        <div className="flex gap-6">
          <SocialIcon Icon={Github} href="https://github.com" label="GitHub" />
          <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
          <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" />
          <SocialIcon Icon={Mail} href="mailto:hello@example.com" label="Email" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;