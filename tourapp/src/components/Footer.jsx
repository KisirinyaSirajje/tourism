
// import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch, FaUsers, FaInfoCircle, FaCalendarAlt, FaEnvelope, FaFileContract, FaLock } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const footerLinks = [
//   { name: "Teams", icon: <FaUsers />, path: "/teams" },
//   { name: "About", icon: <FaInfoCircle />, path: "/about" },
//   { name: "Events", icon: <FaCalendarAlt />, path: "/events" },
//   { name: "Contact Us", icon: <FaEnvelope />, path: "/contact" },
//   { name: "Terms and Conditions", icon: <FaFileContract />, path: "/terms-conditions" },
//   { name: "Privacy Policy", icon: <FaLock />, path: "/privacy-policy" }
// ];

// const socialLinks = [
//   { icon: <FaLinkedin />, url: "#" },
//   { icon: <FaFacebook />, url: "#" },
//   { icon: <FaInstagram />, url: "#" },
//   { icon: <FaYoutube />, url: "#" }
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-[#ECD1D1] border-t py-10 text-center">
//       <div className="max-w-5xl mx-auto px-6">
//         <h2 className="text-2xl font-bold text-gray-800">HiddenSafari</h2>
//         {/* Navigation Links */}
//         <div className="flex justify-center space-x-6 mt-4">
//           {footerLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               to={link.path} 
//               className="text-gray-600 hover:text-black flex items-center gap-2"
//             >
//               {link.icon}
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         {/* Bottom section with search and social media */}
//         <div className="flex flex-col md:flex-row justify-between mt-8">
//           {/* Search - Bottom Left */}
//           <div className="flex mb-4 md:mb-0">
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               className="border px-4 py-2 rounded-l-md focus:outline-none"
//             />
//             <button className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-black">
//               <FaSearch />
//             </button>
//           </div>
//           {/* Social Media - Bottom Right */}
//           <div className="flex space-x-4">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.url}
//                 className="text-gray-600 hover:text-black text-2xl"
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch, FaUsers, FaInfoCircle, FaCalendarAlt, FaEnvelope, FaFileContract, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerLinks = [
  { name: "Teams", icon: <FaUsers />, path: "/teams" },
  { name: "About", icon: <FaInfoCircle />, path: "/about" },
  { name: "Events", icon: <FaCalendarAlt />, path: "/events" },
  { name: "Contact Us", icon: <FaEnvelope />, path: "/contact" },
  { name: "Terms and Conditions", icon: <FaFileContract />, path: "/terms-conditions" },
  { name: "Privacy Policy", icon: <FaLock />, path: "/privacy-policy" }
];

const socialLinks = [
  { icon: <FaLinkedin />, url: "#" },
  { icon: <FaFacebook />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaYoutube />, url: "#" }
];

const Footer = () => {
  return (
    <footer className="bg-[#ECD1D1] border-t py-10 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800">HiddenSafari</h2>
        
        {/* Navigation Links - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center md:flex-wrap gap-4 mt-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 hover:text-black flex items-center gap-2 justify-center md:justify-start"
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          ))}
        </div>
        
        {/* Bottom section with search and social media */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
          {/* Search - Bottom Left */}
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border px-4 py-2 rounded-l-md focus:outline-none w-full md:w-auto"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-black">
              <FaSearch />
            </button>
          </div>
          
          {/* Social Media - Bottom Right */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-600 hover:text-black text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-sm text-gray-600">
          © {new Date().getFullYear()} HiddenSafari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
