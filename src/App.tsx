import React from 'react';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import './styles/gradients.css';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;