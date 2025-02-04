import React from 'react'; 
import { NavLink } from 'react-router-dom';

export function NavBar(props) {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <div className="nav-links">
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/filter" className="nav-item">Filter</NavLink>
        <NavLink to="/chat" className="nav-item">Chat</NavLink>
        <NavLink to="/login" className="nav-item">Log in/Sign in</NavLink>
      </div>
    </div>
  );
}
