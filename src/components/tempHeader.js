import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open", !isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        {/* Barra superior con íconos de redes sociales y contacto */}

        {/* Sección principal del header con logo, navegación y botón */}
        <div className="main-header">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
            <div className="company-info">
              <h1>SmartLab</h1>
              <p>Mexico City | Los Cabos | Miami</p>
            </div>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
          <div className="cta">
            <button className="quote-button">Cotizar</button>
            <div className="language-switcher">
              <button>Español</button>
              <button>English</button>
            </div>
          </div>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            ☰
          </div>
        </div>
      </header>

      {/* Menú deslizante para pantallas pequeñas */}
      <nav className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <button>Cotizar</button>
          </li>
        </ul>
      </nav>

      {/* Overlay para cerrar el menú en pantallas pequeñas */}
      <div
        className={`overlay ${isMobileMenuOpen ? "show" : ""}`}
        onClick={toggleMobileMenu}
      ></div>
    </>
  );
};

export default Header;
