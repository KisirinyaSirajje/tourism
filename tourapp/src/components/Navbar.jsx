// import { Link } from 'react-router-dom';
// import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

// const navItems = [
//   { name: "Home", icon: <FaHome />, path: "/" },
//   { name: "Events", icon: <FaCalendarAlt />, path: "/events" },
//   { name: "Team", icon: <FaUsers />, path: "/team" },
//   { name: "About", icon: <FaInfoCircle />, path: "/about" },
//   { name: "Contact", icon: <FaEnvelope />, path: "/contact" }
// ];

// const Navbar = () => {
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
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { revokeAccess } from './PrivateRoute';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
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
//     <nav className="bg-white shadow-md fixed w-full z-10">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link to="/" className="text-xl font-bold text-[#DD501DE8]">
//             Your Logo
//           </Link>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link to="/" className="text-gray-700 hover:text-[#DD501DE8]">Home</Link>
//             <Link to="/about" className="text-gray-700 hover:text-[#DD501DE8]">About</Link>
//             <Link to="/events" className="text-gray-700 hover:text-[#DD501DE8]">Events</Link>
//             <Link to="/team" className="text-gray-700 hover:text-[#DD501DE8]">Team</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-[#DD501DE8]">Contact</Link>
            
//             {/* Logout button - only show if user has access */}
//             {hasAccess && (
//               <button
//                 onClick={handleLogout}
//                 className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
          
//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden text-gray-700"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {/* Hamburger icon */}
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t">
//             <Link to="/" className="block py-2 text-gray-700 hover:text-[#DD501DE8]">Home</Link>
//             <Link to="/about" className="block py-2 text-gray-700 hover:text-[#DD501DE8]">About</Link>
//             <Link to="/events" className="block py-2 text-gray-700 hover:text-[#DD501DE8]">Events</Link>
//             <Link to="/team" className="block py-2 text-gray-700 hover:text-[#DD501DE8]">Team</Link>
//             <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#DD501DE8]">Contact</Link>
            
//             {/* Logout button - only show if user has access */}
//             {hasAccess && (
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-left py-2 text-red-500 hover:text-red-600"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
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
  const location = useLocation();
  
  // Check access status when location changes
  useEffect(() => {
    const accessStatus = localStorage.getItem('accessGranted') === 'true';
    setHasAccess(accessStatus);
  }, [location]);
  
  const handleLogout = () => {
    revokeAccess();
    // If you're on a protected page, this will trigger a redirect
    window.location.reload();
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-transparent fixed w-full top-0 z-50">
      <Link to="/" className="text-xl font-bold text-white">HiddenSafari</Link>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
        
        {/* Logout button - only show if user has access */}
        {hasAccess && (
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
