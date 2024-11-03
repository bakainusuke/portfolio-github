import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this path is correct

function Navbar(props) {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 0); // Set scrolled state based on scroll position
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Clean up the event listener
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-logo-container">
                <Link to="/">HUY DO</Link>
            </div>
            <div className="navbar-links-container">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/minigame">Minigame</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;