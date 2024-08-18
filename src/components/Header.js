// src/components/Header.js
import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <div className="company-info">
          <h1>SmartLab</h1>
          <p>Mexico City | Los Cabos | Miami</p>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="cta">
        <button>Cotizar</button>
        <div className="language-switcher">
          <button>Español</button>
          <button>English</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
