import React from 'react'
import MotionSection from '../components/motion';


function OtherSkills({tech}) {
  return (
   <div className="flex flex-wrap gap-3">
     {tech.map((tech, index) => (
      <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
        <span key={index} className="rounded-full px-2 py-1 text-sm bg-gray-700/50 dark:bg-navy-light">
          {tech.name}
        </span>
       </MotionSection>
     ))}
   </div>
  )
}

export default OtherSkills