import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={handleToggle}>
        {isOpen?<span className="navbar-toggle-icon">▲</span>:<span className="navbar-toggle-icon">▼</span>}
        
      </div>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <h1 className="navbar-title">Fantastic World</h1>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/offer" className="navbar-link">Offer</Link>
        </li>
        <li className="navbar-item">
          <Link to="/jwellary" className="navbar-link">Jewellery</Link>
        </li>
        <li className="navbar-item">
          <Link to="/bangle" className="navbar-link">Bangles</Link>
        </li>
        <li className="navbar-item">
          <Link to="/worship" className="navbar-link">Worship</Link>
        </li>
        <li className="navbar-item">
          <Link to="/stationary" className="navbar-link">Stationary</Link>
        </li>
        <li className="navbar-item">
          <Link to="/gift" className="navbar-link">Gift</Link>
        </li>
      </ul>
    </nav>
  );
}
