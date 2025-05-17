import React from 'react';
import MotionSection from '../components/motion';
import { FiArrowRight, FiAward, FiCode, FiCpu, FiDatabase, FiLayers, FiUsers } from 'react-icons/fi';
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
        
        <MotionSection threshold={0.3} transitionDelay={0.2}>
          <div className="space-y-12">
            <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Crafting Digital Solutions That Matter
              </h3>
              
              <p className="text-md text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer specializing in modern JavaScript technologies. With expertise across the entire stack, I create performant, accessible web applications that deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                 <MotionSection threshold={0.3} transitionDelay={0.2}>
                  <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <FiCode className="text-blue-400" /> My Philosophy
                    </h4>
                    <p className="text-gray-300  text-sm leading-relaxed">
                      I believe in building software that's not just functional but delightful to use. My approach combines clean code principles with thoughtful UI/UX design, ensuring maintainable systems that users love.
                    </p>
                  </div>
                </MotionSection>
                
                 <MotionSection threshold={0.3} transitionDelay={0.2}>
                  <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <FiUsers className="text-blue-400" /> My Approach
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I thrive on solving complex problems through collaborative development. Whether working solo or in a team, I focus on understanding user needs and delivering solutions that create real value.
                    </p>
                  </div>
                </MotionSection>
              </div>
              
               <MotionSection threshold={0.3} transitionDelay={0.2}>
                <div className="bg-gray-800/70 p-8 rounded-xl border border-gray-700/50 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <FiAward className="text-blue-400" /> Key Highlights
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1"><FiCpu /></span>
                      <div>
                        <h4 className="font-semibold text-white">Full-Stack Mastery</h4>
                        <p className="text-gray-300 text-sm">3+ years developing scalable applications with React, Node.js, and modern web technologies</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1"><FiLayers /></span>
                      <div>
                        <h4 className="font-semibold text-white">Client Success</h4>
                        <p className="text-gray-300 text-sm">Delivered impactful solutions for diverse clients, from startups to enterprises</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1"><FiDatabase /></span>
                      <div>
                        <h4 className="font-semibold text-white">Software Engineering</h4>
                        <p className="text-gray-300 text-sm">Strong foundation in software development principles and continuous skill enhancement</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 py-4 px-2  bg-gray-900/50 rounded-lg border border-gray-700/30">
                    <p className="text-sm text-gray-300 italic">
                      "I love solving real-world problems through code. I'm always excited to create meaningful digital experiences."
                    </p>
                  </div>
                </div>
              </MotionSection>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  )
}

export default About