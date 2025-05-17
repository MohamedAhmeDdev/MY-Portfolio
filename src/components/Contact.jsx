import React from 'react'
import MotionSection from '../components/motion';

const contactInfo = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>,
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: 'https://maps.google.com/?q=Nairobi'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>,
      title: 'Email',
      content: 'ma07041705@gmail.com',
      link: 'mailto:ma07041705@gmail.com'
    },   
  ];

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In <span className="text-blue-400">Touch</span></h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'd love to hear from you!
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
                 <MotionSection key={index} threshold={0.4} transitionDelay={index * 0.1}>
              <div 
                key={index} 
                className="bg-gray-700/50 p-6 text-center items-center rounded-xl hover:bg-gray-800 transition-colors group"
              >
                <div className="bg-blue-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/20 transition-colors">
                  <span className="text-blue-400 text-2xl">{info.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 ">{info.title}</h4>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-gray-300 text-sm hover:text-white transition-colors flex items-center justify-center"
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
              </MotionSection>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-700/50 p-8 rounded-xl text-center">
          <MotionSection threshold={0.5} transitionDelay={0.5}>
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>
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
          </MotionSection>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact