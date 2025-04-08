import { useState, useRef } from 'react';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const videos = [
  {
    id: 1,
    thumbnail: "/hiking-thumbnail.jpg", // Replace with your actual image path
    title: "Hiking Adventure",
    youtubeId: "VIDEO_ID_1", // Replace with actual YouTube video ID
    description: "Experience breathtaking mountain trails with our expert guides."
  },
  {
    id: 2,
    thumbnail: "/safari-thumbnail.jpg", // Replace with your actual image path
    title: "Safari Adventure",
    youtubeId: "VIDEO_ID_2", // Replace with actual YouTube video ID
    description: "Witness majestic wildlife in their natural habitat."
  },
  {
    id: 3,
    thumbnail: "/camping-thumbnail.jpg", // Replace with your actual image path
    title: "Camping Experience",
    youtubeId: "VIDEO_ID_3", // Replace with actual YouTube video ID
    description: "Enjoy starlit nights and campfire stories in the wilderness."
  },
  {
    id: 4,
    thumbnail: "/trekking-thumbnail.jpg", // Replace with your actual image path
    title: "Trekking Expedition",
    youtubeId: "VIDEO_ID_4", // Replace with actual YouTube video ID
    description: "Challenge yourself with our guided trekking expeditions."
  },
  {
    id: 5,
    thumbnail: "/waterfall-thumbnail.jpg", // Replace with your actual image path
    title: "Waterfall Discovery",
    youtubeId: "https://youtu.be/rJYcmq__nDM?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA", // Replace with actual YouTube video ID
    description: "Discover hidden waterfalls in pristine natural settings."
  }
];

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const scrollRef = useRef(null);
  
  // Function to handle video click and show modal
  const openVideoModal = (videoId) => {
    setActiveVideo(videoId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Function to close modal
  const closeVideoModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Function to scroll the video container
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

  return (
    <div className="py-16 px-10 bg-[#ECD1D1]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Experience Yourself</h2>
          <p className="text-gray-600 mt-2">Exclusive footage from our camps</p>
        </div>
        
        <div className="hidden md:flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="relative mt-8">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="flex-none w-full md:w-[350px] relative rounded-lg overflow-hidden shadow-lg group"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={() => openVideoModal(video.id)}
                  className="bg-white bg-opacity-80 rounded-full p-4 text-red-600 transition-transform duration-300 hover:scale-110"
                >
                  <FaPlay size={24} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                <h3 className="font-semibold">{video.title}</h3>
                {hoveredVideo === video.id && (
                  <p className="text-sm mt-1 text-gray-200">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile scroll buttons */}
        <div className="md:hidden flex justify-center mt-4 space-x-4">
          <button 
            onClick={() => scroll('left')}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <FaTimes size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${videos.find(v => v.id === activeVideo).youtubeId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
