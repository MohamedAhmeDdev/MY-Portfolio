import React from 'react'

function Modal({ setShowMedopsModal, projects }) {
  return (
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
        {projects.map((project) => (
          project.hasCredentials && project.Access?.map((access, index) => (
            <div key={`${project.title}-${index}`} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                <div className="bg-blue-500/10 rounded-full p-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                    <h4 className="text-blue-400 font-medium mb-2">{access.role}</h4>
                </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-400">Username</p>
                  <p className="text-sm text-white">{access.username}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Password</p>
                  <p className="text-sm text-white">{access.password}</p>
                </div>
              </div>
            </div>
          ))
        ))}
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
  )
}

export default Modal