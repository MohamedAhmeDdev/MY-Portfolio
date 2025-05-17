import React from 'react'
import MotionSection from '../components/motion';
import { LuGithub } from "react-icons/lu";

function ProjectCard({projects, openModal,}) {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
        <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
          <div key={index}  className="bg-gray-800 rounded-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="relative overflow-hidden h-48">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover "/>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity  flex items-end p-6">
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              
              {project.hasCredentials && (
                <button onClick={() => openModal(project.title)}
                  className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  View credentials
                </button>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-700/50 text-white text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                {project.sourceLink && (
                   <button className="flex-1 flex items-center gap-2">
                  <a 
                    href={project.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
                  >
                    <LuGithub className='mr-2' />
                    Code
                  </a>
                  </button>
                )}
                <button className="flex-1 flex items-center gap-2"> 
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm border border-blue-400 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live
                </a>
                </button>
              </div>
            </div>
          </div>
        </MotionSection>
    ))}
   </div>
  )
}

export default ProjectCard