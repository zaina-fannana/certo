import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Certo</div>
      <ul className="navbar-menu">
        <li>
          <a href="#iphone">iPhone</a>
        </li>
        <li>
          <a href="#android">Android</a>
        </li>
        <li>
          <a href="#help">Help</a>
        </li>
        <li>
          <a href="#company">Company</a>
        </li>
      </ul>
      <button className="signin-btn">Sign in</button>
    </nav>
  );
};

export default Navbar;
