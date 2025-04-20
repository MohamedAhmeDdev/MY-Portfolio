import { useState } from 'react';
import MedopsImage from '../assets/medops.png';
import DoubleDinerImage from '../assets/diner.png';
import HouseholdImage from '../assets/house.png';
import RentDashImage from '../assets/rentDash.png';
import AmanaImage from '../assets/amana.png';

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
  const [showDoubleDinerModal, setShowDoubleDinerModal] = useState(false);
  const [showMedopsModal, setShowMedopsModal] = useState(false);

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
                  onClick={() => project.title === 'Double Diner' ? setShowDoubleDinerModal(true) : setShowMedopsModal(true)}
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
        ))}
      </div>
    </div>


          {/* Modals */}
      {showDoubleDinerModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Double Diner Access</h3>
              <button 
                onClick={() => setShowDoubleDinerModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500/10 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Role</p>
                  <p className="font-medium text-white">Administrator</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="bg-blue-500/10 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-medium text-white">mohamed@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-500/10 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Password</p>
                  <p className="font-medium text-white">123456789</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://double-diner-user.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors block"
            >
              Go to Double Diner
            </a>
          </div>
        </div>
      )}

      {showMedopsModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">MedOps Inventory Access</h3>
              <button 
                onClick={() => setShowMedopsModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-blue-400 font-medium mb-2">1. Manager Account</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-400">Username</p>
                    <p className="text-sm text-white">juma ali</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Password</p>
                    <p className="text-sm text-white">nDSzuVF2</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-blue-400 font-medium mb-2">2. Logistics Account</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-400">Username</p>
                    <p className="text-sm text-white">peter cain</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Password</p>
                    <p className="text-sm text-white">aa92qRsu</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-blue-400 font-medium mb-2">3. Operator Account</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-400">Username</p>
                    <p className="text-sm text-white">dom</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Password</p>
                    <p className="text-sm text-white">s4mcVhcT</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-blue-400 font-medium mb-2">4. Transporter Account</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-400">Username</p>
                    <p className="text-sm text-white">abdi</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Password</p>
                    <p className="text-sm text-white">fTRskDzh</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://med-ops.vercel.app/auth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors block"
            >
              Go to MedOps
            </a>
          </div>
        </div>
      )}
  </section>

  
  )
}

export default Projects