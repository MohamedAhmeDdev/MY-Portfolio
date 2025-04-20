import { useState, useEffect } from 'react';

function Navbar({ scrolled, activeSection, setActiveSection, showMobileMenu, setShowMobileMenu }) {

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
      }
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-blue-400"><span className=""></span>Mohamed Ahmed</a>
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
            className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'home' ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'about' ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('technologies')}
            className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'technologies' ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'education' ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('project')}
            className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'project' ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`block w-full text-left px-4 py-3 rounded-md ${activeSection === 'contact' ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
          >
            Contact
          </button>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar