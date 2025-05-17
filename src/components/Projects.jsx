import { useState } from 'react';
import MedopsImage from '../assets/medops.png';
import DoubleDinerImage from '../assets/diner.png';
import HouseholdImage from '../assets/house.png';
import RentDashImage from '../assets/rentDash.png';
import AmanaImage from '../assets/amana.png';
import Modal from './Modal';
import ProjectCard from '../Cards/ProjectCard';

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

        <ProjectCard projects={projects} openModal={openModal}  />
    </div>

    {currentProject && (
      <Modal project={currentProject} closeModal={closeModal}/>
    )}
  </section>

  
  )
}

export default Projects