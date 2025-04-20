import React from 'react'
import profile from '../assets/profile.png';
import { BsDownload } from 'react-icons/bs';

function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="text-center lg:text-left">
          <h1 className="text-xl font-medium text-blue-400 mb-4 tracking-wider">FULL-STACK DEVELOPER</h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">Mohamed Ahmed</h2>
          <p className="text-md md:text-xl text-gray-300 font-thin mb-8 max-w-lg mx-auto lg:mx-0">
            I build exceptional digital experiences with modern web technologies.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#contact" onClick={() => scrollToSection('contact')}
             className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/11cokYrWGqkJ0taKiUcbJNrNSv3KDG6ga/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-8 py-3 border border-blue-400 text-blue-300 hover:bg-blue-400/10 font-medium rounded-lg transition-colors"
            >
              Download CV
              <BsDownload className='font-bold'/>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="relative ">
            <div className="absolute -inset-4 bg-blue-400 rounded-2xl opacity-20 "></div>
            <img src={profile} alt="Mohamed Ahmed" className="relative w-full max-w-md rounded-2xl border-2 border-blue-400/30 shadow-xl"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero