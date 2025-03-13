const EventCard = ({ event }) => {
    return (
      <div className="relative bg-cover bg-center h-64 rounded-lg shadow-lg"
           style={{ backgroundImage: `url(${event.image})` }}>
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{event.name}</h3>
      </div>
    );
  };
  
  export default EventCard;
  