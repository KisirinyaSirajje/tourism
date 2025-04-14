
// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
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
import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope, FaSignOutAlt, FaUser } from 'react-icons/fa';
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
        
        {/* Profile link - only show if user has access */}
        {hasAccess && (
          <li>
            <Link
              to="/profile"
              className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2"
            >
              <FaUser />
              Profile
            </Link>
          </li>
        )}
        
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
