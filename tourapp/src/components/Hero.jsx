
import { FaUsers, FaHandsHelping, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center text-white"
         style={{ backgroundImage: "url('boat.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 px-10">
        <h1 className="text-5xl font-bold">Experience Nature</h1>
        <p className="mt-4 text-lg">India's Largest Trekking Organization</p>
      </div>

      <div className="absolute bottom-10 left-10 z-10 grid grid-cols-4 gap-8">
        <div className="text-center">
          <FaUsers className="text-3xl mb-2 mx-auto" />
          <div className="text-2xl font-bold">2,11,500+</div>
          <div className="text-sm">Participants</div>
        </div>
        <div className="text-center">
          <FaHandsHelping className="text-3xl mb-2 mx-auto" />
          <div className="text-2xl font-bold">2750+</div>
          <div className="text-sm">Volunteers</div>
        </div>
        <div className="text-center">
          <FaCalendarAlt className="text-3xl mb-2 mx-auto" />
          <div className="text-2xl font-bold">68+</div>
          <div className="text-sm">Events</div>
        </div>
        <div className="text-center">
          <FaClock className="text-3xl mb-2 mx-auto" />
          <div className="text-2xl font-bold">11</div>
          <div className="text-sm">Years</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
