import React, { useState } from 'react';

import { faBars, faChevronDown, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../images/logo.svg';
import { NavLink } from '../';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-4 logo">
            <a href="#"><img src={logo} alt="logo Kenniscentrum Data & Maatschappij"/></a>
          </div>
          <div className="col-8 offset-lg-1 col-lg-7">
            <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <button  onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon icon={faBars} color="#FFF" size="lg" /></button>
            </div>
            <div className={menuOpen ? 'nav-language nav-language--open' : 'nav-language'}>
              <div className="close-icon">
                <button  onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon icon={faTimes} color="#FFF" size="lg" /></button>
              </div>
              <nav className="main-nav">
                <ul className="main-nav__list">
                  <li><NavLink className="main-nav__link">Nieuws</NavLink></li>
                  <li><NavLink className="main-nav__link"><span>Kennis</span><FontAwesomeIcon icon={faChevronDown} color="#FFF" size="xs"/></NavLink></li>
                  <li><NavLink className="main-nav__link"><span>Parktijk</span><FontAwesomeIcon icon={faChevronDown} color="#FFF" size="xs"/></NavLink></li>
                  <li><NavLink className="main-nav__link main-nav__link--active">Agenda</NavLink></li>
                  <li><NavLink className="main-nav__link">Over Ons</NavLink></li>
                  <li><NavLink className="main-nav__link"><FontAwesomeIcon icon={faSearch} color="#FFF"/></NavLink></li>
                </ul>
              </nav>
              <div className="language">
                <a href="#" className="language__choice language__choice--active">NL</a> 
                <a href="#" className="language__choice">EN</a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;