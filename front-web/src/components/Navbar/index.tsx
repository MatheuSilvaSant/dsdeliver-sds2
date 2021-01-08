import React from 'react';

import './styles.css';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="main-navbar">
        <Logo/>
        <a href="home" className="logo-text">DS Deliver</a>
    </nav>
  );
};

export default Navbar;
