import React from 'react'
import MotionSection from '../components/motion';

function SkillsCard({tech, index}) {
  return (
    <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
      <div className="bg-gray-700/50 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg">
        <div className="bg-gray-800/50 p-2 rounded-full mb-4">
          <img src={tech.icon} alt={tech.name} className="h-7 w-7 object-contain" />
        </div>
        <span className="text-white text-sm font-medium text-center">{tech.name}</span>
      </div>
    </MotionSection>
  )
}

export default SkillsCard