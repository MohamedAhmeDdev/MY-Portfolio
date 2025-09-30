// Modal.js
function Modal({ project, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{project.title} Access</h3>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          {project.access.map((credential, index) => (
            <div key={index} className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">{index + 1}. {credential.role}</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-400">
                    {credential.username.includes('@') ? 'Email' : 'Username'}
                  </p>
                  <p className="text-sm text-white">{credential.username}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Password</p>
                  <p className="text-sm text-white">{credential.password}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a 
          href={project.adminLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-blue-400 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors block"
        >
          Go to {project.title}
        </a>
      </div>
    </div>
  );
}

export default Modal;