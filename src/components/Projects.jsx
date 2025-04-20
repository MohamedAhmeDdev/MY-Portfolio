import { useState } from 'react';
import MedopsImage from '../assets/medops.png';
import DoubleDinerImage from '../assets/diner.png';
import HouseholdImage from '../assets/house.png';
import RentDashImage from '../assets/rentDash.png';
import AmanaImage from '../assets/amana.png';
import Modal from './Modal';
import MotionSection from '../components/motion';

const projects = [
    {
      title: 'Double Diner',
      description: 'A comprehensive food delivery platform enabling customers to order from the restaurant with real-time tracking and admin management system.',
      image: DoubleDinerImage,
      technologies: ['React.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
      liveLink: 'https://double-diner-user.vercel.app/',
      sourceLink: 'https://github.com/MohamedAhmeDdev/Double-Diner',
      hasCredentials: true,
      access:[
        { role: 'Administrator', username: 'mohamed@gmail.com', password: '123456789'},  
      ]
    },
    {
      title: 'Household Management',
      description: 'A job marketplace connecting homeowners with service providers for household positions, featuring job posting, applications, and reviews.',
      image: HouseholdImage,
      technologies: ['Vue.js', 'Express.js', 'MySQL'],
      liveLink: 'https://household-app.vercel.app/',
      sourceLink: 'https://github.com/MohamedAhmeDdev/Household-management-system'
    },
    {
      title: 'Amana Virtual Solutions',
      description: 'Business process optimization platform offering custom solutions to streamline operations and enhance efficiency for various industries.',
      image: AmanaImage,
      technologies: ['React.js', 'Tailwind CSS'],
      liveLink: 'https://amana-website.vercel.app/'
    },
    {
      title: 'MedOps Inventory',
      description: 'Pharmaceutical inventory management system with role-based access control, stock tracking, and distribution workflow automation.',
      image:  MedopsImage,
      technologies: ['React.js', 'Express.js', 'MySQL', 'DaisyUI'],
      liveLink: 'https://med-ops.vercel.app/auth',
      sourceLink: 'https://github.com/MohamedAhmeDdev/medOps-v-2.0',
      hasCredentials: true,
      access:[
        { role: 'Manager Account', username: 'juma ali', password: 'nDSzuVF2' },
        { role: 'Logistics Account', username: 'peter cain', password: 'aa92qRsu' },
        { role: 'Operator Account', username: 'dom', password: 's4mcVhcT' },
        { role: 'Transporter Account', username: 'abdi', password: 'fTRskDzh' }
      ]
    },
    {
      title: 'rentDash',
      description: 'Property management platform for landlords and tenants featuring lease management, payment tracking, and maintenance requests.',
      image: RentDashImage,
      technologies: ['React.js', 'Express.js', 'MySQL', 'Tailwind CSS' , 'DaisyUI'],
      liveLink: 'https://rentdashapp.vercel.app/'
    }
];
  

function Projects() {
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (projectTitle) => {
    const project = projects.find(p => p.title === projectTitle);
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  return (
    <section id="project" className="py-20 px-6 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
          <div 
            key={index} 
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="relative overflow-hidden h-48">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover "/>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity  flex items-end p-6">
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              
              {project.hasCredentials && (
                <button 
                onClick={() => openModal(project.title)}
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
                  <a 
                    href={project.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                )}
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm border border-blue-400 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>
          </MotionSection>
        ))}
      </div>
    </div>

    {currentProject && (
      <Modal project={currentProject} closeModal={closeModal}/>
    )}
  </section>

  
  )
}

export default Projects