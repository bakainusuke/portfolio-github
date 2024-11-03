import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this path is correct

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        HUY DO
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/mini-game">Mini Game</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;