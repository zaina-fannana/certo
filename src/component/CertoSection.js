import React from "react";
import "../styles/CertoSection.css";
import MobileSecurity from "../assets/Mobile Security.png";
const CertoSection = () => {
  return (
    <div className="certo-section">
      <div className="certo-content">
        <h1 className="headline">
          At Certo, mobile security is not an afterthought, it’s what we do.
        </h1>
        <p className="description">
          With years of experience in mobile security and spyware detection, our
          products have helped countless people safeguard their devices and find
          peace of mind.
        </p>
        <div className="certo-buttons">
          <button className="certo-btn iphone-btn">
            Get Certo for iPhone →
          </button>
          <button className="certo-btn android-btn">
            Get Certo for Android
          </button>
        </div>
      </div>
      <div className="certo-image">
        <img
          src={MobileSecurity}
          alt="Mobile Security"
          className="mobile-image"
        />
      </div>
    </div>
  );
};

export default CertoSection;
