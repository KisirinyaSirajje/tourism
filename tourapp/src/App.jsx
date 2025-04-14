
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from "./pages/LandingPage";
// import EventsPage from "./pages/EventsPage";
// import TeamPage from "./pages/TeamsPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import AccessPage from "./pages/AccessPage";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/access" element={<AccessPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           {/* Protected Routes */}
//           <Route 
//             path="/team" 
//             element={
//               <PrivateRoute>
//                 <TeamPage />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/contact" 
//             element={
//               <PrivateRoute>
//                 <ContactPage />
//               </PrivateRoute>
//             } 
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AccessPage from "./pages/AccessPage";
import ProfilePage from "./pages/ProfilePage";

import TermsConditionsPage from "./pages/TermsAndConditions";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
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
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
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
