import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Background Grid */}
        <div className="fixed inset-0 grid-bg pointer-events-none"></div>
        
        {/* Sections */}
        <div className="space-y-16 sm:space-y-24">
          <section id="home" className="relative pt-16 sm:pt-20">
            <Home />
          </section>

          <section id="skills" className="relative">
            <Skills />
          </section>

          <section id="projects" className="relative">
            <Projects />
          </section>

          <section id="contact" className="relative">
            <Contact />
          </section>
        </div>

        {/* Global Background Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          {/* Top Left Glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />
          
          {/* Bottom Right Glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />
          
          {/* Center Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-5" />
        </div>
      </main>
    </div>
  );
}

export default App;
