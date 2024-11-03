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
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/minigame">Minigame</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;