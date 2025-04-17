
import { useState, useEffect } from 'react';
import { FaStar, FaHeart, FaQuoteLeft } from 'react-icons/fa';
import { fetchTestimonials } from '../services/api';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTestimonials();
        
        if (data && data.length > 0) {
          setTestimonials(data);
          setSelectedTestimonial(data[0]); // Select the first testimonial by default
        } else {
          setError('No testimonials found');
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
        setError('Failed to load testimonials. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getTestimonials();
  }, []);

  const handleSelectTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  // Fallback data in case API fails
  const fallbackReviews = [
    { 
      name: "Milton Austin", 
      role: "Sales Manager, ABC", 
      image: "/raj.jpeg", 
      ratings: 5, 
      review: "This trekking organization is excellent. Their costs are minimal due to their NGO's non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders." 
    },
    { 
      name: "Serena", 
      role: "Head of Sales, ABC", 
      image: "/serena.jpeg", 
      ratings: 5, 
      review: "The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and balanced." 
    },
    { 
      name: "Sandra", 
      role: "Head of Sales, ABC", 
      image: "/sandz.JPG", 
      ratings: 5, 
      review: "Amazing experience with this team. They are professional, friendly, and make sure you have the best adventure possible. Highly recommended for anyone looking for a memorable journey." 
    }
  ];

  // Use fallback data if API fails or is loading
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackReviews;
  const displaySelected = selectedTestimonial || (displayTestimonials.length > 0 ? displayTestimonials[0] : null);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }

    if (hasHalfStar && stars.length < 5) {
      stars.push(<FaStar key="half" className="text-gradient-star" />);
    }

    // Fill remaining with empty stars up to 5
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          Why people love Invincible <FaHeart className="text-red-500" />
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
          Experience the best with us
        </h3>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg mt-6">
            <p>{error}</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-10">
            {/* Left side - Reviewers */}
            <div className="w-full md:w-1/3">
              <div className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-xl transition-shadow">
                {displayTestimonials.map((person, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer ${
                      displaySelected && displaySelected.name === person.name ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => handleSelectTestimonial(person)}
                  >
                    <img
                      src={person.profileImage || person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder.jpg"; // Fallback image
                      }}
                    />
                    <div>
                      <h4 className="font-semibold">{person.name}</h4>
                      <p className="text-gray-500 text-sm">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Review Text */}
            {displaySelected && (
              <div className="w-full md:w-2/3">
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  {renderStars(displaySelected.ratings || 5)}
                </div>
                <div className="mt-4 text-gray-700 relative">
                  <FaQuoteLeft className="text-gray-200 text-4xl absolute -left-8 -top-4 hidden sm:block" />
                  <p className="leading-relaxed">
                    {displaySelected.review || "This trekking organization is excellent. Their costs are minimal due to their NGO's non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders."}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
