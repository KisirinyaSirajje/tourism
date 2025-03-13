import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const events = [
  { name: "Kruger Park", image: "/kruger.jpg" },
  { name: "Western Cape", image: "/elephant.jpg" },
  { name: "Addo Park", image: "/giraffe.jpg" },
  { name: "Masai Mara", image: "/elephant2.jpg" },
  { name: "Kruger Park", image: "/kruger.jpg" },
  { name: "Western Cape", image: "/elephant.jpg" }
];

const SummerEventCard = ({ event }) => {
  return (
    <div className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105"
         style={{ backgroundImage: `url(${event.image})` }}>
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{event.name}</h3>
    </div>
  );
};

const SummerEvents = () => {
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
      <h2 className="text-3xl font-bold">Summer Events</h2>
      <p className="text-gray-600">Join our exciting range of summer activities</p>
      
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
              <SummerEventCard event={event} />
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

export default SummerEvents;
