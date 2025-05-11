import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiCloud } from 'react-icons/fi';

const About = () => {
  const skills = [
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, MongoDB, PostgreSQL, and implementing RESTful APIs and GraphQL endpoints',
      icon: <FiCode className="w-12 h-12" />
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, Next.js, Redux, and modern CSS techniques including Styled Components',
      icon: <FiLayout className="w-12 h-12" />
    },
    {
      title: 'DevOps & Cloud',
      description: 'Deploying and managing applications on AWS, Firebase, and Heroku with CI/CD pipelines, containerization, and infrastructure as code',
      icon: <FiCloud className="w-12 h-12" />
    }
  ];

  return (
    <div name='about' className='w-full bg-[#000000] text-gray-300 relative overflow-hidden'>
      {/* Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f0f10_1px,transparent_1px),linear-gradient(to_bottom,#0f0f10_1px,transparent_1px)] bg-[size:1rem_1rem] bg-center z-0 blur-[1px]'></div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-slow'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float-slow-reverse'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='pb-12'
        >
          <h2 className='gradient-text text-4xl font-bold inline-block mb-4'>
            About Me
          </h2>
          <p className='text-gray-400 text-lg'>Passionate about creating innovative web solutions</p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='max-w-3xl '
        >
          <p className='text-gray-400 text-lg leading-relaxed'>
            I'm <span className='text-[var(--primary)]'>Sanjana Shetty</span>, a full-stack developer with expertise in both frontend and backend technologies. With a passion for building complete, scalable web applications, I specialize in the MERN stack (MongoDB, Express, React, Node.js) and related technologies. My experience spans from database design and API development to creating intuitive user interfaces and deploying applications to the cloud.
          </p>
        </motion.div>
        </div>
      </div>
    
  );
};

export default About; 