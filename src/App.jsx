import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

// Import Segment Pages
import Segments from "./pages/segments/Segments";
import CampusWifi from "./pages/segments/CampusWifi";
import Residential from "./pages/segments/Residential";
import Corporate from "./pages/segments/Corporate";
import Hospitality from "./pages/segments/Hospitality";

// Import Legal Pages
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicies from "./pages/PrivacyPolicies";

// Import Delete Account Page
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum display time: 2000ms so the animation is visible
    const minTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Also listen for full window load (images, fonts, etc.)
    const onLoad = () => {
      // Ensure we still show for at least the minimum time
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      {/* Global loading overlay – sits above everything */}
      <LoadingScreen visible={loading} />

      <Router>
        <Header />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Segment Pages */}
            <Route path="/segments" element={<Segments />} />
            <Route path="/segments/campus-wifi" element={<CampusWifi />} />
            <Route path="/segments/residential" element={<Residential />} />
            <Route path="/segments/corporate" element={<Corporate />} />
            <Route path="/segments/hospitality" element={<Hospitality />} />

            {/* Legal Pages */}
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policies" element={<PrivacyPolicies />} />

            {/* Delete Account Page */}
            <Route path="/delete-account" element={<DeleteAccount />} />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
