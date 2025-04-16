// import { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowLeft, FaChevronRight } from 'react-icons/fa';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const EventDetailsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeImage, setActiveImage] = useState(0);

//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         // First try to get the event from highlighted events
//         let response = await axios.get('http://54.210.95.246:3005/api/v1/events/highlighted-events');
        
//         let foundEvent = response.data.find(event => event.id === parseInt(id));
        
//         // If not found, try epic adventures
//         if (!foundEvent) {
//           response = await axios.get('http://54.210.95.246:3005/api/v1/events/epic-adventure-events');
//           foundEvent = response.data.find(event => event.id === parseInt(id));
//         }
        
//         if (foundEvent) {
//           setEvent(foundEvent);
//         } else {
//           throw new Error('Event not found');
//         }
//       } catch (err) {
//         console.error("Error fetching event details:", err);
//         setError("Failed to load event details. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchEventDetails();
    
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0);
//   }, [id]);

//   const handleImageChange = (index) => {
//     setActiveImage(index);
//   };

//   const getEventImages = () => {
//     if (!event) return [];
    
//     const images = [];
//     if (event.bannerImages1) images.push(event.bannerImages1);
//     if (event.bannerImages2) images.push(event.bannerImages2);
//     if (event.bannerImages3) images.push(event.bannerImages3);
    
//     return images;
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         {/* Back button */}
//         {/* <div className="bg-white shadow-sm">
//           <div className="container mx-auto px-4 py-4">
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center text-gray-600 hover:text-[#DD501DE8]"
//             >
//               <FaArrowLeft className="mr-2" />
//               Back to Events
//             </button>
//           </div>
//         </div> */}
        
//         {isLoading ? (
//           <div className="flex justify-center items-center h-96">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
//           </div>
//         ) : error ? (
//           <div className="container mx-auto px-4 py-16">
//             <div className="bg-red-100 text-red-500 p-6 rounded-lg text-center">
//               <p>{error}</p>
//               <Link to="/" className="mt-4 inline-block bg-[#DD501DE8] text-white px-6 py-2 rounded-lg">
//                 Return Home
//               </Link>
//             </div>
//           </div>
//         ) : event ? (
//           <div className="container mx-auto px-4 py-8">
//             {/* Event Header */}
//             <div className="mb-8">
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{event.heading}</h1>
              
//               <div className="flex flex-wrap gap-4 text-gray-600">
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="mr-2 text-[#DD501DE8]" />
//                   <span>{event.calendarDates}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaClock className="mr-2 text-[#DD501DE8]" />
//                   <span>{event.numberOfDays} Days</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Image Gallery */}
//             <div className="mb-12">
//               <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-4">
//                 {getEventImages().length > 0 ? (
//                   <img
//                     src={getEventImages()[activeImage]}
//                     alt={event.heading}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     <p className="text-gray-500">No image available</p>
//                   </div>
//                 )}
//               </div>
              
//               {getEventImages().length > 1 && (
//                 <div className="flex gap-2 overflow-x-auto pb-2">
//                   {getEventImages().map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleImageChange(index)}
//                       className={`flex-none w-20 h-20 rounded-md overflow-hidden border-2 ${
//                         activeImage === index ? 'border-[#DD501DE8]' : 'border-transparent'
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`${event.heading} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             {/* Event Description */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//               <div className="md:col-span-2">
//                 <h2 className="text-2xl font-bold mb-4">About This Adventure</h2>
//                 <p className="text-gray-700 whitespace-pre-line mb-8">{event.about}</p>
                
//                 {/* Schedule */}
//                 {event.schedule && event.schedule.length > 0 && (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
//                     <div className="space-y-6">
//                       {event.schedule.map((day) => (
//                         <div key={day.day} className="bg-white p-4 rounded-lg shadow-sm">
//                           <div className="flex items-start">
//                             <div className="bg-[#DD501DE8] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
//                               {day.day}
//                             </div>
//                             <div>
//                               <h3 className="font-semibold text-lg">{day.plan}</h3>
//                               {day.bannerImage && (
//                                 <img
//                                   src={day.bannerImage}
//                                   alt={`Day ${day.day}`}
//                                   className="mt-3 rounded-md w-full h-48 object-cover"
//                                 />
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               {/* Booking Card */}
//               <div className="md:col-span-1">
//                 <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
//                   <h3 className="text-xl font-bold mb-4">Book This Adventure</h3>
                  
//                   <div className="mb-4 pb-4 border-b border-gray-200">
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-600">Duration:</span>
//                       <span className="font-semibold">{event.numberOfDays} Days</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Available:</span>
//                       <span className="font-semibold">{event.calendarDates}</span>
//                     </div>
//                   </div>
                  
//                   <div className="mb-6">
//                     <p className="text-gray-600 mb-2">
//                       Ready to embark on this incredible journey? Book now to secure your spot!
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       * Prices vary based on group size and specific dates
//                     </p>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <button className="w-full bg-[#DD501DE8] text-white py-3 rounded-lg font-semibold hover:bg-[#c04418] transition-colors">
//                       Book Now
//                     </button>
//                     <button className="w-full bg-white text-[#DD501DE8] border border-[#DD501DE8] py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
//                       Contact Us
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Related Events */}
//             <div className="mt-16">
//               <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* This would ideally be populated with actual related events */}
//                 {/* For now, we'll show placeholder content */}
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                   <div className="h-48 bg-gray-200 relative">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <p className="text-gray-500">Related Event</p>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold">Similar Adventure</h3>
//                     <p className="text-sm text-gray-600 mt-1">Coming soon</p>
//                   </div>
//                 </div>
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                   <div className="h-48 bg-gray-200 relative">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <p className="text-gray-500">Related Event</p>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold">Similar Adventure</h3>
//                     <p className="text-sm text-gray-600 mt-1">Coming soon</p>
//                   </div>
//                 </div>
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                   <div className="h-48 bg-gray-200 relative">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <p className="text-gray-500">Related Event</p>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold">Similar Adventure</h3>
//                     <p className="text-sm text-gray-600 mt-1">Coming soon</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="container mx-auto px-4 py-16 text-center">
//             <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
//             <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
//             <Link to="/" className="inline-block bg-[#DD501DE8] text-white px-6 py-2 rounded-lg">
//               Return Home
//             </Link>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default EventDetailsPage;


import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchEventById } from '../services/api';

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchEventDetails = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log("Fetching event with ID:", id);
        const eventData = await fetchEventById(id);
        console.log("Fetched event data:", eventData);
        setEvent(eventData);
      } catch (err) {
        console.error("Error fetching event details:", err);
        setError("Failed to load event details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEventDetails();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  const getEventImages = () => {
    if (!event) return [];
    
    const images = [];
    if (event.bannerImages1) images.push(event.bannerImages1);
    if (event.bannerImages2) images.push(event.bannerImages2);
    if (event.bannerImages3) images.push(event.bannerImages3);
    
    // If no banner images, try to use the main image
    if (images.length === 0 && event.image) {
      images.push(event.image);
    }
    
    return images;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Back button */}
        {/* <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => navigate('/events')}
              className="flex items-center text-gray-600 hover:text-[#DD501DE8]"
            >
              <FaArrowLeft className="mr-2" />
              Back to Events
            </button>
          </div>
        </div> */}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
          </div>
        ) : error ? (
          <div className="container mx-auto px-4 py-16">
            <div className="bg-red-100 text-red-500 p-6 rounded-lg text-center">
              <p>{error}</p>
              <Link to="/events" className="mt-4 inline-block bg-[#DD501DE8] text-white px-6 py-2 rounded-lg">
                Return to Events
              </Link>
            </div>
          </div>
        ) : event ? (
          <div className="container mx-auto px-4 py-8">
            {/* Event Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{event.heading || event.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                {event.category && (
                  <span className="bg-[#DD501DE8] text-white text-sm px-3 py-1 rounded-full">
                    {event.category.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                )}
                {event.calendarDates && (
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-[#DD501DE8]" />
                    <span>{event.calendarDates}</span>
                  </div>
                )}
                {(event.numberOfDays || event.duration) && (
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-[#DD501DE8]" />
                    <span>{event.numberOfDays ? `${event.numberOfDays} Days` : event.duration}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Image Gallery */}
            <div className="mb-12">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-4">
                {getEventImages().length > 0 ? (
                  <img
                    src={getEventImages()[activeImage]}
                    alt={event.heading || event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg"; // Fallback image
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
              </div>
              
              {getEventImages().length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {getEventImages().map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`flex-none w-20 h-20 rounded-md overflow-hidden border-2 ${
                        activeImage === index ? 'border-[#DD501DE8]' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${event.heading || event.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/placeholder.jpg"; // Fallback image
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Event Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About This Adventure</h2>
                <p className="text-gray-700 whitespace-pre-line mb-8">{event.about || event.description}</p>
                
                {/* Schedule */}
                {event.schedule && event.schedule.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                    <div className="space-y-6">
                      {event.schedule.map((day) => (
                        <div key={day.day} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-start">
                            <div className="bg-[#DD501DE8] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                              {day.day}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{day.plan}</h3>
                              {day.bannerImage && (
                                <img
                                  src={day.bannerImage}
                                  alt={`Day ${day.day}`}
                                  className="mt-3 rounded-md w-full h-48 object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/images/placeholder.jpg"; // Fallback image
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Booking Card */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                  <h3 className="text-xl font-bold mb-4">Book This Adventure</h3>
                  
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">
                        {event.numberOfDays ? `${event.numberOfDays} Days` : event.duration || 'Contact for details'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available:</span>
                      <span className="font-semibold">{event.calendarDates || 'Contact for availability'}</span>
                    </div>
                    {event.price && (
                      <div className="flex justify-between mt-2">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold">{event.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">
                      Ready to embark on this incredible journey? Book now to secure your spot!
                    </p>
                    <p className="text-sm text-gray-500">
                      * Prices vary based on group size and specific dates
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-[#DD501DE8] text-white py-3 rounded-lg font-semibold hover:bg-[#c04418] transition-colors">
                      Book Now
                    </button>
                    <button className="w-full bg-white text-[#DD501DE8] border border-[#DD501DE8] py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
            <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
            <Link to="/events" className="inline-block bg-[#DD501DE8] text-white px-6 py-2 rounded-lg">
              Return to Events
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EventDetailsPage;
