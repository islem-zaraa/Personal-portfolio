import React from 'react';
import Nav from './components/nav/Nav';
import SocialBar from './components/social/SocialBar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Certifications from './components/certifications/Certifications';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './styles/gradients.css';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Nav />
      <SocialBar />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Certifications />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;