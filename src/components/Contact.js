import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#000000] text-gray-300 grid-bg'>
      <div className='max-w-7xl mx-auto p-8 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <h2 className='gradient-text text-4xl font-bold inline-block mb-4'>
            Contact
          </h2>
          <p className='text-gray-400 text-lg'>Submit the form below or shoot me an email - sanjana.cs@example.com</p>
        </div>

        <div className='cyber-box w-full max-w-2xl mx-auto'>
          <div className='cyber-box-content'>
            <form className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  className='contact-input'
                  type='text'
                  placeholder='Name'
                  name='name'
                />
                <input
                  className='contact-input'
                  type='email'
                  placeholder='Email'
                  name='email'
                />
              </div>
              <input
                className='contact-input'
                type='text'
                placeholder='Subject'
                name='subject'
              />
              <textarea
                className='contact-input min-h-[150px] resize-none'
                name='message'
                placeholder='Message'
              ></textarea>
              <button
                className='bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 self-start'
              >
                Let's Collaborate
              </button>
            </form>
          </div>
        </div>

        {/* Static Background Elements */}
        <div className='fixed top-3/4 right-0 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10' />
        <div className='fixed bottom-0 left-1/4 w-72 h-72 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10' />
      </div>
    </div>
  );
};

export default Contact; 