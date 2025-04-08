
import {  useRef } from 'react';
import EventCard from "./EventCard";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const events = [
  { name: "Kilimanjaro", image: "/top.jpg" },
  { name: "Madagascar", image: "/cliff.jpg" },
  { name: "Cape Town", image: "/walk.jpg" },
  { name: "Kilimanjaro", image: "/top.jpg" },
  { name: "Madagascar", image: "/cliff.jpg" },
  { name: "Cape Town", image: "/walk.jpg" }
];

const Events = () => {
  const scrollRef = useRef(null);

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
      <h2 className="text-3xl font-bold">Highlighted Events</h2>
      <p className="text-gray-600">Recommended camps by our instructors</p>
      
      <div className="relative mt-8">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event, index) => (
            <div key={index} className="flex-none w-full md:w-1/3">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Events;

// import { useState, useRef, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';

// const EventCard = ({ event }) => {
//   return (
//     <div className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105"
//          style={{ backgroundImage: `url(${event.image || '/placeholder.jpg'})` }}>
//       <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
//       <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{event.name}</h3>
//       {event.price && (
//         <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-md">
//           ${event.price}
//         </div>
//       )}
//     </div>
//   );
// };

// const Events = () => {
//   const scrollRef = useRef(null);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         console.log("Fetching data...");
        
//         const response = await fetch('/api/api/v1/events/1');
        
//         if (!response.ok) {
//           throw new Error(`API request failed with status ${response.status}`);
//         }
        
//         const responseData = await response.json(); // Changed variable name to responseData
//         console.log("Received data:", responseData);
        
//         // Assuming the API returns an object with events array
//         // Adjust this based on the actual API response structure
//         const eventsData = responseData.events || responseData;
        
//         setEvents(Array.isArray(eventsData) ? eventsData : [eventsData]);
//         setError(null);
//       } catch (err) {
//         console.error("Error details:", err);
//         setError("Failed to load events. Please try again later.");
        
//         // Fallback to sample data if API fails
//         setEvents([
//           { name: "Kilimanjaro", image: "/top.jpg" },
//           { name: "Madagascar", image: "/cliff.jpg" },
//           { name: "Cape Town", image: "/walk.jpg" }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   console.log("Current events state:", events);
//   console.log("Loading state:", loading);

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
//     <div className="py-16 px-10 relative">
//       <h2 className="text-3xl font-bold">Highlighted Events</h2>
//       <p className="text-gray-600">Recommended camps by our instructors</p>
      
//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <FaSpinner className="animate-spin text-4xl text-gray-500" />
//           <span className="ml-2">Loading events...</span>
//         </div>
//       ) : error ? (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="relative mt-8">
//           {events.length > 3 && (
//             <button
//               onClick={() => scroll('left')}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//             >
//               <FaChevronLeft className="text-gray-700" />
//             </button>
//           )}

//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {events.length > 0 ? (
//               events.map((event, index) => (
//                 <div key={index} className="flex-none w-full md:w-1/3">
//                   <EventCard event={event} />
//                 </div>
//               ))
//             ) : (
//               <div className="w-full text-center py-10">
//                 <p className="text-gray-500">No events available at the moment.</p>
//               </div>
//             )}
//           </div>

//           {events.length > 3 && (
//             <button
//               onClick={() => scroll('right')}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//             >
//               <FaChevronRight className="text-gray-700" />
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;


// import { useState, useRef, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
// import axios from 'axios';
// import EventCard from './EventCard';

// const Events = () => {
//   const scrollRef = useRef(null);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         console.log("Fetching data with Axios...");
        
//         // Using Axios to fetch data
//         const response = await axios.get('http://54.210.95.246:3005/api/v1/events/1');
//         console.log("Axios response:", response);
        
//         const responseData = response.data;
//         console.log("Received data:", responseData);
        
//         // Check if the response is a single event or an array of events
//         const eventsData = responseData.events || [responseData];
//         console.log("Processed events data:", eventsData);
        
//         setEvents(Array.isArray(eventsData) ? eventsData : [eventsData]);
//         setError(null);
//       } catch (err) {
//         console.error("Error details:", err);
//         setError("Failed to load events. Please try again later.");
        
//         // Fallback to sample data if API fails
//         setEvents([
//           { 
//             heading: "Kilimanjaro", 
//             bannerImages1: "https://i.postimg.cc/wMLnG42G/kilimanjaro.jpg",
//             calendarDates: "August 5 - August 15, 2025"
//           },
//           { 
//             heading: "Madagascar Wildlife Tour", 
//             bannerImages1: "https://source.unsplash.com/random/800x600/?madagascar",
//             calendarDates: "September 10 - September 20, 2025"
//           },
//           { 
//             heading: "Cape Town Adventure", 
//             bannerImages1: "https://source.unsplash.com/random/800x600/?capetown",
//             calendarDates: "October 15 - October 25, 2025"
//           }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   console.log("Current events state:", events);
//   console.log("Loading state:", loading);

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

//   // If we only have one event, let's duplicate it to show multiple cards
//   const displayEvents = events.length === 1 
//     ? [events[0], events[0], events[0]] 
//     : events;

//   return (
//     <div className="py-16 px-10 relative">
//       <h2 className="text-3xl font-bold">Highlighted Events</h2>
//       <p className="text-gray-600">Recommended camps by our instructors</p>
      
//       {loading ? (
//         <div className="flex justify-center items-center h-64 mt-8">
//           <FaSpinner className="animate-spin text-4xl text-gray-500 mr-3" />
//           <span>Loading events...</span>
//         </div>
//       ) : error ? (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="relative mt-8">
//           {displayEvents.length > 3 && (
//             <button
//               onClick={() => scroll('left')}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//             >
//               <FaChevronLeft className="text-gray-700" />
//             </button>
//           )}

//           <div
//             ref={scrollRef}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
//           >
//             {displayEvents.map((event, index) => (
//               <div key={index} className="w-full">
//                 <EventCard event={event} />
//               </div>
//             ))}
//           </div>

//           {displayEvents.length > 3 && (
//             <button
//               onClick={() => scroll('right')}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//             >
//               <FaChevronRight className="text-gray-700" />
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;
