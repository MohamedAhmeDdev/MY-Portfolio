import React from 'react'
import profile from '../assets/profile.png';
import MotionSection from '../components/motion';

function About() {
  return (
  <section id="about" className="py-20 px-6 bg-gray-800/50">
  
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4"><span className="text-blue-400">About</span> Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <MotionSection threshold={0.5} transitionDelay={0.5}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg  opacity-25  transition duration-300"></div>
              <img src={profile} alt="Profile" className="relative rounded-lg w-full max-w-md border-2 border-blue-400/30 shadow-lg"/>
            </div>
          </div>
          </MotionSection>

          <MotionSection threshold={0.5} transitionDelay={0.7}>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Crafting Digital Solutions That Matter</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer specializing in JavaScript technologies. With expertise in both frontend and backend development, I create seamless, performant web applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              My approach combines clean code principles with thoughtful UI/UX design. I thrive on solving complex problems and turning ideas into functional, scalable products. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Frontend</h4>
                <p className="text-gray-300">React, Vue, Next.js</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Backend</h4>
                <p className="text-gray-300">Node.js, Express, MySQL</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Experience</h4>
                <p className="text-gray-300">3+ Years</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Education</h4>
                <p className="text-gray-300">Institute of software Technology,</p>
                <p className="text-gray-300">Moringa School</p>
              </div>
            </div>
            
            <a 
              href="#project" 
              onClick={() => scrollToSection('project')}
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-medium rounded-lg transition-colors"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          </MotionSection>
        </div>
      </div>
  
  </section>
  )
}

export default About