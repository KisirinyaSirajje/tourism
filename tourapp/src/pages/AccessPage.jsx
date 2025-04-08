// import { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { grantAccess } from '../components/PrivateRoute';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const AccessPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(false);
  
//   // Get the page the user was trying to access
//   const from = location.state?.from || '/';
//   const pageName = from === '/team' ? 'Team' : from === '/contact' ? 'Contact' : 'Protected Page';

//   const handleAccessRequest = () => {
//     setIsLoading(true);
    
//     // Simulate an authorization process
//     setTimeout(() => {
//       // Grant access
//       grantAccess();
      
//       // Navigate to the requested page
//       navigate(from, { replace: true });
//     }, 1500);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100">
//         <section className="bg-[#DD501DE8] text-white p-10 pt-28">
//           <div className="container mx-auto">
//             <h2 className="text-3xl font-bold">Access Required</h2>
//             <p className="mt-2">You need special access to view this content.</p>
//           </div>
//         </section>
        
//         <section className="container mx-auto px-4 py-16 max-w-md">
//           <div className="bg-white rounded-lg shadow-md p-8 text-center">
//             <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#DD501DE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </div>
            
//             <h3 className="text-2xl font-bold mb-4">Access the {pageName}</h3>
//             <p className="text-gray-600 mb-6">
//               This content is protected. Click the button below to gain access to our {pageName.toLowerCase()} information.
//             </p>
            
//             <button
//               onClick={handleAccessRequest}
//               disabled={isLoading}
//               className={`w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
//                 isLoading 
//                   ? 'bg-gray-400 cursor-not-allowed' 
//                   : 'bg-[#DD501DE8] hover:bg-orange-700'
//               }`}
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </span>
//               ) : (
//                 'Grant Access'
//               )}
//             </button>
            
//             <p className="mt-4 text-sm text-gray-500">
//               By clicking this button, you'll be granted temporary access to view our {pageName.toLowerCase()} information.
//             </p>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AccessPage;

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { grantAccess } from '../components/PrivateRoute';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  // Get the page the user was trying to access
  const from = location.state?.from || '/';
  const pageName = from === '/team' ? 'Team' : from === '/contact' ? 'Contact' : 'Protected Page';

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      setIsLoading(false);
      return;
    }
    
    // For demo purposes, we'll accept any email with a password of "password123"
    // In a real app, you would validate against a backend
    setTimeout(() => {
      if (password === 'password123') {
        // Store user info
        localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
        
        // Grant access
        grantAccess();
        
        // Navigate to the requested page
        navigate(from, { replace: true });
      } else {
        setError('Invalid credentials. Try password: password123');
        setIsLoading(false);
      }
    }, 1500);
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simple validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      setIsLoading(false);
      return;
    }
    
    // For demo purposes, we'll just simulate a signup
    // In a real app, you would send this to a backend
    setTimeout(() => {
      // Store user info
      localStorage.setItem('user', JSON.stringify({ email, name }));
      
      // Grant access
      grantAccess();
      
      // Navigate to the requested page
      navigate(from, { replace: true });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Access Required</h2>
            <p className="mt-2">Please log in or sign up to access {pageName.toLowerCase()} content.</p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16 max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#DD501DE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center">Access the {pageName}</h3>
            
            {/* Tab navigation */}
            <div className="flex border-b mb-6">
              <button 
                className={`flex-1 py-2 font-medium ${activeTab === 'login' ? 'text-[#DD501DE8] border-b-2 border-[#DD501DE8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button 
                className={`flex-1 py-2 font-medium ${activeTab === 'signup' ? 'text-[#DD501DE8] border-b-2 border-[#DD501DE8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>
            
            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                {error}
              </div>
            )}
            
            {/* Login Form */}
            {activeTab === 'login' && (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">For demo: use "password123"</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#DD501DE8] hover:bg-orange-700'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Login'
                  )}
                </button>
              </form>
            )}
            
            {/* Signup Form */}
            {activeTab === 'signup' && (
              <form onSubmit={handleSignup}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                    placeholder="Name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="signup-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="signup-password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    id="signup-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#DD501DE8] hover:bg-orange-700'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Sign Up'
                  )}
                </button>
              </form>
            )}
            
            <p className="mt-4 text-sm text-gray-500 text-center">
              Your information is securely stored and will only be used to provide access to protected content.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AccessPage;
