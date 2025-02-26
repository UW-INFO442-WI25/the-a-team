import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Toggle the hamburger menu state
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="nav">
        {/* Logo */}
        <Link to="/">
          <img src="img/Husky_Habitat_logo_copy.png" alt="Husky Habitat logo" className="logo" />
        </Link>

        {/* Hamburger menu icon */}
        <div className="ham-menu" onClick={toggleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop navigation links (appear in nav bar)*/}
        <div className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/about" className="nav-item">About</NavLink>
          <NavLink to="/sign-in" className="nav-item">Sign In</NavLink>
        </div>
      </div>

      {/* Mobile nav links (appear under nav bar) */}
      <div className={`nav-links-mobile ${hamburgerOpen ? 'active' : ''}`}>
        <NavLink to="/" className="nav-item-mobile">Home</NavLink>
        <NavLink to="/about" className="nav-item-mobile">About</NavLink>
        <NavLink to="/sign-in" className="nav-item-mobile">Sign In</NavLink>
      </div>
    </>
  );
}