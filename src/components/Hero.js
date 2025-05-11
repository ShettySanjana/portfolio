import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const typingTextRef = useRef(null);
  const texts = [
    "Building full-stack web applications",
    "Crafting scalable backend solutions",
    "Creating beautiful frontend experiences",
    "Specializing in MERN stack development"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function typeText() {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }
      
      if (typingTextRef.current) {
        typingTextRef.current.textContent = currentText;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before starting new word
      }
      
      setTimeout(typeText, typeSpeed);
    }
    
    typeText();
  }, []);

  return (
    <div name='home' className='w-full bg-[#000000] text-gray-300 relative overflow-hidden pt-20'>
      {/* Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f0f10_1px,transparent_1px),linear-gradient(to_bottom,#0f0f10_1px,transparent_1px)] bg-[size:1rem_1rem] bg-center z-0 blur-[1px]'></div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-slow'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-slow-reverse'></div>
      </div>

      <div className='max-w-7xl mx-auto px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl'
        >
          {/* Typewriter Text */}
          <div className='text-lg sm:text-xl mb-4 font-mono text-[var(--primary)] h-8'>
            <span className='opacity-70'>&gt; </span>
            <span ref={typingTextRef}></span>
            <span className='animate-pulse'>_</span>
          </div>

          {/* Main Title */}
          <motion.h1 
            className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className='gradient-text'>Sanjana Shetty</span>
            <br />
            Full-Stack Developer
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div 
            className='flex flex-wrap gap-4 mb-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* View Projects Button */}
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className='group relative overflow-hidden rounded-lg px-6 py-3 bg-[var(--primary)] text-black font-semibold transition-transform duration-300 hover:-translate-y-1'
            >
              <span className='relative z-10 flex items-center gap-2'>
                View Projects
                <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>

            {/* Contact Button */}
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className='group relative overflow-hidden rounded-lg px-6 py-3 bg-transparent text-[var(--primary)] font-semibold border border-[var(--primary)] transition-colors duration-300 hover:text-black'
            >
              <span className='relative z-10 flex items-center gap-2'>Contact Me</span>
              <div className='absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1'></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 