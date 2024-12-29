import React from "react";
import "../styles/Hero.css";
import MobilePrivacy from "../assets/MobilePrivacy.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your mobile privacy is our mission</h1>
        <p>
          Think your phone has been hacked? Our trusted apps make it easy for
          you to scan, detect and remove threats from your iPhone and Android
          devices.
        </p>
        <div className="hero-buttons">
          <button className="btn-iphone">Get Certo for iPhone →</button>
          <button className="btn-android">Get Certo for Android</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={MobilePrivacy} alt="Mobile Privacy" />
      </div>
    </section>
  );
};

export default Hero;
