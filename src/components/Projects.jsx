import { useState } from 'react';
import MedopsImage from '../assets/medops.png';
import DoubleDinerImage from '../assets/diner.png';
import HouseholdImage from '../assets/house.png';
import RentDashImage from '../assets/rentDash.png';
import AmanaImage from '../assets/amana.png';
import CRMImage from '../assets/crm.png';
import luxuryMakeupSalonImage from '../assets/luxury-makeup-salon.png';
import Modal from './Modal';
import ProjectCard from '../Cards/ProjectCard';

const projects = [
    {
      title: 'Double Diner',
      description: 'A comprehensive food delivery platform enabling customers to browse restaurants, place orders, and track deliveries in real time. Built with React.js for the frontend, Express.js for the backend, and MySQL for secure data storage, the platform features an intuitive user interface styled with Tailwind CSS and includes an admin management system.',      image: DoubleDinerImage,
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
      description: 'A job marketplace platform connecting homeowners with service providers for household tasks. Built with Vue.js for the frontend, Express.js for the backend, and MySQL for reliable data management, the system enables job posting, applications, and reviews within a responsive and modern interface.',      image: HouseholdImage,
      technologies: ['Vue.js', 'Express.js', 'MySQL'],
      liveLink: 'https://household-app.vercel.app/',
      sourceLink: 'https://github.com/MohamedAhmeDdev/Household-management-system'
    },
    {
      title: 'Amana Virtual Solutions',
      description: 'A business process optimization platform designed to streamline operations and enhance efficiency across industries. Built with React.js for the frontend and styled with Tailwind CSS, the application provides a sleek, responsive interface to deliver custom solutions for businesses.',
      image: AmanaImage,
      technologies: ['React.js', 'Tailwind CSS'],
      liveLink: 'https://amana-website.vercel.app/'
    },
    {
      title: 'MedOps Inventory',
      description: 'A pharmaceutical inventory management system supporting role-based access control, stock monitoring, and workflow automation for distribution. Developed with React.js for the frontend, Express.js for the backend, and MySQL for secure storage, the application features a modern interface styled with DaisyUI and Tailwind CSS.',
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
      description: 'A property management platform for landlords and tenants featuring lease management, rent tracking, and maintenance request handling. Built with React.js, Express.js, and MySQL, the application delivers a seamless experience with a modern interface powered by Tailwind CSS and DaisyUI.',
      image: RentDashImage,
      technologies: ['React.js', 'Express.js', 'MySQL', 'Tailwind CSS' , 'DaisyUI'],
      liveLink: 'https://rentdashapp.vercel.app/'
    },
    {
    title: 'CRM',
    description: 'A customer relationship management system designed to streamline client interactions, track sales activities, and manage business workflows. Built with Vite.js for the frontend, Express.js for the backend, and MySQL for secure data management, the platform provides a responsive UI styled with Tailwind CSS.',
    image: CRMImage,
    technologies: ['vite.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    liveLink: 'https://crm-phi-eight.vercel.app/'
    },
    {
      title: 'luxury-makeup-salon',
      description: 'A modern web application for booking salon services, showcasing makeup packages, and managing client appointments. Built with Vite.js, Express.js, and MySQL, the platform delivers a seamless user experience with a stylish interface powered by Tailwind CSS.',
      image: luxuryMakeupSalonImage,
      technologies: ['vite.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
      liveLink: 'https://luxury-makeup-salon.vercel.app/'
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