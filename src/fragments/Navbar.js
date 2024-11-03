import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Ensure this path is correct

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Get the current location

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

    // Get the current pathname for active link detection
    const currentPath = location.pathname;

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-logo-container">
                <Link to="/">HUY DO</Link>
            </div>
            <div className="navbar-links-container">
                <ul className="navbar-links">
                    <li>
                        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={currentPath === '/projects' ? 'active' : ''}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/minigame" className={currentPath === '/minigame' ? 'active' : ''}>Minigame</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;