// import React from "react";
// import '../styles/Header.css';
// // import header from '../assets/header.png';

// const Header = () => {
//   return (
//     <div className="container">
//       <header>
//         <h1>Your mobile privacy is our mission</h1>
//         <p>
//           Think your phone has been hacked? Our trusted apps make it easy for
//           you to scan, detect and remove threats from your iPhone and Android
//           devices.
//         </p>
//         <div className="buttons">
//           <button className="get-button">Get Certo for iPhone</button>
//           <button className="get-button">Get Certo for Android</button>
//         </div>
//       </header>
//       <div className="dashboard">
//       {/* <img src={header} alt="Dashboard" /> */}
//       </div>
//     </div>
//   );
// };

// export default Header;
import React from "react";
import "../styles/Hero.css";

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
          <button className="btn btn-primary">Get Certo for iPhone</button>
          <button className="btn btn-secondary">Get Certo for Android</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="phone-preview.png" alt="Mobile Privacy" />
      </div>
    </section>
  );
};

export default Hero;
