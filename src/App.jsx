import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Education from './components/Education';
import Technologies from './components/Technologies';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
      <Navbar 
        scrolled={scrolled} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      
      {/* Hero Section */}
       <Hero/>

      {/* About Section */}
       <About/>

      {/* Technologies Section */}
       <Technologies/>

      {/* Education Section */}
       <Education/>

      {/* Projects Section */}
       <Projects/>

      {/* Contact Section */}
       <Contact/>

      {/* Footer */}
       <Footer/>

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

    </div>
  );
};

export default Portfolio;