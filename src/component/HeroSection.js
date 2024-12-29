import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero1">
      <h1>Is someone spying on your phone?</h1>
      <p>Find out with Certo</p>
      <div className="hero-buttons">
        <button className="btn-iphone">Get Certo for iPhone →</button>
        <button className="btn-android">Get Certo for Android</button>
      </div>
    </section>
  );
};

export default HeroSection;
