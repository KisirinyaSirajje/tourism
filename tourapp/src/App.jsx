
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AccessPage from "./pages/AccessPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/access" element={<AccessPage />} />
          
          {/* Protected Routes */}
          <Route 
            path="/team" 
            element={
              <PrivateRoute>
                <TeamPage />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
