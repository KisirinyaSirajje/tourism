
// import { FaUsers, FaHandsHelping, FaCalendarAlt, FaClock } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <div className="relative h-screen bg-cover bg-center flex items-center text-white"
//          style={{ backgroundImage: "url('boat.jpg')" }}>
//       <div className="absolute inset-0 bg-black opacity-40"></div>
      
//       <div className="relative z-10 px-10">
//         <h1 className="text-5xl font-bold">Experience Nature</h1>
//         <p className="mt-4 text-lg">India's Largest Trekking Organization</p>
//       </div>

//       <div className="absolute bottom-10 left-10 z-10 grid grid-cols-4 gap-8">
//         <div className="text-center">
//           <FaUsers className="text-3xl mb-2 mx-auto" />
//           <div className="text-2xl font-bold">2,11,500+</div>
//           <div className="text-sm">Participants</div>
//         </div>
//         <div className="text-center">
//           <FaHandsHelping className="text-3xl mb-2 mx-auto" />
//           <div className="text-2xl font-bold">2750+</div>
//           <div className="text-sm">Volunteers</div>
//         </div>
//         <div className="text-center">
//           <FaCalendarAlt className="text-3xl mb-2 mx-auto" />
//           <div className="text-2xl font-bold">68+</div>
//           <div className="text-sm">Events</div>
//         </div>
//         <div className="text-center">
//           <FaClock className="text-3xl mb-2 mx-auto" />
//           <div className="text-2xl font-bold">11</div>
//           <div className="text-sm">Years</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { FaUsers, FaHandsHelping, FaCalendarAlt, FaClock } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <div 
//       className="relative h-screen bg-cover bg-center flex flex-col justify-between text-white"
//       style={{ backgroundImage: "url('boat.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-40"></div>
      
//       {/* Main content - centered on mobile, left-aligned on larger screens */}
//       <div className="relative z-10 px-4 sm:px-10 pt-20 md:pt-0 flex-grow flex items-center">
//         <div className="text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Experience Nature</h1>
//           <p className="mt-2 sm:mt-4 text-base sm:text-lg">India's Largest Trekking Organization</p>
//         </div>
//       </div>
      
//       {/* Stats section - responsive grid */}
//       <div className="relative z-10 w-full px-4 sm:px-10 pb-6 sm:pb-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
//           <div className="text-center bg-black/30 p-3 rounded-lg backdrop-blur-sm">
//             <FaUsers className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
//             <div className="text-lg sm:text-xl md:text-2xl font-bold">2,11,500+</div>
//             <div className="text-xs sm:text-sm">Participants</div>
//           </div>
//           <div className="text-center bg-black/30 p-3 rounded-lg backdrop-blur-sm">
//             <FaHandsHelping className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
//             <div className="text-lg sm:text-xl md:text-2xl font-bold">2750+</div>
//             <div className="text-xs sm:text-sm">Volunteers</div>
//           </div>
//           <div className="text-center bg-black/30 p-3 rounded-lg backdrop-blur-sm">
//             <FaCalendarAlt className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
//             <div className="text-lg sm:text-xl md:text-2xl font-bold">68+</div>
//             <div className="text-xs sm:text-sm">Events</div>
//           </div>
//           <div className="text-center bg-black/30 p-3 rounded-lg backdrop-blur-sm">
//             <FaClock className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
//             <div className="text-lg sm:text-xl md:text-2xl font-bold">11</div>
//             <div className="text-xs sm:text-sm">Years</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { FaUsers, FaHandsHelping, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center text-white"
         style={{ backgroundImage: "url('boat.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Main content - maintains original position */}
      <div className="relative z-10 px-4 sm:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Experience Nature</h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg">India's Largest Trekking Organization</p>
      </div>
      
      {/* Stats section - maintains bottom-left position but becomes responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 z-10 w-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          <div className="text-center">
            <FaUsers className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold">2,11,500+</div>
            <div className="text-xs sm:text-sm">Participants</div>
          </div>
          <div className="text-center">
            <FaHandsHelping className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold">2750+</div>
            <div className="text-xs sm:text-sm">Volunteers</div>
          </div>
          <div className="text-center">
            <FaCalendarAlt className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold">68+</div>
            <div className="text-xs sm:text-sm">Events</div>
          </div>
          <div className="text-center">
            <FaClock className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 mx-auto" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold">11</div>
            <div className="text-xs sm:text-sm">Years</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
