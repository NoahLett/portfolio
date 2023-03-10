import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { GiPerpendicularRings } from 'react-icons/gi';

export default function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleHover = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={closeMobileMenu}>
            <GiPerpendicularRings className={isHovered ? 'rings-hover' : 'rings'}/>Noah Lett
          </Link>
          <div className="menu-icon">
            <i onClick={handleClick} className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/connect' className='nav-links-mobile' onClick={closeMobileMenu}>
                Connect
              </Link>
            </li>
          </ul>
          {button && <Link to='/connect'><Button buttonStyle='btn-outline-alt'>Connect</Button></Link>}
        </div>
      </nav>
    </div>
  );
}
