import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline font-pacifi'>
                JannatunSarna
            </div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-green-400 font-pops font-semibold hover:underline'>Home</a>
                <a href="#about" className='hover:text-green-400 font-pops font-semibold hover:underline'>About Me</a>
                <a href="#service" className='hover:text-green-400 font-pops font-semibold hover:underline'>services</a>
                <a href="#project" className='hover:text-green-400 font-pops font-semibold hover:underline'>projects</a>
                <a href="#contact" className='hover:text-green-400 font-pops font-semibold hover:underline'>contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-400 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-pops'><a href="#contact">Connect Me</a></button>
        </div>
    </nav>
  )
}

export default Navbar