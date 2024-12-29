import React from "react";
import "../styles/InfoSection.css";

const InfoSection = () => {
  return (
    <div className="about-help-container">
      {/* About Section */}
      <div className="about-card">
        <h2>Read our story</h2>
        <p>Find out why thousands trust Certo to secure their mobile world.</p>
        <button className="about-btn">About us →</button>
      </div>

      {/* Help Center Section */}
      <div className="help-card">
        <h2>Help Center</h2>
        <p>Help topics, getting started guides, and FAQs.</p>
        <button className="help-btn">Visit help center</button>
      </div>
    </div>
  );
};

export default InfoSection;
