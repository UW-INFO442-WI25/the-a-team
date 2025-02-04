import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export function NavBar(props) {
  return (
    <div className="nav">
      {/* Logo */}
      <Link to="/">
        <img src="img/Husky_Habitat_logo_copy.png" alt="Husky Habitat logo" className="logo" />
      </Link>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/chat" className="nav-item">Chat</NavLink>
        <NavLink to="/sign-in" className="nav-item">Sign In</NavLink>
      </div>
    </div>
  );
}
