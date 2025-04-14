// import { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const AdventureCard = ({ adventure }) => {
//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-lg h-80">
//       <div 
//         className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//         style={{ backgroundImage: `url(${adventure.bannerImages1})` }}
//       ></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      
//       <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//         <h3 className="text-2xl font-bold mb-2">{adventure.heading}</h3>
        
//         <div className="flex items-center mb-2">
//           <FaCalendarAlt className="mr-2" />
//           <span className="text-sm">{adventure.calendarDates}</span>
//         </div>
        
//         <div className="flex items-center justify-between">
//           <span className="bg-[#DD501DE8] text-white px-3 py-1 rounded-full text-sm">
//             {adventure.numberOfDays} Days
//           </span>
//           <Link 
//             to={`/adventure/${adventure.id}`} 
//             className="bg-white text-[#DD501DE8] px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           >
//             Explore
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EpicAdventures = () => {
//   const scrollRef = useRef(null);
//   const [adventures, setAdventures] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAdventures = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         const response = await axios.get('http://54.210.95.246:3005/api/v1/events/epic-adventure-events');
        
//         if (response.data && Array.isArray(response.data)) {
//           setAdventures(response.data);
//         } else {
//           throw new Error('Invalid data format received from API');
//         }
//       } catch (err) {
//         console.error("Error fetching epic adventures:", err);
//         setError("Failed to load epic adventures. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchAdventures();
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

//   return (
//     <div className="py-16 px-6 md:px-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Epic Adventures</h2>
//             <p className="text-gray-600 mt-2">Extraordinary journeys to the world's most extreme and unique destinations</p>
//           </div>
//           <Link to="/adventures" className="mt-4 md:mt-0 text-[#DD501DE8] font-semibold hover:underline">
//             View All Adventures
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
//                 {adventures.map((adventure) => (
//                   <div key={adventure.id} className="flex-none w-full sm:w-[85%] md:w-[45%] lg:w-[30%]">
//                     <AdventureCard adventure={adventure} />
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
        
//         {/* Add some additional info about epic adventures */}
//         {!isLoading && !error && (
//           <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <h3 className="text-xl font-semibold mb-2">What makes these adventures epic?</h3>
//             <p className="text-gray-600">
//               Our epic adventures take you to the most extreme and unique destinations on the planet. 
//               From scorching deserts to remote rivers, these journeys are designed for travelers 
//               seeking extraordinary experiences in the world's most challenging environments.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EpicAdventures;


import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EpicAdventuresCard = ({ event }) => {
  return (
    <div 
      className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105"
      style={{ backgroundImage: `url(${event.bannerImages1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{event.heading}</h3>
    </div>
  );
};

const EpicAdventures = () => {
  const scrollRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await axios.get('http://54.210.95.246:3005/api/v1/events/epic-adventure-events');
        
        if (response.data && Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error("Error fetching highlighted events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEvents();
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
    <div className="py-16 px-10 relative">
      <h2 className="text-3xl font-bold">EpicAdventures</h2>
      <p className="text-gray-600">Push your limits with our most thrilling outdoor challenges</p>
      
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
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {events.map((event) => (
                <div key={event.id} className="flex-none w-full md:w-1/3">
                  <EpicAdventuresCard event={event} />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EpicAdventures;
