
// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope, FaSignOutAlt, FaUser } from 'react-icons/fa';
// import { revokeAccess } from './PrivateRoute';

// const navItems = [
//   { name: "Home", icon: <FaHome />, path: "/" },
//   { name: "Events", icon: <FaCalendarAlt />, path: "/events" },
//   { name: "Team", icon: <FaUsers />, path: "/team" },
//   { name: "About", icon: <FaInfoCircle />, path: "/about" },
//   { name: "Contact", icon: <FaEnvelope />, path: "/contact" }
// ];

// const Navbar = () => {
//   const [hasAccess, setHasAccess] = useState(false);
//   const location = useLocation();
  
//   // Check access status when location changes
//   useEffect(() => {
//     const accessStatus = localStorage.getItem('accessGranted') === 'true';
//     setHasAccess(accessStatus);
//   }, [location]);
  
//   const handleLogout = () => {
//     revokeAccess();
//     // If you're on a protected page, this will trigger a redirect
//     window.location.reload();
//   };

//   return (
//     <nav className="flex justify-between items-center px-10 py-4 bg-transparent fixed w-full top-0 z-50">
//       <Link to="/" className="text-xl font-bold text-white">HiddenSafari</Link>
//       <ul className="flex space-x-6">
//         {navItems.map((item) => (
//           <li key={item.name}>
//             <Link
//               to={item.path}
//               className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2"
//             >
//               {item.icon}
//               {item.name}
//             </Link>
//           </li>
//         ))}
        
//         {/* Profile link - only show if user has access */}
//         {hasAccess && (
//           <li>
//             <Link
//               to="/profile"
//               className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2"
//             >
//               <FaUser />
//               Profile
//             </Link>
//           </li>
//         )}
        
//         {/* Logout button - only show if user has access */}
//         {hasAccess && (
//           <li>
//             <button
//               onClick={handleLogout}
//               className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2"
//             >
//               <FaSignOutAlt />
//               Logout
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope, FaSignOutAlt, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { revokeAccess } from './PrivateRoute';

const navItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Events", icon: <FaCalendarAlt />, path: "/events" },
  { name: "Team", icon: <FaUsers />, path: "/team" },
  { name: "About", icon: <FaInfoCircle />, path: "/about" },
  { name: "Contact", icon: <FaEnvelope />, path: "/contact" }
];

const Navbar = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check access status when location changes
  useEffect(() => {
    const accessStatus = localStorage.getItem('accessGranted') === 'true';
    setHasAccess(accessStatus);
  }, [location]);
  
  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const handleLogout = () => {
    revokeAccess();
    // If you're on a protected page, this will trigger a redirect
    window.location.reload();
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-[#DD501DE8] shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white">
              HiddenSafari
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                    location.pathname === item.path ? 'bg-[#c04418] bg-opacity-50' : ''
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              
              {/* Profile link - only show if user has access */}
              {hasAccess && (
                <Link
                  to="/profile"
                  className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                    location.pathname === '/profile' ? 'bg-[#c04418] bg-opacity-50' : ''
                  }`}
                >
                  <FaUser />
                  Profile
                </Link>
              )}
              
              {/* Logout button - only show if user has access */}
              {hasAccess && (
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#DD501DE8]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                location.pathname === item.path ? 'bg-[#c04418] bg-opacity-50' : ''
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          
          {/* Profile link - only show if user has access */}
          {hasAccess && (
            <Link
              to="/profile"
              className={`text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                location.pathname === '/profile' ? 'bg-[#c04418] bg-opacity-50' : ''
              }`}
            >
              <FaUser />
              Profile
            </Link>
          )}
          
          {/* Logout button - only show if user has access */}
          {hasAccess && (
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
