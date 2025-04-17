import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HighlightedEvents from "../components/HighlightedEvents";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import SummerEvents from "../components/SummerEvents";
import VideoGallery from "../components/VideoGallery";
import EpicAdventures from "../components/EpicAdventures";
import SpecialEvents from "../components/SpecialEvents";
import SnowTreksEvents from "../components/SnowTreksEvents";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HighlightedEvents />
      <SnowTreksEvents />
      <SummerEvents />
      <EpicAdventures />
      <SpecialEvents />
      <VideoGallery />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
