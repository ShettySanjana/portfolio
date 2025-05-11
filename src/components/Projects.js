import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';
import styled from 'styled-components';

// CyberButton Component
const CyberButton = ({ children, onClick, className }) => {
  return (
    <StyledButton className={className}>
      <svg style={{position: 'absolute', width: 0, height: 0}}>
        <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
      </svg>
      <div className="backdrop" />
      <button className="button" onClick={onClick}>
        <div className="a l" />
        <div className="a r" />
        <div className="a t" />
        <div className="a b" />
        <div className="text">{children}</div>
      </button>
    </StyledButton>
  );
};

// Styled Components
const StyledButton = styled.div`
  .button {
    position: relative;
    cursor: pointer;
    border: none;
    padding: 0 24px;
    height: 40px;
    background: #111;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 120px;
    font-size: 14px;
    font-weight: 500;
  }

  .text {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background: radial-gradient(
        circle at 50% 50%,
        #0000 0,
        #0000 20%,
        #111111aa 50%
      ),
      radial-gradient(ellipse 100% 100%, var(--primary), #fff0);
    background-size:
      3px 3px,
      auto auto;
    transition: 0.3s;
  }

  .button:hover::before {
    opacity: 0.3;
  }

  .a {
    pointer-events: none;
    position: absolute;
    --w: 2px;
    --t: -40px;
    --s: calc(var(--t) * -1);
    --e: calc(100% + var(--t));
    --g: #fff0, var(--primary)33 var(--s), var(--primary)aa var(--s), var(--primary), var(--primary)aa var(--e),
      var(--primary)33 var(--e), #fff0;
  }

  .a::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(4px) url(#unopaq);
    z-index: -2;
  }

  .a::after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(10px) url(#unopaq);
    opacity: 0;
    z-index: -2;
    transition: 0.3s;
  }

  .button:hover .a::after {
    opacity: 1;
  }

  .l {
    left: -2px;
  }

  .r {
    right: -2px;
  }

  .l,
  .r {
    background: linear-gradient(var(--g));
    top: var(--t);
    bottom: var(--t);
    width: var(--w);
  }

  .t {
    top: -2px;
  }

  .b {
    bottom: -2px;
  }

  .t,
  .b {
    background: linear-gradient(90deg, var(--g));
    left: var(--t);
    right: var(--t);
    height: var(--w);
  }

  .backdrop {
    position: absolute;
    inset: -9900%;
    background: radial-gradient(
      circle at 50% 50%,
      #0000 0,
      #0000 20%,
      #111111aa 50%
    );
    background-size: 3px 3px;
    z-index: -1;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SAN-NET Social Media',
      description: 'A modern social networking platform built with Django and React. Features real-time chat, post sharing, and user interactions. Implements WebSocket for instant messaging and notifications.',
      image: '/projects/san-net.jpg', // Modern social network dashboard interface
      tech: ['Django', 'React',  'dbsqlite', 'Tailwind CSS'],
      liveLink: 'https://san-net.onrender.com/',
      codeLink: 'https://github.com/sanjana/san-net',
      features: [
        'Real-time messaging using WebSocket',
        'News feed with infinite scroll',
        'User profiles and connections',
        'Media sharing capabilities',
        'Responsive design'
      ]
    },
    {
      id: 2,
      title: 'Student Database Management',
      description: 'A comprehensive web-based system for managing student information, faculty details, and academic records. Built using PHP and MySQL with a focus on user-friendly interface and secure data management.',
      image: '/projects/student-db.jpg', // Clean dashboard interface showing student records
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      demoLink: 'https://student-dbms.demo',
      codeLink: 'https://github.com/sanjana/student-dbms',
      features: [
        'Student Information Management',
        'Faculty Portal',
        'Academic Records',
        'User Authentication',
        'Search & Filter'
      ]
    },
    {
      id: 3,
      title: 'College Transport System',
      description: 'A comprehensive web application built with Django that helps manage transportation for students and drivers. Features include secure transport tracking, real-time bus location monitoring, and efficient route management.',
      image: '/projects/transport.jpg', // Transport tracking interface with map
      tech: ['Django', 'Tailwind CSS', 'dbsqlite', 'Google Maps API'],
      demoLink: 'https://transport-system.demo',
      codeLink: 'https://github.com/sanjana/transport-system',
      features: [
        'Real-time bus tracking',
        'Route optimization',
        'Driver management',
        'Student schedules',
        'Mobile-friendly design'
      ]
    }
  ];

  return (
    <div name='projects' className='w-full min-h-screen bg-[#000000] text-gray-300 relative overflow-hidden'>
      {/* Grid Background */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f0f10_1px,transparent_1px),linear-gradient(to_bottom,#0f0f10_1px,transparent_1px)] bg-[size:1rem_1rem] bg-center z-0 blur-[1px]'></div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-0 w-auto h-auto bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-float-slow'></div>
        <div className='absolute bottom-0 right-0 w-auto h-auto bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-float-slow-reverse'></div>
      </div>

      <div className='max-w-7xl mx-auto p-8 relative z-10'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='pb-12'
        >
          <h2 className='gradient-text text-4xl font-bold inline-block mb-4'>
            Featured Projects
          </h2>
          <p className='text-gray-400 text-lg'>Showcasing my technical expertise through real-world applications</p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='relative w-full min-h-[600px] rounded-xl overflow-hidden'>
                {/* Animated Background Gradients */}
                <div className='absolute inset-0 overflow-hidden'>
                  <div className='absolute -inset-[100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#402fb5_25%,transparent_50%)]'></div>
                  <div className='absolute -inset-[100%] animate-[spin_8s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_0%,#cf30aa_25%,transparent_50%)]'></div>
                  <div className='absolute inset-0 blur-xl opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,#402fb5,transparent_70%)]'></div>
                </div>

                {/* Content Container */}
                <div className='absolute inset-[2px] rounded-xl bg-[#010201] p-6 flex flex-col h-full'>
                  {/* Project Image Container - Adjusted height */}
                  <div className='relative h-[300px] rounded-lg overflow-hidden'>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                      loading="lazy"
                    />
                    <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>

                  {/* Project Info Container */}
                  <div className='flex flex-col justify-between flex-1 mt-6'>
                    <div className='space-y-4'>
                      <h3 className='text-xl font-bold gradient-text'>
                        {project.title}
                      </h3>
                      <p className='text-gray-400 text-sm'>
                        {project.description}
                      </p>
                      
                      {/* Features List */}
                      <ul className='text-sm text-gray-400 list-disc list-inside space-y-2'>
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className='text-[var(--primary)]'>
                            <span className='text-gray-400'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='space-y-6 mt-6'>
                      {/* Tech Stack */}
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className='px-3 py-1.5 text-xs text-[var(--primary)] bg-[var(--primary)]/10 rounded-full border border-[var(--primary)]/20'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className='flex items-center gap-4'>
                        {project.liveLink && (
                          <CyberButton
                            onClick={() => window.open(project.liveLink, '_blank')}
                          >
                            <FiEye className="w-4 h-4" />
                            View Live
                          </CyberButton>
                        )}
                        <CyberButton
                          onClick={() => window.open(project.codeLink, '_blank')}
                        >
                          <FiGithub className="w-4 h-4" />
                          View Code
                        </CyberButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 