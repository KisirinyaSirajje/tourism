import { FaStar, FaHeart, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  { name: "Milton Austin", role: "Sales Manager, ABC", image: "/raj.jpeg"},
  { name: "Serena", role: "Head of Sales, ABC", image: "/serena.jpeg" },
  { name: "Sandra", role: "Head of Sales, ABC", image: "/sandz.JPG" }
];

const Testimonial = () => {
  return (
    <div className="py-16 px-10 bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        Why people love Invincible <FaHeart className="text-red-500" />
      </h2>
      <h3 className="text-3xl font-bold text-gray-900 mt-2">
        Experience the best with us
      </h3>

      <div className="flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-10">
        {/* Left side - Reviewers */}
        <div className="w-full md:w-1/3">
          <div className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-xl transition-shadow">
            {reviews.map((person, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
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
        <div className="w-full md:w-2/3">
          <div className="flex items-center space-x-1 text-yellow-400 text-xl">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div className="mt-4 text-gray-700 relative">
            <FaQuoteLeft className="text-gray-200 text-4xl absolute -left-8 -top-4" />
            <p className="leading-relaxed">
              This trekking organization is excellent. Their costs are minimal due to their NGO's non-profit efforts.
              You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders.
              The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations.
              The food they serve is healthy and balanced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
