// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const TermsConditionsPage = () => {
//   // State for tracking if sections are visible
//   const [visibleSections, setVisibleSections] = useState({
//     booking: false,
//     payment: false,
//     cancellations: false
//   });

//   // State for terms and conditions content
//   const [termsData, setTermsData] = useState({
//     title: "Terms and Conditions",
//     booking: "",
//     payment: "",
//     cancellations: ""
//   });

//   // State for loading and error handling
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch terms and conditions data
//   useEffect(() => {
//     const fetchTermsData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get('http://54.210.95.246:3005/api/v1/info/terms-condition');
        
//         if (response.data && response.data.content) {
//           // Parse the content to extract sections
//           const content = response.data.content;
          
//           // Extract sections using regex
//           const bookingMatch = content.match(/1\.\s*Booking confirmation\s*([\s\S]*?)(?=\n\s*2\.\s*|$)/i);
//           const paymentMatch = content.match(/2\.\s*Payment\s*([\s\S]*?)(?=\n\s*3\.\s*|$)/i);
//           const cancellationsMatch = content.match(/3\.\s*Cancellations and\/or refunds\s*([\s\S]*?)(?=$)/i);
          
//           setTermsData({
//             title: response.data.title || "Terms and Conditions",
//             booking: bookingMatch ? bookingMatch[1].trim() : "",
//             payment: paymentMatch ? paymentMatch[1].trim() : "",
//             cancellations: cancellationsMatch ? cancellationsMatch[1].trim() : ""
//           });
//         } else {
//           throw new Error('Invalid data format received from API');
//         }
//       } catch (err) {
//         console.error("Error fetching terms and conditions data:", err);
//         setError("Failed to load terms and conditions information. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchTermsData();
//   }, []);

//   // Effect for checking if sections are in viewport
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['booking', 'payment', 'cancellations'];
      
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
//             <h2 className="text-3xl font-bold">{termsData.title}</h2>
//             <p className="mt-2">Please read our terms and conditions carefully.</p>
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
//                   These terms and conditions govern your use of our services. By booking with us, you agree to comply with and be bound by the following terms and conditions.
//                 </p>
//               </div>
//             </section>

//             {/* Booking Section */}
//             <section id="booking-section" className="container mx-auto px-4 py-8">
//               <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
//                 visibleSections.booking ? 'opacity-100' : 'opacity-0'
//               }`}>
//                 <h3 className="text-2xl font-bold mb-4">1. Booking Confirmation</h3>
//                 <p className="text-gray-600 whitespace-pre-line">{termsData.booking}</p>
//               </div>
//             </section>
            
//             {/* Payment Section */}
//             <section id="payment-section" className="container mx-auto px-4 py-8">
//               <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
//                 visibleSections.payment ? 'opacity-100' : 'opacity-0'
//               }`}>
//                 <h3 className="text-2xl font-bold mb-4">2. Payment</h3>
//                 <p className="text-gray-600 whitespace-pre-line">{termsData.payment}</p>
//               </div>
//             </section>
            
//             {/* Cancellations Section */}
//             <section id="cancellations-section" className="container mx-auto px-4 py-8">
//               <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
//                 visibleSections.cancellations ? 'opacity-100' : 'opacity-0'
//               }`}>
//                 <h3 className="text-2xl font-bold mb-4">3. Cancellations and/or Refunds</h3>
//                 <p className="text-gray-600 whitespace-pre-line">{termsData.cancellations}</p>
//               </div>
//             </section>

//             {/* Agreement Section */}
//             <section className="container mx-auto px-4 py-8">
//               <div className="bg-white shadow-md rounded-lg p-6">
//                 <h3 className="text-2xl font-bold mb-4">Your Agreement</h3>
//                 <p className="text-gray-600">
//                   By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you have any questions, please contact us before proceeding with your booking.
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

// export default TermsConditionsPage;


import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchTermsConditions } from "../services/api"; // Updated import to use the specific function

const TermsConditionsPage = () => {
  // State for tracking if sections are visible
  const [visibleSections, setVisibleSections] = useState({
    booking: false,
    payment: false,
    cancellations: false
  });

  // State for terms and conditions content
  const [termsData, setTermsData] = useState({
    title: "Terms and Conditions",
    booking: "",
    payment: "",
    cancellations: ""
  });

  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch terms and conditions data
  useEffect(() => {
    const fetchTermsData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTermsConditions();
        
        if (data && data.content) {
          // Parse the content to extract sections
          const content = data.content;
          
          // Extract sections using regex
          const bookingMatch = content.match(/1\.\s*Booking confirmation\s*([\s\S]*?)(?=\n\s*2\.\s*|$)/i);
          const paymentMatch = content.match(/2\.\s*Payment\s*([\s\S]*?)(?=\n\s*3\.\s*|$)/i);
          const cancellationsMatch = content.match(/3\.\s*Cancellations and\/or refunds\s*([\s\S]*?)(?=$)/i);
          
          setTermsData({
            title: data.title || "Terms and Conditions",
            booking: bookingMatch ? bookingMatch[1].trim() : "",
            payment: paymentMatch ? paymentMatch[1].trim() : "",
            cancellations: cancellationsMatch ? cancellationsMatch[1].trim() : ""
          });
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error("Error fetching terms and conditions data:", err);
        setError("Failed to load terms and conditions information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTermsData();
  }, []);

  // Effect for checking if sections are in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['booking', 'payment', 'cancellations'];
      
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
            <h1 className="text-3xl font-bold">{termsData.title}</h1>
            <p className="mt-2">Please read our terms and conditions carefully.</p>
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
                  These terms and conditions govern your use of our services. By booking with us, you agree to comply with and be bound by the following terms and conditions.
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
                      href="#booking-section" 
                      className="text-[#DD501DE8] hover:underline"
                    >
                      1. Booking Confirmation
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#payment-section" 
                      className="text-[#DD501DE8] hover:underline"
                    >
                      2. Payment
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#cancellations-section" 
                      className="text-[#DD501DE8] hover:underline"
                    >
                      3. Cancellations and/or Refunds
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Booking Section */}
            <section id="booking-section" className="container mx-auto px-4 py-8">
              <div className={`bg-white shadow-md rounded-lg p-6 transition-all duration-1000 ${
                visibleSections.booking ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <h3 className="text-2xl font-bold mb-4">1. Booking Confirmation</h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {termsData.booking || "No booking information available."}
                </div>
              </div>
            </section>
            
            {/* Payment Section */}
            <section id="payment-section" className="container mx-auto px-4 py-8">
              <div className={`bg-white shadow-md rounded-lg p-6 transition-all duration-1000 ${
                visibleSections.payment ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <h3 className="text-2xl font-bold mb-4">2. Payment</h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {termsData.payment || "No payment information available."}
                </div>
              </div>
            </section>
            
            {/* Cancellations Section */}
            <section id="cancellations-section" className="container mx-auto px-4 py-8">
              <div className={`bg-white shadow-md rounded-lg p-6 transition-all duration-1000 ${
                visibleSections.cancellations ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <h3 className="text-2xl font-bold mb-4">3. Cancellations and/or Refunds</h3>
                <div className="text-gray-600 whitespace-pre-line">
                  {termsData.cancellations || "No cancellation information available."}
                </div>
              </div>
            </section>

            {/* Agreement Section */}
            <section className="container mx-auto px-4 py-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Your Agreement</h3>
                <p className="text-gray-600">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you have any questions, please contact us before proceeding with your booking.
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

export default TermsConditionsPage;
