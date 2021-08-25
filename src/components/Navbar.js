import React from "react";
import "./Navbar.css";
import logo from "../assets/socccerhlogo.png";

function Navbar() {
  return (
    <div className="navbar-styling">
      <img className="logo-img" src={logo} />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Faqs</a>
          </li>
        </ul>
      </nav>
      <a class="cta" href="#">
        <button>Contact</button>
      </a>
    </div>
  );
}

export default Navbar;
