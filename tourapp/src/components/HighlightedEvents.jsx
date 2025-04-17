
// import { useRef, useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { fetchHighlightedEvents } from '../services/api'; // Updated path


// const TrekCard = ({ trek }) => {
//   return (
//     <Link to={`/event/${trek.id}`} className="block">
//       <div
//         className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105 group"
//         style={{ backgroundImage: `url(${trek.bannerImages1})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity rounded-lg"></div>
        
//         <div className="absolute bottom-0 left-0 right-0 p-4">
//           <h3 className="text-white text-xl font-semibold mb-2">{trek.heading}</h3>
          
//           {trek.calendarDates && (
//             <div className="flex items-center text-white/90 text-sm mb-2">
//               <FaCalendarAlt className="mr-1" />
//               <span>{trek.calendarDates}</span>
//             </div>
//           )}
          
//           <span className="inline-block bg-[#DD501DE8] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//             View Details
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const SnowTreks = () => {
//   const scrollRef = useRef(null);
//   const [events, setEvents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getEvents = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         const data = await fetchHighlightedEvents();
//         setEvents(data);
//       } catch (err) {
//         console.error("Error fetching highlighted events:", err);
//         setError("Failed to load events. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     getEvents();
//   }, []);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="py-16 px-4 md:px-10 relative">
//       <h2 className="text-3xl font-bold">Highlighted Events</h2>
//       <p className="text-gray-600 mb-6">Experience our most popular and exciting adventure treks</p>
      
//       <div className="relative mt-8">
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
//           </div>
//         ) : error ? (
//           <div className="bg-red-100 text-red-500 p-4 rounded-lg text-center">
//             {error}
//           </div>
//         ) : (
//           <>
//             {events.length > 0 && (
//               <button
//                 onClick={() => scroll('left')}
//                 className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
//                 aria-label="Scroll left"
//               >
//                 <FaChevronLeft className="text-gray-700" />
//               </button>
//             )}
            
//             <div
//               ref={scrollRef}
//               className="flex overflow-x-auto gap-4 md:gap-6 scroll-smooth pb-4 hide-scrollbar"
//               style={{ 
//                 scrollbarWidth: 'none', 
//                 msOverflowStyle: 'none', 
//                 WebkitOverflowScrolling: 'touch' 
//               }}
//             >
//               {events.map((event) => (
//                 <div key={event.id} className="flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]">
//                   <TrekCard trek={event} />
//                 </div>
//               ))}
//             </div>
            
//             {events.length > 0 && (
//               <button
//                 onClick={() => scroll('right')}
//                 className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
//                 aria-label="Scroll right"
//               >
//                 <FaChevronRight className="text-gray-700" />
//               </button>
//             )}
//           </>
//         )}
//       </div>
      
     
//     </div>
//   );
// };

// export default SnowTreks;

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchHighlightedEvents } from '../services/api'; // Updated path

const TrekCard = ({ trek }) => {
  return (
    <Link to={`/event/${trek.id}`} className="block">
      <div
        className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105 group cursor-pointer"
        style={{ backgroundImage: `url(${trek.bannerImages1})` }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.jpg"; // Fallback image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity rounded-lg"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold mb-2">{trek.heading}</h3>
          
          {trek.calendarDates && (
            <div className="flex items-center text-white/90 text-sm mb-2">
              <FaCalendarAlt className="mr-1" />
              <span>{trek.calendarDates}</span>
            </div>
          )}
          
          <span className="inline-block bg-[#DD501DE8] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

const SnowTreks = () => {
  const scrollRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await fetchHighlightedEvents();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching highlighted events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    getEvents();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-16 px-4 md:px-10 relative">
      <h2 className="text-3xl font-bold">Highlighted Events</h2>
      <p className="text-gray-600 mb-6">Experience our most popular and exciting adventure treks</p>
      
      <div className="relative mt-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-500 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : (
          <>
            {events.length > 0 && (
              <button
                onClick={() => scroll('left')}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
            )}
            
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 md:gap-6 scroll-smooth pb-4 hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {events.map((event) => (
                <div key={event.id} className="flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]">
                  <TrekCard trek={event} />
                </div>
              ))}
            </div>
            
            {events.length > 0 && (
              <button
                onClick={() => scroll('right')}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll right"
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            )}
          </>
        )}
      </div>
      
    </div>
  );
};

export default SnowTreks;
