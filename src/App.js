import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SignIn from "./pages/SignIn";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonials";
import ReviewCard from "./component/ReviewCard";
import CertoSection from "./component/CertoSection";
import Features from "./component/Features";
import InfoSection from "./component/InfoSection";
import HeroSection from "./component/HeroSection";
import LatestInsights from "./component/LatestInsights";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Testimonials />
      {/* <ReviewCard /> */}
      <CertoSection />
      <Features />
      <InfoSection />
      <HeroSection />
      <LatestInsights />
      <Footer />
      []
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
