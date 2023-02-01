import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            NL
          </Link>
          <div className="menu-icon">
            <i onClick={handleClick} className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/connect' className='nav-links' onClick={closeMobileMenu}>
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
