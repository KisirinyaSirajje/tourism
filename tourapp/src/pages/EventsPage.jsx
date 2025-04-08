import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Use local images instead of unsplash to avoid timeouts
const eventData = [
  {
    title: "Whole Of South Africa",
    price: "$3,560",
    duration: "10 Days/9 Nights",
    image: "/images/safari1.jpg" // Replace with your local image path
  },
  {
    title: "South Africa with Mauritius",
    price: "$4,060",
    duration: "13 Days/14 Nights",
    image: "/images/safari2.jpg" // Replace with your local image path
  },
  {
    title: "Splendid South Africa",
    price: "$2,560",
    duration: "9 Days/10 Nights",
    image: "/images/safari3.jpg" // Replace with your local image path
  },
  {
    title: "Kenya Wildlife Safari",
    price: "$3,200",
    duration: "8 Days/7 Nights",
    image: "/images/safari4.jpg" // Replace with your local image path
  },
  {
    title: "Tanzania Serengeti Adventure",
    price: "$4,150",
    duration: "11 Days/10 Nights",
    image: "/images/safari5.jpg" // Replace with your local image path
  },
  {
    title: "Botswana Delta Experience",
    price: "$3,850",
    duration: "9 Days/8 Nights",
    image: "/images/safari6.jpg" // Replace with your local image path
  }
];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate fetching events data
  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 600));
      setEvents(eventData);
      setIsLoading(false);
    };
    
    fetchEvents();
  }, []);
  
  // Effect to reset visible events count when search term changes
  useEffect(() => {
    setVisibleEvents(3);
  }, [searchTerm]);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.duration.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleLoadMore = () => {
    setVisibleEvents(prev => Math.min(prev + 3, events.length));
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
        ) : (
          <>
            {/* Events Grid */}
            <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
              {filteredEvents.slice(0, visibleEvents).map((event, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg"; // Fallback image
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600">From {event.price}</p>
                    <p className="text-gray-600">{event.duration}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Load More Button */}
            {visibleEvents < filteredEvents.length && (
              <div className="text-center my-4">
                <button
                  onClick={handleLoadMore}
                  className="text-[#DD501DE8] font-semibold"
                >
                  LOAD MORE
                </button>
              </div>
            )}

            {/* No Results Message */}
            {filteredEvents.length === 0 && (
              <div className="text-center my-12">
                <h3 className="text-xl text-gray-600">No events found matching your search.</h3>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-[#DD501DE8] font-semibold"
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
