// const Navbar = () => {
//     return (
//       <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md fixed w-full top-0 z-50">
//         <h1 className="text-xl font-bold">HiddenSafari</h1>
//         <ul className="flex space-x-6">
//           {["Home", "Events", "Team", "About", "Contact"].map((item) => (
//             <li key={item} className="text-gray-700 hover:text-black cursor-pointer">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };
  
//   export default Navbar;
import { FaHome, FaCalendarAlt, FaUsers, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { name: "Home", icon: <FaHome /> },
  { name: "Events", icon: <FaCalendarAlt /> },
  { name: "Team", icon: <FaUsers /> },
  { name: "About", icon: <FaInfoCircle /> },
  { name: "Contact", icon: <FaEnvelope /> }
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-transparent fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold text-white">HiddenSafari</h1>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name} className="text-white hover:text-gray-200 cursor-pointer flex items-center gap-2">
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
