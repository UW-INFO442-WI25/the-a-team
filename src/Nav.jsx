import React from 'react'; 
import { NavLink } from 'react-router-dom';

export function NavBar(props) {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <div className="nav-links">
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/chat" className="nav-item">Chat</NavLink>
        <NavLink to="/sign-in" className="nav-item">Sign In</NavLink>
      </div>
    </div>
  );
}
