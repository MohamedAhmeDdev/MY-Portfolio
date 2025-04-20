import React from 'react'
import MotionSection from '../components/motion';

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

function Technologies() {
  return (
    <section id="technologies" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4"> My <span className="text-blue-400">Skills</span></h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <MotionSection threshold={0.5} transitionDelay={0.5}>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world, specializing in JavaScript ecosystems.
            </p>
            </MotionSection>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
              <div className="bg-gray-700/50 rounded-xl p-6 flex flex-col items-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg">
                <div className="bg-gray-800/50 p-3 rounded-full mb-4">
                  <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
                </div>
                <span className="text-white font-medium text-center">{tech.name}</span>
              </div>
            </MotionSection>
          ))}
        </div>
        </div>
      </section>
  )
}

export default Technologies