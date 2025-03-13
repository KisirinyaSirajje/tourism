import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const treks = [
  { name: "Kilimanjaro Trek", image: "/kilimanjaro.jpg" },
  { name: "Mount Kenya Trek", image: "/rwenzori1.jpg" },
  { name: "Rwenzori Trek", image: "/rwenzori.jpg" },
  { name: "Atlas Trek", image: "/atlas.jpg" },
  { name: "Kilimanjaro Trek", image: "/kilimanjaro.jpg" },
  { name: "Mount Kenya Trek", image: "/rwenzori1.jpg" }
];

const TrekCard = ({ trek }) => {
  return (
    <div className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform hover:scale-105"
         style={{ backgroundImage: `url(${trek.image})` }}>
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{trek.name}</h3>
    </div>
  );
};

const SnowTreks = () => {
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
      <h2 className="text-3xl font-bold">Snow Treks</h2>
      <p className="text-gray-600">Experience the magic of winter landscapes with our guided snow treks</p>
      
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
          {treks.map((trek, index) => (
            <div key={index} className="flex-none w-full md:w-1/3">
              <TrekCard trek={trek} />
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

export default SnowTreks;
