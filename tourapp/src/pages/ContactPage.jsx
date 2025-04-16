
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

// const ContactPage = () => {
//   // State for tracking which office is highlighted
//   const [highlightedOffice, setHighlightedOffice] = useState(null);
//   // State for tracking window width for responsive design
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
//   // State for offices data
//   const [offices, setOffices] = useState([]);
//   // State for loading and error handling
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch offices data from API
//   useEffect(() => {
//     const fetchOffices = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         const response = await axios.get('http://54.210.95.246:3005/api/v1/contact');
        
//         if (response.data && Array.isArray(response.data)) {
//           // Map API data to our component structure
//           const mappedOffices = response.data.map((office, index) => ({
//             id: index + 1,
//             name: office.name,
//             address: office.address,
//             hours: office.office_timings,
//             phone: office.contact_numbers && office.contact_numbers.length > 0 
//               ? office.contact_numbers[0] 
//               : 'Not available',
//             email: `contact@hiddensafari.com`, // Default email as it's not in the API data
//             // Additional phone number if available
//             additionalPhone: office.contact_numbers && office.contact_numbers.length > 1 
//               ? office.contact_numbers[1] 
//               : null
//           }));
          
//           setOffices(mappedOffices);
//         } else {
//           throw new Error('Invalid data format received from API');
//         }
//       } catch (err) {
//         console.error("Error fetching office data:", err);
//         setError("Failed to load office information. Please try again later.");
        
//         // Fallback data in case of API failure
//         setOffices([
//           {
//             id: 1,
//             name: "Cape Town (Head Office)",
//             address: "123 Safari Street, Gardens, Cape Town, South Africa, 8001",
//             hours: "8AM to 6PM (Mon-Fri)",
//             phone: "+27 21 555 1234",
//             email: "capetown@hiddensafari.com"
//           },
//           {
//             id: 2,
//             name: "Johannesburg",
//             address: "456 Adventure Avenue, Sandton, Johannesburg, South Africa, 2196",
//             hours: "8AM to 6PM (Mon-Fri)",
//             phone: "+27 11 555 5678",
//             email: "joburg@hiddensafari.com"
//           },
//           {
//             id: 3,
//             name: "Nairobi",
//             address: "789 Wildlife Way, Karen, Nairobi, Kenya, 00200",
//             hours: "8AM to 6PM (Mon-Fri)",
//             phone: "+254 20 555 9012",
//             email: "nairobi@hiddensafari.com"
//           },
//           {
//             id: 4,
//             name: "Victoria Falls",
//             address: "321 Mist Road, Victoria Falls, Zimbabwe, 00000",
//             hours: "8AM to 6PM (Mon-Fri)",
//             phone: "+263 83 555 3456",
//             email: "vicfalls@hiddensafari.com"
//           }
//         ]);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchOffices();
//   }, []);

//   // Effect for handling window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
    
//     // Add event listener
//     window.addEventListener('resize', handleResize);
    
//     // Clean up
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Effect for cycling through highlighted offices every few seconds
//   useEffect(() => {
//     // Only auto-highlight on larger screens
//     if (windowWidth < 768) {
//       setHighlightedOffice(null);
//       return;
//     }
    
//     const interval = setInterval(() => {
//       setHighlightedOffice(current => {
//         if (current === null) return 1;
//         return current < offices.length ? current + 1 : 1;
//       });
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, [windowWidth, offices.length]);

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
          
//           {error && (
//             <div className="text-red-500 text-center mb-6 p-4 bg-red-100 rounded-lg">
//               {error}
//             </div>
//           )}
          
//           {isLoading ? (
//             // Loading state
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//               {offices.map(office => (
//                 <div
//                   key={office.id}
//                   className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
//                     highlightedOffice === office.id
//                       ? 'transform scale-105 shadow-lg border-2 border-[#DD501DE8]'
//                       : 'hover:shadow-lg'
//                   }`}
//                   onMouseEnter={() => setHighlightedOffice(office.id)}
//                   onMouseLeave={() => setHighlightedOffice(null)}
//                 >
//                   <h3 className="text-xl font-semibold flex items-center">
//                     <FaMapMarkerAlt className="text-[#DD501DE8] mr-2" />
//                     {office.name}
//                   </h3>
//                   <p className="text-gray-600 mt-3 pl-7">{office.address}</p>
//                   <p className="text-gray-600 mt-2 flex items-center">
//                     <FaClock className="text-[#DD501DE8] mr-2" />
//                     Office Hours: {office.hours}
//                   </p>
//                   <p className="text-gray-600 mt-2 flex items-center">
//                     <FaPhone className="text-[#DD501DE8] mr-2" />
//                     {office.phone}
//                   </p>
//                   {office.additionalPhone && (
//                     <p className="text-gray-600 mt-2 flex items-center">
//                       <FaPhone className="text-[#DD501DE8] mr-2" />
//                       {office.additionalPhone}
//                     </p>
//                   )}
//                   <p className="text-gray-600 mt-2 flex items-center">
//                     <FaEnvelope className="text-[#DD501DE8] mr-2" />
//                     {office.email}
//                   </p>
//                   <a
//                     href={`https://maps.google.com/maps?q=${encodeURIComponent(office.address)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#DD501DE8] mt-3 inline-block hover:underline"
//                   >
//                     View On Map
//                   </a>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
        
//         {/* Display current screen size - useful for debugging responsive design */}
//         {process.env.NODE_ENV === 'development' && (
//           <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
//             Width: {windowWidth}px
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;


import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";
import { fetchContactOffices } from "../services/api"; // Import the API function

const ContactPage = () => {
  // State for tracking which office is highlighted
  const [highlightedOffice, setHighlightedOffice] = useState(null);
  
  // State for tracking window width for responsive design
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // State for offices data
  const [offices, setOffices] = useState([]);
  
  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch offices data from API
  useEffect(() => {
    const getOffices = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await fetchContactOffices();
        
        if (data && Array.isArray(data)) {
          // Map API data to our component structure
          const mappedOffices = data.map((office, index) => ({
            id: index + 1,
            name: office.name,
            address: office.address,
            hours: office.office_timings,
            phone: office.contact_numbers && office.contact_numbers.length > 0
              ? office.contact_numbers[0]
              : 'Not available',
            email: `contact@hiddensafari.com`, // Default email as it's not in the API data
            // Additional phone number if available
            additionalPhone: office.contact_numbers && office.contact_numbers.length > 1
              ? office.contact_numbers[1]
              : null
          }));
          
          setOffices(mappedOffices);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error("Error fetching office data:", err);
        setError("Failed to load office information. Please try again later.");
        
        // Fallback data in case of API failure
        setOffices([
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
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    
    getOffices();
  }, []);

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
          
          {error && (
            <div className="text-red-500 text-center mb-6 p-4 bg-red-100 rounded-lg">
              {error}
              <button 
                onClick={() => window.location.reload()} 
                className="ml-4 underline hover:text-red-700"
              >
                Try Again
              </button>
            </div>
          )}
          
          {isLoading ? (
            // Loading state
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
            </div>
          ) : (
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
                  {office.additionalPhone && (
                    <p className="text-gray-600 mt-2 flex items-center">
                      <FaPhone className="text-[#DD501DE8] mr-2" />
                      {office.additionalPhone}
                    </p>
                  )}
                  <p className="text-gray-600 mt-2 flex items-center">
                    <FaEnvelope className="text-[#DD501DE8] mr-2" />
                    {office.email}
                  </p>
                  <a
                    href={`https://maps.google.com/maps?q=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DD501DE8] mt-3 inline-block hover:underline"
                  >
                    View On Map
                  </a>
                </div>
              ))}
            </div>
          )}
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
