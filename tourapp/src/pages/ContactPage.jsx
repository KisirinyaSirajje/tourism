

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

// const ContactPage = () => {
  
 

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100">
//         <section className="bg-[#DD501DE8] text-white p-10 pt-28">
//           <div className="container mx-auto">
//             <h2 className="text-3xl font-bold">Contact Us</h2>
//             <p className="mt-2">Life is either a daring adventure or nothing.</p>
//           </div>
//         </section>

//         <section className="container mx-auto px-4 py-12">
//           <h2 className="text-3xl font-bold mb-8 text-center">Our Offices</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {/* Office 1 */}
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-xl font-semibold flex items-center">
//                 <FaMapMarkerAlt className="text-[#DD501DE8] mr-2" />
//                 Cape Town (Head Office)
//               </h3>
//               <p className="text-gray-600 mt-3 pl-7">123 Safari Street, Gardens, Cape Town, South Africa, 8001</p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaClock className="text-[#DD501DE8] mr-2" />
//                 Office Hours: 8AM to 6PM (Mon-Fri)
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaPhone className="text-[#DD501DE8] mr-2" />
//                 +27 21 555 1234
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaEnvelope className="text-[#DD501DE8] mr-2" />
//                 capetown@hiddensafari.com
//               </p>
//               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#DD501DE8] mt-3 inline-block hover:underline">View On Map</a>
//             </div>

//             {/* Office 2 */}
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-xl font-semibold flex items-center">
//                 <FaMapMarkerAlt className="text-[#DD501DE8] mr-2" />
//                 Johannesburg
//               </h3>
//               <p className="text-gray-600 mt-3 pl-7">456 Adventure Avenue, Sandton, Johannesburg, South Africa, 2196</p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaClock className="text-[#DD501DE8] mr-2" />
//                 Office Hours: 8AM to 6PM (Mon-Fri)
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaPhone className="text-[#DD501DE8] mr-2" />
//                 +27 11 555 5678
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaEnvelope className="text-[#DD501DE8] mr-2" />
//                 joburg@hiddensafari.com
//               </p>
//               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#DD501DE8] mt-3 inline-block hover:underline">View On Map</a>
//             </div>

//             {/* Office 3 */}
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-xl font-semibold flex items-center">
//                 <FaMapMarkerAlt className="text-[#DD501DE8] mr-2" />
//                 Nairobi
//               </h3>
//               <p className="text-gray-600 mt-3 pl-7">789 Wildlife Way, Karen, Nairobi, Kenya, 00200</p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaClock className="text-[#DD501DE8] mr-2" />
//                 Office Hours: 8AM to 6PM (Mon-Fri)
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaPhone className="text-[#DD501DE8] mr-2" />
//                 +254 20 555 9012
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaEnvelope className="text-[#DD501DE8] mr-2" />
//                 nairobi@hiddensafari.com
//               </p>
//               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#DD501DE8] mt-3 inline-block hover:underline">View On Map</a>
//             </div>

//             {/* Office 4 */}
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-xl font-semibold flex items-center">
//                 <FaMapMarkerAlt className="text-[#DD501DE8] mr-2" />
//                 Victoria Falls
//               </h3>
//               <p className="text-gray-600 mt-3 pl-7">321 Mist Road, Victoria Falls, Zimbabwe, 00000</p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaClock className="text-[#DD501DE8] mr-2" />
//                 Office Hours: 8AM to 6PM (Mon-Fri)
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaPhone className="text-[#DD501DE8] mr-2" />
//                 +263 83 555 3456
//               </p>
//               <p className="text-gray-600 mt-2 flex items-center">
//                 <FaEnvelope className="text-[#DD501DE8] mr-2" />
//                 vicfalls@hiddensafari.com
//               </p>
//               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#DD501DE8] mt-3 inline-block hover:underline">View On Map</a>
//             </div>
//           </div>
//         </section>
        
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ContactPage;

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  // State for tracking which office is highlighted
  const [highlightedOffice, setHighlightedOffice] = useState(null);
  // State for tracking window width for responsive design
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Offices data
  const offices = [
    {
      id: 1,
      name: "Cape Town (Head Office)",
      address: "123 Safari Street, Gardens, Cape Town, South Africa, 8001",
      hours: "8AM to 6PM (Mon-Fri)",
      phone: "+27 21 555 1234",
      email: "capetown@hiddensafari.com"
    },
    {
      id: 2,
      name: "Johannesburg",
      address: "456 Adventure Avenue, Sandton, Johannesburg, South Africa, 2196",
      hours: "8AM to 6PM (Mon-Fri)",
      phone: "+27 11 555 5678",
      email: "joburg@hiddensafari.com"
    },
    {
      id: 3,
      name: "Nairobi",
      address: "789 Wildlife Way, Karen, Nairobi, Kenya, 00200",
      hours: "8AM to 6PM (Mon-Fri)",
      phone: "+254 20 555 9012",
      email: "nairobi@hiddensafari.com"
    },
    {
      id: 4,
      name: "Victoria Falls",
      address: "321 Mist Road, Victoria Falls, Zimbabwe, 00000",
      hours: "8AM to 6PM (Mon-Fri)",
      phone: "+263 83 555 3456",
      email: "vicfalls@hiddensafari.com"
    }
  ];

  // Effect for handling window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Effect for cycling through highlighted offices every few seconds
  useEffect(() => {
    // Only auto-highlight on larger screens
    if (windowWidth < 768) {
      setHighlightedOffice(null);
      return;
    }
    
    const interval = setInterval(() => {
      setHighlightedOffice(current => {
        if (current === null) return 1;
        return current < offices.length ? current + 1 : 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [windowWidth, offices.length]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="mt-2">Life is either a daring adventure or nothing.</p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {offices.map(office => (
              <div 
                key={office.id}
                className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
                  highlightedOffice === office.id 
                    ? 'transform scale-105 shadow-lg border-2 border-[#DD501DE8]' 
                    : 'hover:shadow-lg'
                }`}
                onMouseEnter={() => setHighlightedOffice(office.id)}
                onMouseLeave={() => setHighlightedOffice(null)}
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <FaMapMarkerAlt className="text-[#DD501DE8] mr-2" />
                  {office.name}
                </h3>
                <p className="text-gray-600 mt-3 pl-7">{office.address}</p>
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaClock className="text-[#DD501DE8] mr-2" />
                  Office Hours: {office.hours}
                </p>
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaPhone className="text-[#DD501DE8] mr-2" />
                  {office.phone}
                </p>
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaEnvelope className="text-[#DD501DE8] mr-2" />
                  {office.email}
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#DD501DE8] mt-3 inline-block hover:underline"
                >
                  View On Map
                </a>
              </div>
            ))}
          </div>
        </section>
        
        {/* Display current screen size - useful for debugging responsive design */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
            Width: {windowWidth}px
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
