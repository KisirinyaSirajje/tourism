
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeamPage = () => {
  // State for team members and loading/error states
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch team data from the API
  useEffect(() => {
    const fetchTeamData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch('http://54.210.95.246:3005/api/v1/team');

        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if data has the expected structure
        if (data && Array.isArray(data.data)) {
          setTeamMembers(data.data);
        } else {
          // Fallback to a default structure if API response is unexpected
          console.warn("API response format unexpected, using default structure");
          setTeamMembers(data);
        }
      } catch (err) {
        console.error("Error fetching team data:", err);
        setError("Failed to load team data. Please try again later.");
        
        // Fallback to placeholder data if API fails
        setTeamMembers([
          { name: "Emmy Rosum", title: "Founder", image: "https://source.unsplash.com/200x200/?business,leader" },
          { name: "Nandan Manek", title: "Project Director", image: "https://source.unsplash.com/200x200/?manager" },
          { name: "Hana Mira", title: "Project Advisor", image: "https://source.unsplash.com/200x200/?consultant" },
          { name: "Jitendra", title: "Project Leader", image: "https://source.unsplash.com/200x200/?developer" }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Our Team</h2>
            <p className="mt-2">Meet the brilliant minds behind our success.</p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Team Members</h1>
          
          {error && (
            <div className="text-red-500 text-center mb-6 p-4 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          
          {isLoading ? (
            // Loading state
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DD501DE8]"></div>
            </div>
          ) : (
            // Team members grid
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={member.image || `https://source.unsplash.com/200x200/?person,${index}`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                    }}
                  />
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
