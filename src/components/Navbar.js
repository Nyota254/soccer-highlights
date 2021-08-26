import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/socccerhlogo.png";

function Navbar() {
  return (
    <div className="navbar-styling">
      <Link to="/">
        <img className="logo-img" src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/matches-calender">Live Scores</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
}

export default Navbar;
