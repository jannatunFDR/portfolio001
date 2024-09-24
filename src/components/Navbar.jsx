import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='px-8 text-white bg-black md:px-16 lg:px-24'>
      <div className='container flex items-center justify-between py-2'>
        <div className='text-2xl font-bold font-pacifi'>
          JannatunSarna
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-6`}>
          <a href="#home" className='font-semibold hover:text-green-400 font-pops hover:underline'>
            Home
          </a>
          <a href="#about" className='font-semibold hover:text-green-400 font-pops hover:underline'>
            About Me
          </a>
          <a href="#service" className='font-semibold hover:text-green-400 font-pops hover:underline'>
            Services
          </a>
          <a href="#project" className='font-semibold hover:text-green-400 font-pops hover:underline'>
            Projects
          </a>
          <a href="#contact" className='font-semibold hover:text-green-400 font-pops hover:underline'>
            Contact
          </a>
        </div>
        <button className='hidden px-4 py-2 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-400 md:inline hover:scale-105 font-pops'>
          <a href="#contact">Connect Me</a>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} space-y-2 mt-2`}>
        <a href="#home" className='block font-semibold hover:text-green-400 font-pops hover:underline'>
          Home
        </a>
        <a href="#about" className='block font-semibold hover:text-green-400 font-pops hover:underline'>
          About Me
        </a>
        <a href="#service" className='block font-semibold hover:text-green-400 font-pops hover:underline'>
          Services
        </a>
        <a href="#project" className='block font-semibold hover:text-green-400 font-pops hover:underline'>
          Projects
        </a>
        <a href="#contact" className='block font-semibold hover:text-green-400 font-pops hover:underline'>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
