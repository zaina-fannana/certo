import React from "react";
import "../styles/Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h1>Get your freedom back, stop mobile spyware today</h1>
      <div className="features-grid">
        <div className="feature-item">
          <div className="icon">🔍</div>
          <h2>Spyware detection</h2>
          <p>
            Our advanced spyware detection can identify if a device contains
            spyware or bugging software.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">⌨️</div>
          <h2>Keylogger detection</h2>
          <p>
            Find malicious keyloggers installed on your device that could
            compromise your sensitive information.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">📱</div>
          <h2>Find tracking apps</h2>
          <p>
            Check which apps can access your location, microphone, or camera.
            Get alerted if a known tracking app is installed.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">🛡️</div>
          <h2>OS integrity check</h2>
          <p>
            Analyze your operating system for signs of tampering that could
            compromise security, such as jailbreaking.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">🚫</div>
          <h2>Threat removal</h2>
          <p>
            Our intelligent scan will efficiently remove any threats to your
            device.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">✅</div>
          <h2>Easy to use</h2>
          <p>
            We create easy-to-use solutions that secure your device in a matter
            of minutes.
          </p>
        </div>
      </div>
      <div className="hero-buttons">
        <button className="btn-iphone">Get Certo for iPhone →</button>
        <button className="btn-android">Get Certo for Android</button>
      </div>
    </div>
  );
};

export default Features;
