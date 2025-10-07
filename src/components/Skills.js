import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 2, name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 3, name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 5, name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { id: 6, name: 'Tailwind', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#000000] text-gray-300'>
      {/* Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f0f10_1px,transparent_1px),linear-gradient(to_bottom,#0f0f10_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20'></div>

      {/* Container */}
      <div className='max-w-7xl mx-auto -pt-[500px] flex flex-col justify-center w-full h-full relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='pb-8'
        >
          <h2 className='text-4xl font-bold mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'>
              Technical Proficiency
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>Core technologies and frameworks I specialize in</p>
        </motion.div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
          {skills.map(({ id, name, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className='relative group'
            >
              {/* Card Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-xl'></div>
              
              {/* Subtle Border */}
              <div className='absolute inset-0 rounded-xl border border-white/5'></div>
              
              {/* Content Container */}
              <div className='relative p-6 rounded-xl backdrop-blur-sm'>
                <div className='relative'>
                  <motion.img 
                    className='w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105'
                    src={image} 
                    alt={`${name} icon`}
                    style={{ 
                      filter: 'brightness(0.95) contrast(1.05)',
                    }}
                  />
                  
                  {/* Skill Name */}
                  <h3 className='font-medium text-gray-200 mb-3'>{name}</h3>
                  
                  {/* Progress Bar Container */}
                  <div className='relative h-1 w-full bg-black/30 rounded-full overflow-hidden'>
                    <motion.div
                      className='absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ 
                        duration: 1,
                        delay: id * 0.1,
                        ease: 'easeOut'
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Accents */}
      <div className='fixed  right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full mix-blend-overlay filter blur-[120px] opacity-30' />
      <div className='fixed bottom-1/3 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full mix-blend-overlay filter blur-[120px] opacity-30' />
    </div>
  );
};

export default Skills; 