import { useState, useEffect } from 'react';
import profile from './assets/profile.png';
import MedopsImage from './assets/medops.png';
import DoubleDinerImage from './assets/diner.png';
import HouseholdImage from './assets/house.png';
import RentDashImage from './assets/rentDash.png';
import AmanaImage from './assets/amana.png';


const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDoubleDinerModal, setShowDoubleDinerModal] = useState(false);
  const [showMedopsModal, setShowMedopsModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'technologies', 'education', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setShowMobileMenu(false);
    }
  };

  const technologies = [
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'Vue.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg' },
    { name: 'Next.js', icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg' },
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' }
  ];

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

  const projects = [
    {
      title: 'Double Diner',
      description: 'A comprehensive food delivery platform enabling customers to order from the restaurant with real-time tracking and admin management system.',
      image: DoubleDinerImage,
      technologies: ['React.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
      liveLink: 'https://double-diner-user.vercel.app/',
      sourceLink: 'https://github.com/MohamedAhmeDdev/Double-Diner',
      hasCredentials: true
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
      hasCredentials: true
    },
    {
      title: 'rentDash',
      description: 'Property management platform for landlords and tenants featuring lease management, payment tracking, and maintenance requests.',
      image: RentDashImage,
      technologies: ['React.js', 'Express.js', 'MySQL', 'Tailwind CSS' , 'DaisyUI'],
      liveLink: 'https://rentdashapp.vercel.app/'
    }
  ];

  const contactInfo = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
    ,
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: 'https://maps.google.com/?q=Nairobi'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
    ,
      title: 'Phone',
      content: '+254 704 170 598',
      link: 'tel:+254704170598'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
    ,
      title: 'Email',
      content: 'ma07041705@gmail.com',
      link: 'mailto:ma07041705@gmail.com'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    ,
      title: 'Website',
      content: 'mohamedahmed.dev',
      link: 'https://mohamed-a-mohamed.vercel.app/'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <span className="text-white text-lg font-medium">Loading Portfolio...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans antialiased">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-400">
                <span className=""></span>Mohamed Ahmed
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-lg font-medium transition-colors ${activeSection === 'home' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-lg font-medium transition-colors ${activeSection === 'about' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className={`text-lg font-medium transition-colors ${activeSection === 'technologies' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className={`text-lg font-medium transition-colors ${activeSection === 'education' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('project')}
                className={`text-lg font-medium transition-colors ${activeSection === 'project' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-lg font-medium transition-colors ${activeSection === 'contact' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                Contact
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-800"
                aria-label="Toggle Menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMobileMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'about' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'technologies' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'education' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('project')}
                className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'project' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="text-center lg:text-left">
              <h1 className="text-xl font-medium text-blue-400 mb-4 tracking-wider">FULL-STACK DEVELOPER</h1>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Mohamed Ahmed
              </h2>
              <p className="text-md md:text-xl text-gray-300 font-thin mb-8 max-w-lg mx-auto lg:mx-0">
                I build exceptional digital experiences with modern web technologies.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#contact" 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg"
                >
                  Contact Me
                </a>
                <a 
                  href="https://drive.google.com/file/d/1yt61jVHaEnQ31aeEyyy5CtTLAGBZmMN4/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-blue-400 text-blue-300 hover:bg-blue-400/10 font-medium rounded-lg transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative ">
                <div className="absolute -inset-4 bg-blue-400 rounded-2xl opacity-20 "></div>
                <img 
                  src={profile} 
                  alt="Mohamed Ahmed" 
                  className="relative w-full max-w-md rounded-2xl border-2 border-blue-400/30 shadow-xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-400">About</span> Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg  opacity-25  transition duration-300"></div>
                <img 
                  src={profile} 
                  alt="Profile" 
                  className="relative rounded-lg w-full max-w-md border-2 border-blue-400/30 shadow-lg" 
                />
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world, specializing in JavaScript ecosystems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-700/50 rounded-xl p-6 flex flex-col items-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg"
              >
                <div className="bg-gray-800/50 p-3 rounded-full mb-4">
                  <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
                </div>
                <span className="text-white font-medium text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Education & <span className="text-blue-400">Background</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              My formal education and continuous learning journey in software development.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-500/50 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index}  className={`relative group ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10 md:mt-20'}`}
                >                  
                  <div className="bg-gray-800/70 hover:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className="text-blue-400 font-medium mb-2">{edu.period}</p>
                    <h3 className="text-xl font-semibold text-white mb-3">{edu.title}</h3>
                    <h4 className="text-lg font-medium text-gray-300 mb-3">{edu.institution}</h4>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
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
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover " 
                  />
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Feel free to reach out through any of these channels. I'd love to hear from you!
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-3xl w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/70 p-6 text-center items-center rounded-xl hover:bg-gray-800 transition-colors group"
                  >
                    <div className="bg-blue-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/20 transition-colors">
                      <span className="text-blue-400 text-2xl">
                        {info.icon}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-300 hover:text-white transition-colors flex items-center justify-center"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {info.content}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gray-800/70 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/mohamed-ahmed-513947241/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-700 hover:bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/MohamedAhmeDdev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-700 hover:bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-xl font-bold text-blue-400">
               Mohamed Ahmed
              </a>
              <p className="text-gray-400 text-sm mt-2">Full-Stack JavaScript Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#home" 
                onClick={() => scrollToSection('home')}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => scrollToSection('about')}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#project" 
                onClick={() => scrollToSection('project')}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mohamed Ahmed. All rights reserved.
            </p>
            <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/mohamed-ahmed-513947241/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 hover:bg-gray-600 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/MohamedAhmeDdev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 hover:bg-gray-600 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-400  text-white p-3 rounded-full shadow-lg transition-colors z-40"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

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
    </div>
  );
};

export default Portfolio;