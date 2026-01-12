import "./NavbarStyles.css";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setClick(!click);
    };

    // Change header background on scroll
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setClick(false); // close mobile menu if open
    }

    return (
      <header className={`header ${scrolled ? "header-bg" : ""}`}>
  {/* Logo clickable to Home */}
  <Link to="/" className="logo" onClick={() => setClick(false)} style={{ cursor: "pointer" }}>
    Rebotilwe.dev
  </Link>

  <ul className={`nav-menu ${click ? "active" : ""}`}>
      <li>
          <Link to="/" onClick={() => setClick(false)}>
              Home
          </Link>
      </li>
      <li><Link onClick={() => setClick(false)} to="/project">Projects</Link></li>
      <li><Link onClick={() => setClick(false)} to="/about">About</Link></li>
      <li><Link onClick={() => setClick(false)} to="/contact">Contact</Link></li>
  </ul>

  <div className="hamburger" onClick={handleClick}>
      {click ? <FaTimes size={22} /> : <FaBars size={22} />}
  </div>
</header>

    );
};

export default Navbar;
