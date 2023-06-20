import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import planetImage from '../images/planet_image.png';
import '../styles/Header.css';

export default function Header() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    if (location.pathname === path) {
      return { color: 'black' };
    }
    return { color: 'grey' };
  };

  return (
    <header>
      <nav>
        <ul className="nav-links list-none">
          <li><img src={planetImage} className="img" alt="planet-img" /></li>
          <li className="route">
            <Link to="/" style={getLinkStyle('/')}>Rockets</Link>
          </li>
          <li className="route">
            <Link to="/missions" style={getLinkStyle('/missions')}>Missions</Link>
          </li>
          <li className="route">
            <Link to="/profile" style={getLinkStyle('/profile')}>My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
