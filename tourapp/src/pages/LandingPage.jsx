import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import SummerEvents from "../components/SummerEvents";
import SnowTreks from "../components/SnowTreks";
import VideoGallery from "../components/VideoGallery";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <SnowTreks />
      <SummerEvents />
      <VideoGallery />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
