import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch, FaUsers, FaInfoCircle, FaCalendarAlt, FaEnvelope, FaFileContract } from 'react-icons/fa';

const footerLinks = [
  { name: "Teams", icon: <FaUsers /> },
  { name: "About", icon: <FaInfoCircle /> },
  { name: "Events", icon: <FaCalendarAlt /> },
  { name: "Contact Us", icon: <FaEnvelope /> },
  { name: "Terms and Conditions", icon: <FaFileContract /> }
];

const socialLinks = [
  { icon: <FaLinkedin />, url: "#" },
  { icon: <FaFacebook />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaYoutube />, url: "#" }
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-10 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800">HiddenSafari</h2>

        <div className="flex justify-center space-x-6 mt-4">
          {footerLinks.map((link) => (
            <a key={link.name} href="#" className="text-gray-600 hover:text-black flex items-center gap-2">
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-black">
            <FaSearch />
          </button>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
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
    </footer>
  );
};

export default Footer;
