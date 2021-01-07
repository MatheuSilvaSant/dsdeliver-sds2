import React from 'react';

import './styles.css';
import logo from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="main-navbar">
        <img src={logo}/>
        <a href="home" className="logo-text">DS Deliver</a>
    </nav>
  );
};

export default Navbar;
