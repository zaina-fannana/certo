import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SignIn from "./pages/SignIn";
import Hero from "./component/Hero";
import Testimonials from "./component/Testimonials";
import ReviewCard from "./component/ReviewCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Testimonials />
      <ReviewCard />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
