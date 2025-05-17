import React from 'react'
import MotionSection from '../components/motion';

const education = [
    { 
      period: 'March 2024 - August 2024',
      title: 'Software Development',
      institution: 'Moringa School',
      description: 'Advanced training in full-stack web development with modern JavaScript frameworks.'
    },
    { 
      period: 'February 2022 - January 2023',
      title: 'Diploma in Software Development',
      institution: 'Institute of Software Technologies',
      description: 'Comprehensive program covering front-end and back-end development fundamentals.'
    },
    { 
      period: 'September 2021 - January 2022',
      title: 'Certificate in Software Development',
      institution: 'Institute of Software Technologies',
      description: 'Introduction to programming concepts and web development basics.'
    }
  ];

  
function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Education & <span className="text-blue-400">Background</span></h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto"> My formal education and continuous learning journey in software development.</p>
      </div>
      
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-500/50 transform -translate-x-1/2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
                <div className={`relative group ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10 md:mt-20'}`}>
                  <div className="bg-gray-800/70 hover:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-blue-400 font-medium mb-2">{edu.period}</p>
                    <h3 className="text-xl font-semibold text-white mb-3">{edu.title}</h3>
                    <h4 className="text-md font-medium text-gray-300 mb-3">{edu.institution}</h4>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
      </div>
    </div>
  </section>
  )
}

export default Education