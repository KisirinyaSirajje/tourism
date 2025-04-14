
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TrekCard = ({ trek }) => {
  return (
    <div 
      className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105"
      style={{ backgroundImage: `url(${trek.bannerImages1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{trek.heading}</h3>
    </div>
  );
};

const SnowTreks = () => {
  const scrollRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await axios.get('http://54.210.95.246:3005/api/v1/events/highlighted-events');
        
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
      <h2 className="text-3xl font-bold">Highlighted Adventures</h2>
      <p className="text-gray-600">Experience our most popular and exciting adventure treks</p>
      
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
                  <TrekCard trek={event} />
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

export default SnowTreks;
