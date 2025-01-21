import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/assets/images/logo.png" alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
