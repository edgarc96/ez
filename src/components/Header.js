import React from "react";
import "../styles/header.css"; // Asegúrate de tener este archivo en la carpeta styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="EZ LIVING Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#quote" className="quote-button">
              Cotizar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
