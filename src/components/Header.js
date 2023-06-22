import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import planetImage from '../images/planet_image.png';
import '../styles/Header.css';

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    if (location.pathname === path) {
      return {
        color: 'rgb(10, 10, 167)',
        textDecoration: 'underline',
      };
    }
    return { color: 'blue' };
  };

  return (
    <header>
      <nav>
        <ul className="nav-links list-none">
          <li><img src={planetImage} className="logo" alt="planet-img" /></li>
          <li className="logo-head">Space Travelers&apos; Hub</li>
          <li className="nav-link">
            <NavLink to="/" style={getLinkStyle('/')}>Rockets</NavLink>
          </li>
          <li className="nav-link nav-link2">
            <NavLink to="/missions" style={getLinkStyle('/missions')}>Missions</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/profile" style={getLinkStyle('/profile')}>My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
