import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  // State for tracking if sections are visible
  const [visibleSections, setVisibleSections] = useState({
    vision: false,
    mission: false,
    objectives: false
  });

  // Effect for checking if sections are in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['vision', 'mission', 'objectives'];
      
      sections.forEach(section => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          
          if (isVisible && !visibleSections[section]) {
            setVisibleSections(prev => ({
              ...prev,
              [section]: true
            }));
          }
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section - Updated color to match other pages */}
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-2">Who we are & where we stand.</p>
          </div>
        </section>
        
        {/* Vision Section */}
        <section id="vision-section" className="container mx-auto px-4 py-8">
          <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
            visibleSections.vision ? 'opacity-100' : 'opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-600">
            Keeping the core values and the ethics in center, HiddenSafari – the NGO will be a benchmark in training the youth for a better situation. The NGO will work for enhancement of all good qualities in the modern youth with a brighter waw
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section id="mission-section" className="container mx-auto px-4 py-8">
          <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
            visibleSections.mission ? 'opacity-100' : 'opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-600">
            The motive of the NGO is to moderate the young thinking for a happy and developed world. The youth become responsible and understand their own need for the society and country is the heart value of the mission…
            </p>
          </div>
        </section>
        
        {/* Objectives Section */}
        <section id="objectives-section" className="container mx-auto px-4 py-8">
          <div className={`bg-white shadow-md rounded-lg p-6 transition-opacity duration-1000 ${
            visibleSections.objectives ? 'opacity-100' : 'opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-4">Objectives</h3>
            <p className="text-gray-600">The idea of establishing NGO came up during the various activities with other NGOs as a part of collaboration with NSS/NCC in college activities. It was a very clear view behind the organization that it will be for young people and specially students development activities will be given priority.
            Keeping the ethics and value system in center, the NGO has thought for such activities, which will fill valuable qualities in the youth. NGO is thankful to all the young students of various colleges who are voluntarily giving a boost to the activities. For spreading awareness in the field of adventure, NGO has planned some very charming events as per regular basis.</p>
            
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
