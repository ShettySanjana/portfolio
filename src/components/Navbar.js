import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#000000]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity duration-300">SCS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <div key={item} className="relative">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="animated-border text-gray-300 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="p-2 rounded-lg text-gray-300 hover:text-[var(--primary)] transition-colors duration-300"
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${nav ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 absolute top-full left-0 w-full h-full h-screen bg-[#000000]/95 backdrop-blur-lg border-t border-white/10`}>
        <div className="px-4 py-6 space-y-8 flex flex-col items-center justify-center max-w-7xl mx-auto mt-10  ">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <div key={item} className='bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-sm px-3 py-2 w-[200px] text-center'>
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={handleClick}
                className="block py-2 text-gray-300 hover:text-[var(--primary)] transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 