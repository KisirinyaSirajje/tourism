// import { useRef, useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { fetchSpecialEvents } from '../services/api';

// const SpecialEventCard = ({ event }) => {
//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-lg h-80">
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//         style={{ backgroundImage: `url(${event.bannerImages1})` }}
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "/images/placeholder.jpg"; // Fallback image
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      
//       {/* Special Event Badge */}
//       <div className="absolute top-4 right-4 bg-[#DD501DE8] text-white text-xs px-3 py-1 rounded-full flex items-center">
//         <FaStar className="mr-1" />
//         <span>Special Event</span>
//       </div>
      
//       <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//         <h3 className="text-2xl font-bold mb-2">{event.heading}</h3>
        
//         {event.calendarDates && (
//           <div className="flex items-center mb-2">
//             <FaCalendarAlt className="mr-2" />
//             <span className="text-sm">{event.calendarDates}</span>
//           </div>
//         )}
        
//         <div className="flex items-center justify-between">
//           {event.numberOfDays && (
//             <span className="bg-white text-[#DD501DE8] px-3 py-1 rounded-full text-sm font-semibold">
//               {event.numberOfDays} Days
//             </span>
//           )}
//           <Link
//             to={`/event/${event.id}`}
//             className="bg-[#DD501DE8] text-white px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SpecialEvents = () => {
//   const scrollRef = useRef(null);
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getEvents = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         const data = await fetchSpecialEvents();
//         setEvents(data);
//       } catch (err) {
//         console.error("Error fetching special events:", err);
//         setError("Failed to load special events. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     getEvents();
//   }, []);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = direction === 'left' ? -350 : 350;
//       current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // If no special events, don't render the component
//   if (!isLoading && !error && events.length === 0) {
//     return null;
//   }

//   return (
//     <div className="py-16 px-6 md:px-10 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Special Events</h2>
//             <p className="text-gray-600 mt-2">Limited-time experiences you won't want to miss</p>
//           </div>
//           <Link to="/events" className="mt-4 md:mt-0 text-[#DD501DE8] font-semibold hover:underline">
//             View All Events
//           </Link>
//         </div>
        
//         <div className="relative mt-8">
//           {isLoading ? (
//             <div className="flex justify-center items-center h-80">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
//             </div>
//           ) : error ? (
//             <div className="bg-red-100 text-red-500 p-6 rounded-lg text-center h-80 flex items-center justify-center">
//               <p>{error}</p>
//             </div>
//           ) : (
//             <>
//               <button
//                 onClick={() => scroll('left')}
//                 className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
//                 aria-label="Scroll left"
//               >
//                 <FaChevronLeft className="text-gray-700" />
//               </button>
              
//               <div
//                 ref={scrollRef}
//                 className="flex overflow-x-auto gap-6 pb-4 scroll-smooth scrollbar-hide"
//                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               >
//                 {events.map((event) => (
//                   <div key={event.id} className="flex-none w-full sm:w-[85%] md:w-[45%] lg:w-[30%]">
//                     <SpecialEventCard event={event} />
//                   </div>
//                 ))}
//               </div>
              
//               <button
//                 onClick={() => scroll('right')}
//                 className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
//                 aria-label="Scroll right"
//               >
//                 <FaChevronRight className="text-gray-700" />
//               </button>
//             </>
//           )}
//         </div>
        
//         {/* Call to action for special events */}
//         {!isLoading && !error && events.length > 0 && (
//           <div className="mt-12 bg-gradient-to-r from-[#DD501DE8] to-[#DD501D] p-6 rounded-lg shadow-md text-white">
//             <h3 className="text-xl font-semibold mb-2">Limited Time Offers!</h3>
//             <p className="mb-4">
//               Our special events are available for a limited time only. Book now to secure your spot 
//               and take advantage of exclusive discounts and packages.
//             </p>
//             <Link 
//               to="/contact" 
//               className="inline-block bg-white text-[#DD501DE8] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
//             >
//               Contact Us to Book
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpecialEvents;

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchSpecialEvents } from '../services/api';

const SpecialEventCard = ({ event }) => {
  return (
    <Link to={`/event/${event.id}`} className="block">
      <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${event.bannerImages1})` }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/placeholder.jpg"; // Fallback image
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        
        {/* Special Event Badge */}
        <div className="absolute top-4 right-4 bg-[#DD501DE8] text-white text-xs px-3 py-1 rounded-full flex items-center">
          <FaStar className="mr-1" />
          <span>Special Event</span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{event.heading}</h3>
          
          {event.calendarDates && (
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <span className="text-sm">{event.calendarDates}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            {event.numberOfDays && (
              <span className="bg-white text-[#DD501DE8] px-3 py-1 rounded-full text-sm font-semibold">
                {event.numberOfDays} Days
              </span>
            )}
            <span
              className="bg-[#DD501DE8] text-white px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SpecialEvents = () => {
  const scrollRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await fetchSpecialEvents();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching special events:", err);
        setError("Failed to load special events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    getEvents();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // If no special events, don't render the component
  if (!isLoading && !error && events.length === 0) {
    return null;
  }

  return (
    <div className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Special Events</h2>
            <p className="text-gray-600 mt-2">Limited-time experiences you won't want to miss</p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0 text-[#DD501DE8] font-semibold hover:underline">
            View All Events
          </Link>
        </div>
        
        <div className="relative mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-80">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-500 p-6 rounded-lg text-center h-80 flex items-center justify-center">
              <p>{error}</p>
            </div>
          ) : (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              
              <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-4 scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {events.map((event) => (
                  <div key={event.id} className="flex-none w-full sm:w-[85%] md:w-[45%] lg:w-[30%]">
                    <SpecialEventCard event={event} />
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => scroll('right')}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll right"
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </>
          )}
        </div>
        
        
      </div>
    </div>
  );
};

export default SpecialEvents;
