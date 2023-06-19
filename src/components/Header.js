import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <ul className="nav-links">
          <li className="head">Bookstore CMS</li>
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
