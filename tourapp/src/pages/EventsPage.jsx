

// import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { fetchAllEvents } from "../services/api";

// const EventsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [visibleEvents, setVisibleEvents] = useState(6);
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Initialize navigate
  
//   // Fetch all events data from API
//   useEffect(() => {
//     const getEvents = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetchAllEvents();
        
//         // Handle the specific event categories from your API
//         let allEvents = [];
        
//         // List of all event categories to check
//         const eventCategories = [
//           "SnowTreks",
//           "SummerEvents",
//           "MonsoonEvents",
//           "EpicAdventures",
//           "SpecialEvents",
//           "HighlightedEvents"
//         ];
        
//         // Collect events from all categories
//         eventCategories.forEach(category => {
//           if (response[category] && Array.isArray(response[category])) {
//             // Add category as a property to each event for filtering
//             const eventsWithCategory = response[category].map(event => ({
//               ...event,
//               category: category
//             }));
//             allEvents = [...allEvents, ...eventsWithCategory];
//           }
//         });
        
//         // If response has a data property (fallback)
//         if (response.data && allEvents.length === 0) {
//           allEvents = response.data;
//         }
        
//         // If response is an array directly (fallback)
//         if (Array.isArray(response) && allEvents.length === 0) {
//           allEvents = response;
//         }
        
//         console.log("Fetched events:", allEvents);
//         setEvents(allEvents);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//         setError("Failed to load events. Please try again later.");
//         setEvents([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     getEvents();
//   }, []);
  
//   // Effect to reset visible events count when search term changes
//   useEffect(() => {
//     setVisibleEvents(6);
//   }, [searchTerm]);

//   // Handle different data structures in the search
//   const filteredEvents = events.filter(event => {
//     const searchFields = [
//       event.title, 
//       event.heading,
//       event.description, 
//       event.about,
//       event.duration, 
//       event.calendarDates,
//       event.price,
//       event.category
//     ];
    
//     return searchFields.some(field => 
//       field && field.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });
  
//   const handleLoadMore = () => {
//     setVisibleEvents(prev => Math.min(prev + 6, filteredEvents.length));
//   };

//   // Handle click on event card to navigate to details page
//   const handleEventClick = (event) => {
//     navigate(`/events/${event.id}`);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100">
//         {/* Hero Section */}
//         <section className="bg-[#DD501DE8] text-white p-10 pt-28">
//           <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//             <div className="text-left mb-6 md:mb-0">
//               <h2 className="text-3xl font-bold">Events</h2>
//               <p className="mt-2">Life is either a daring adventure or nothing.</p>
//             </div>
//             <div className="bg-white relative w-full md:w-64">
//               <input
//                 type="text"
//                 placeholder="Search Here"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-2 rounded-lg text-black"
//               />
//               <FaSearch className="absolute right-3 top-3 text-gray-500" />
//             </div>
//           </div>
//         </section>

//         {/* Loading State */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
//           </div>
//         ) : error ? (
//           <div className="text-center my-12">
//             <h3 className="text-xl text-red-600">{error}</h3>
//             <button
//               onClick={() => window.location.reload()}
//               className="mt-4 bg-[#DD501DE8] text-white px-4 py-2 rounded"
//             >
//               Try Again
//             </button>
//           </div>
//         ) : (
//           <>
//             {/* Events Count */}
//             <div className="container mx-auto px-10 pt-6">
//               <p className="text-gray-600">Showing {Math.min(visibleEvents, filteredEvents.length)} of {filteredEvents.length} events</p>
//             </div>
            
//             {/* Events Grid */}
//             <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
//               {filteredEvents.slice(0, visibleEvents).map((event, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//                   onClick={() => handleEventClick(event)}
//                 >
//                   {event.category && (
//                     <div className="absolute top-2 right-2 bg-[#DD501DE8] text-white text-xs px-2 py-1 rounded-full">
//                       {event.category.replace(/([A-Z])/g, ' $1').trim()}
//                     </div>
//                   )}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={event.bannerImages1 || event.image || event.imageUrl || "/images/placeholder.jpg"}
//                       alt={event.heading || event.title}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/images/placeholder.jpg"; // Fallback image
//                       }}
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold text-gray-800">{event.heading || event.title}</h3>
                    
//                     <div className="mt-2 space-y-1">
//                       {event.calendarDates && (
//                         <p className="text-gray-600 text-sm flex items-center">
//                           <span className="mr-2">📅</span> {event.calendarDates}
//                         </p>
//                       )}
                      
//                       {event.numberOfDays && (
//                         <p className="text-gray-600 text-sm flex items-center">
//                           <span className="mr-2">⏱️</span> {event.numberOfDays} Days
//                         </p>
//                       )}
                      
//                       {event.duration && (
//                         <p className="text-gray-600 text-sm flex items-center">
//                           <span className="mr-2">⏱️</span> {event.duration}
//                         </p>
//                       )}
                      
//                       {event.price && (
//                         <p className="text-gray-600 text-sm flex items-center">
//                           <span className="mr-2">💰</span> From {event.price}
//                         </p>
//                       )}
//                     </div>
                    
//                     {(event.about || event.description) && (
//                       <p className="text-gray-500 mt-3 text-sm line-clamp-2">
//                         {event.about || event.description}
//                       </p>
//                     )}
                    
//                     <button className="mt-4 text-[#DD501DE8] font-medium text-sm hover:underline">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </section>

//             {/* Load More Button */}
//             {visibleEvents < filteredEvents.length && (
//               <div className="text-center my-8">
//                 <button
//                   onClick={handleLoadMore}
//                   className="bg-[#DD501DE8] text-white px-6 py-2 rounded-full hover:bg-[#c04418] transition-colors duration-300"
//                 >
//                   Load More Events
//                 </button>
//               </div>
//             )}

//             {/* No Results Message */}
//             {filteredEvents.length === 0 && (
//               <div className="text-center my-16 py-10">
//                 <h3 className="text-xl text-gray-600">No events found matching your search.</h3>
//                 <button
//                   onClick={() => setSearchTerm("")}
//                   className="mt-4 bg-[#DD501DE8] text-white px-4 py-2 rounded hover:bg-[#c04418] transition-colors duration-300"
//                 >
//                   Clear Search
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default EventsPage;

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchAllEvents } from "../services/api";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate
  
  // Fetch all events data from API
  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      try {
        const response = await fetchAllEvents();
        
        // Handle the specific event categories from your API
        let allEvents = [];
        
        // List of all event categories to check
        const eventCategories = [
          "SnowTreks",
          "SummerEvents",
          "MonsoonEvents",
          "EpicAdventures",
          "SpecialEvents",
          "HighlightedEvents"
        ];
        
        // Collect events from all categories
        eventCategories.forEach(category => {
          if (response[category] && Array.isArray(response[category])) {
            // Add category as a property to each event for filtering
            const eventsWithCategory = response[category].map(event => ({
              ...event,
              category: category
            }));
            allEvents = [...allEvents, ...eventsWithCategory];
          }
        });
        
        // If response has a data property (fallback)
        if (response.data && allEvents.length === 0) {
          allEvents = response.data;
        }
        
        // If response is an array directly (fallback)
        if (Array.isArray(response) && allEvents.length === 0) {
          allEvents = response;
        }
        
        console.log("Fetched events:", allEvents);
        setEvents(allEvents);
        setError(null);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    getEvents();
  }, []);
  
  // Effect to reset visible events count when search term changes
  useEffect(() => {
    setVisibleEvents(6);
  }, [searchTerm]);

  // Handle different data structures in the search
  const filteredEvents = events.filter(event => {
    const searchFields = [
      event.title,
      event.heading,
      event.description,
      event.about,
      event.duration,
      event.calendarDates,
      event.price,
      event.category
    ];
    
    return searchFields.some(field =>
      field && field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  const handleLoadMore = () => {
    setVisibleEvents(prev => Math.min(prev + 6, filteredEvents.length));
  };

  // Handle click on event card to navigate to details page
  const handleEventClick = (event) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-left mb-6 md:mb-0">
              <h2 className="text-3xl font-bold">Events</h2>
              <p className="mt-2">Life is either a daring adventure or nothing.</p>
            </div>
            <div className="bg-white relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 rounded-lg text-black"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
          </div>
        ) : error ? (
          <div className="text-center my-12">
            <h3 className="text-xl text-red-600">{error}</h3>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-[#DD501DE8] text-white px-4 py-2 rounded"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Events Count */}
            <div className="container mx-auto px-10 pt-6">
              <p className="text-gray-600">Showing {Math.min(visibleEvents, filteredEvents.length)} of {filteredEvents.length} events</p>
            </div>
            
            {/* Events Grid */}
            <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
              {filteredEvents.slice(0, visibleEvents).map((event, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  {event.category && (
                    <div className="absolute top-2 right-2 bg-[#DD501DE8] text-white text-xs px-2 py-1 rounded-full">
                      {event.category.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.bannerImages1 || event.image || event.imageUrl || "/images/placeholder.jpg"}
                      alt={event.heading || event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder.jpg"; // Fallback image
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{event.heading || event.title}</h3>
                    
                    <div className="mt-2 space-y-1">
                      {event.calendarDates && (
                        <p className="text-gray-600 text-sm flex items-center">
                          <span className="mr-2">📅</span> {event.calendarDates}
                        </p>
                      )}
                      
                      {event.numberOfDays && (
                        <p className="text-gray-600 text-sm flex items-center">
                          <span className="mr-2">⏱️</span> {event.numberOfDays} Days
                        </p>
                      )}
                      
                      {event.duration && (
                        <p className="text-gray-600 text-sm flex items-center">
                          <span className="mr-2">⏱️</span> {event.duration}
                        </p>
                      )}
                      
                      {event.price && (
                        <p className="text-gray-600 text-sm flex items-center">
                          <span className="mr-2">💰</span> From {event.price}
                        </p>
                      )}
                    </div>
                    
                    {(event.about || event.description) && (
                      <p className="text-gray-500 mt-3 text-sm line-clamp-2">
                        {event.about || event.description}
                      </p>
                    )}
                    
                    <button className="mt-4 text-[#DD501DE8] font-medium text-sm hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Load More Button */}
            {visibleEvents < filteredEvents.length && (
              <div className="text-center my-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-[#DD501DE8] text-white px-6 py-2 rounded-full hover:bg-[#c04418] transition-colors duration-300"
                >
                  Load More Events
                </button>
              </div>
            )}

            {/* No Results Message */}
            {filteredEvents.length === 0 && (
              <div className="text-center my-16 py-10">
                <h3 className="text-xl text-gray-600">No events found matching your search.</h3>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 bg-[#DD501DE8] text-white px-4 py-2 rounded hover:bg-[#c04418] transition-colors duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
