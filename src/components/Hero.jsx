import React from 'react'
import { BsDownload } from 'react-icons/bs';
import MotionSection from '../components/motion';

function Hero() {
  return (
  <section id="home" className="bg-gradient-to-b from-gray-900 to-gray-800"> 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-background to-secondary/30 pt-16">
        <MotionSection threshold={0.5} transitionDelay={0.5}>
          <div className=" mx-auto text-center">
            <div>
              <h1 className="text-xl font-medium text-blue-400 mb-4 tracking-wider">FULL-STACK DEVELOPER</h1>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">Mohamed Ahmed</h2>
              <p className="text-md md:text-md text-gray-300 font-thin mb-8">
                I build exceptional digital experiences with modern web technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact" onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg"
                >
                  Contact Me
                </a>
                <a 
                  href="https://drive.google.com/file/d/11cokYrWGqkJ0taKiUcbJNrNSv3KDG6ga/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-8 py-3 border border-blue-400 text-white hover:bg-blue-400/10 font-medium rounded-lg transition-colors"
                >
                  Download CV
                  <BsDownload className='font-bold'/>
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
    </div>
  </section>
  )
}

export default Hero