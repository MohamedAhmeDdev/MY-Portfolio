import React from 'react'
import MotionSection from '../components/motion';
import SkillsCard from '../Cards/SkillsCard';
import OtherSkills from '../Cards/OtherSkills';

const frontend = [
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'Vue.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg' },
    { name: 'Next.js', icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg' },
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
  ];

  const backend = [
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  ];

  const tools = [
    {name: 'Responsive Design'},
      {name: 'SEO Optimization'},
    { name: 'Git & Github' },
    {name: 'CI/CD' },
    { name: 'Vercel' },
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
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Frontend</h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
               {frontend.map((tech, index) => (
                <SkillsCard index={index} tech={tech} />
               ))}
             </div>
          </div>

           <div className="mb-12">
             <h3 className="text-2xl font-semibold mb-6 text-white">Backend</h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
               {backend.map((tech, index) => (
                <SkillsCard index={index} tech={tech} />
               ))}
             </div>
           </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
             <OtherSkills tech={tools} />
          </div>
        </div>
      </section>
  )
}

export default Technologies