import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 0);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const currentPath = location.pathname;

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-logo-container">
                <Link to="/">HUY DO</Link>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </div>

            <div className={`navbar-links-container ${menuOpen ? "open" : ""}`}>
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