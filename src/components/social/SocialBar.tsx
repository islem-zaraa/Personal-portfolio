import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import SocialIcon from './SocialIcon';

const SocialBar = () => (
  <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 hidden md:flex">
    <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#FF512F] to-transparent mx-auto" />
    <SocialIcon Icon={Github} href="https://github.com" label="GitHub" />
    <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
    <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" />
    <SocialIcon Icon={Mail} href="mailto:hello@example.com" label="Email" />
    <div className="w-px h-20 bg-gradient-to-b from-[#DD2476] via-transparent to-transparent mx-auto" />
  </div>
);

export default SocialBar;