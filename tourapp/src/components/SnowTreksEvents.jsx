

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaMountain, FaSnowflake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchSnowTreksEvents } from '../services/api';

const SnowTrekCard = ({ trek }) => {
  return (
    <Link to={`/event/${trek.id}`} className="block">
      <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${trek.bannerImages1})` }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/placeholder.jpg"; // Fallback image
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        
        {/* Snow Trek Badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center">
          <FaSnowflake className="mr-1" />
          <span>Snow Trek</span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{trek.heading}</h3>
          
          {trek.calendarDates && (
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <span className="text-sm">{trek.calendarDates}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            {trek.numberOfDays && (
              <div className="flex items-center">
                <FaMountain className="mr-1" />
                <span className="text-sm">{trek.numberOfDays} Days</span>
              </div>
            )}
            <span
              className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SnowTreksEvents = () => {
  const scrollRef = useRef(null);
  const [treks, setTreks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTreks = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await fetchSnowTreksEvents();
        setTreks(data);
      } catch (err) {
        console.error("Error fetching snow trek events:", err);
        setError("Failed to load snow trek events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    getTreks();
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

  // If no snow treks, don't render the component
  if (!isLoading && !error && treks.length === 0) {
    return null;
  }

  return (
    <div className="py-16 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Snow Treks</h2>
            <p className="text-gray-600 mt-2">Embark on breathtaking adventures through snow-covered landscapes</p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0 text-blue-600 font-semibold hover:underline">
            View All Treks
          </Link>
        </div>
        
        <div className="relative mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-80">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
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
                {treks.map((trek) => (
                  <div key={trek.id} className="flex-none w-full sm:w-[85%] md:w-[45%] lg:w-[30%]">
                    <SnowTrekCard trek={trek} />
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

export default SnowTreksEvents;
