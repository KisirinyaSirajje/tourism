// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const PrivacyPolicyPage = () => {
//   // State for tracking if sections are visible
//   const [visibleSections, setVisibleSections] = useState({
//     confidentiality: false,
//     cookies: false
//   });

//   // State for privacy policy content
//   const [policyData, setPolicyData] = useState({
//     title: "Privacy Policy",
//     confidentiality: "",
//     cookies: ""
//   });

//   // State for loading and error handling
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch privacy policy data
//   useEffect(() => {
//     const fetchPolicyData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get('http://54.210.95.246:3005/api/v1/info/privacy-policy');
        
//         if (response.data && response.data.content) {
//           // Parse the content to extract sections
//           const content = response.data.content;
          
//           // Extract sections using regex
//           const confidentialityMatch = content.match(/Guarantee of Confidentiality:\s*([\s\S]*?)(?=\n\s*Cookie Usage:|$)/i);
//           const cookiesMatch = content.match(/Cookie Usage:\s*([\s\S]*?)(?=$)/i);
          
//           setPolicyData({
//             title: response.data.title || "Privacy Policy",
//             confidentiality: confidentialityMatch ? confidentialityMatch[1].trim() : "",
//             cookies: cookiesMatch ? cookiesMatch[1].trim() : ""
//           });
//         } else {
//           throw new Error('Invalid data format received from API');
//         }
//       } catch (err) {
//         console.error("Error fetching privacy policy data:", err);
//         setError("Failed to load privacy policy information. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchPolicyData();
//   }, []);

//   // Effect for checking if sections are in viewport
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['confidentiality', 'cookies'];
      
//       sections.forEach(section => {
//         const element = document.getElementById(`${section}-section`);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const isVisible = rect.top < window.innerHeight - 100;
          
//           if (isVisible && !visibleSections[section]) {
//             setVisibleSections(prev => ({
//               ...prev,
//               [section]: true
//             }));
//           }
//         }
//       });
//     };
    
//     // Initial check
//     handleScroll();
    
//     // Add scroll listener
//     window.addEventListener('scroll', handleScroll);
    
//     // Cleanup
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [visibleSections]);

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100">
//         {/* Hero Section */}
//         <section className="bg-[#DD501DE8] text-white p-10 pt-28">
//           <div className="container mx-auto">
//             <h2 className="text-3xl font-bold">{policyData.title}</h2>
//             <p className="mt-2">How we protect and use your information.</p>
//           </div>
//         </section>
        
//         {isLoading ? (
//           // Loading state
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
//           </div>
//         ) : error ? (
//           // Error state
//           <div className="container mx-auto px-4 py-8">
//             <div className="bg-red-100 text-red-500 p-4 rounded-lg text-center">
//               {error}
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Introduction */}
//             <section className="container mx-auto px-4 py-8">
//               <div className="bg-white shadow-md rounded-lg p-6">
//                 <p className="text-gray-600 mb-4">
//                   At HiddenSafari, we value your privacy and are committed to protecting your personal information. 
//                   This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
//                 </p>
//               </div>
//             </section>

//             {/* Confidentiality Section */}
//             <section id="confidentiality-section" className="container mx-auto px-4 py-8">
//               <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
//                 visibleSections.confidentiality ? 'opacity-100' : 'opacity-0'
//               }`}>
//                 <h3 className="text-2xl font-bold mb-4">Guarantee of Confidentiality</h3>
//                 <p className="text-gray-600 whitespace-pre-line">{policyData.confidentiality}</p>
//               </div>
//             </section>
            
//             {/* Cookies Section */}
//             <section id="cookies-section" className="container mx-auto px-4 py-8">
//               <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
//                 visibleSections.cookies ? 'opacity-100' : 'opacity-0'
//               }`}>
//                 <h3 className="text-2xl font-bold mb-4">Cookie Usage</h3>
//                 <p className="text-gray-600 whitespace-pre-line">{policyData.cookies}</p>
//               </div>
//             </section>

//             {/* Contact Section */}
//             <section className="container mx-auto px-4 py-8">
//               <div className="bg-white shadow-md rounded-lg p-6">
//                 <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
//                 <p className="text-gray-600">
//                   If you have any questions about our Privacy Policy or how we handle your data, please don't hesitate to contact us. 
//                   We are committed to addressing any concerns you may have about your privacy.
//                 </p>
//               </div>
//             </section>
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrivacyPolicyPage;

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchPrivacyPolicy } from "../services/api"; // Updated import to use the specific function

const PrivacyPolicyPage = () => {
  // State for tracking if sections are visible
  const [visibleSections, setVisibleSections] = useState({
    confidentiality: false,
    cookies: false
  });

  // State for privacy policy content
  const [policyData, setPolicyData] = useState({
    title: "Privacy Policy",
    confidentiality: "",
    cookies: ""
  });

  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch privacy policy data
  useEffect(() => {
    const fetchPolicyData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchPrivacyPolicy();
        
        if (data && data.content) {
          // Parse the content to extract sections
          const content = data.content;
          
          // Extract sections using regex
          const confidentialityMatch = content.match(/Guarantee of Confidentiality:\s*([\s\S]*?)(?=\n\s*Cookie Usage:|$)/i);
          const cookiesMatch = content.match(/Cookie Usage:\s*([\s\S]*?)(?=$)/i);
          
          setPolicyData({
            title: data.title || "Privacy Policy",
            confidentiality: confidentialityMatch ? confidentialityMatch[1].trim() : "",
            cookies: cookiesMatch ? cookiesMatch[1].trim() : ""
          });
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error("Error fetching privacy policy data:", err);
        setError("Failed to load privacy policy information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPolicyData();
  }, []);

  // Effect for checking if sections are in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['confidentiality', 'cookies'];
      
      sections.forEach(section => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          
          if (isVisible && !visibleSections[section]) {
            setVisibleSections(prev => ({
              ...prev,
              [section]: true
            }));
          }
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">{policyData.title}</h1>
            <p className="mt-2">How we protect and use your information.</p>
          </div>
        </section>
        
        {isLoading ? (
          // Loading state
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
          </div>
        ) : error ? (
          // Error state
          <div className="container mx-auto px-4 py-8">
            <div className="bg-red-100 text-red-500 p-4 rounded-lg text-center">
              {error}
              <button 
                onClick={() => window.location.reload()} 
                className="ml-4 underline hover:text-red-700"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Introduction */}
            <section className="container mx-auto px-4 py-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  At HiddenSafari, we value your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
                </p>
              </div>
            </section>

            {/* Table of Contents */}
            <section className="container mx-auto px-4 py-4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Contents</h2>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#confidentiality-section" 
                      className="text-[#DD501DE8] hover:underline"
                    >
                      Guarantee of Confidentiality
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#cookies-section" 
                      className="text-[#DD501DE8] hover:underline"
                    >
                      Cookie Usage
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Confidentiality Section */}
            <section id="confidentiality-section" className="container mx-auto px-4 py-8">
              <div className={`bg-white shadow-md rounded-lg p-6 transition-all duration-1000 ${
                visibleSections.confidentiality ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <h3 className="text-2xl font-bold mb-4">Guarantee of Confidentiality</h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {policyData.confidentiality || "No confidentiality information available."}
                </div>
              </div>
            </section>
            
            {/* Cookies Section */}
            <section id="cookies-section" className="container mx-auto px-4 py-8">
              <div className={`bg-white shadow-md rounded-lg p-6 transition-all duration-1000 ${
                visibleSections.cookies ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <h3 className="text-2xl font-bold mb-4">Cookie Usage</h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {policyData.cookies || "No cookie usage information available."}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-4 py-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  If you have any questions about our Privacy Policy or how we handle your data, please don't hesitate to contact us.
                  We are committed to addressing any concerns you may have about your privacy.
                </p>
                <div className="mt-6">
                  <a 
                    href="/contact" 
                    className="inline-block bg-[#DD501DE8] text-white px-6 py-2 rounded-md hover:bg-[#c04418] transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
