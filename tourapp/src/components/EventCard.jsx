// const EventCard = ({ event }) => {
//     return (
//       <div className="relative bg-cover bg-center h-64 rounded-lg shadow-lg"
//            style={{ backgroundImage: `url(${event.image})` }}>
//         <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
//         <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{event.name}</h3>
//       </div>
//     );
//   };
  
//   export default EventCard;

import React from 'react';

const EventCard = ({ event }) => {
  // Add debugging
  console.log("EventCard rendering with:", event);
  
  // Map API data structure to what the component expects
  const name = event.heading || event.name || 'Unnamed Event';
  const image = event.bannerImages1 || event.image || '/placeholder.jpg';
  
  return (
    <div 
      className="relative bg-cover bg-center h-64 rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 rounded-lg"></div>
      
      {/* Event name */}
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">
        {name}
      </h3>
      
      {/* Price if available */}
      {event.price && (
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-md z-10">
          ${event.price}
        </div>
      )}
      
      {/* Date if available */}
      {event.calendarDates && (
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md z-10">
          {event.calendarDates}
        </div>
      )}
    </div>
  );
};

export default EventCard;
