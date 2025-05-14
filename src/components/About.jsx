import React from 'react'
import MotionSection from '../components/motion';
import { FiArrowRight } from 'react-icons/fi';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
     <div className="2xl:max-w-4xl 2xl:mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-400">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <MotionSection threshold={0.5} transitionDelay={0.5}>
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white">
              Crafting Digital Solutions That Matter
            </h3>
            
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed text-lg">
                I'm a passionate full-stack developer specializing in JavaScript technologies. With expertise in both frontend and backend development, I create seamless, performant web applications that deliver exceptional user experiences.
              </p>
              <p className="leading-relaxed text-lg">
                My approach combines clean code principles with thoughtful UI/UX design. I thrive on solving complex problems and turning ideas into functional, scalable products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 p-5 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-3 text-lg">Frontend</h4>
                <p className="text-gray-300">React, Vue, Next.js</p>
              </div>
              <div className="bg-gray-700/50 p-5 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-3 text-lg">Backend</h4>
                <p className="text-gray-300">Node.js, Express, MySQL</p>
              </div>
              <div className="bg-gray-700/50 p-5 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-3 text-lg">Experience</h4>
                <p className="text-gray-300">3+ Years</p>
              </div>
              <div className="bg-gray-700/50 p-5 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-3 text-lg">Education</h4>
                <p className="text-gray-300">Institute of Software Technology</p>
                <p className="text-gray-300">Moringa School</p>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  )
}

export default About