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

      <main className="main-content">
        <div style={{ backgroundColor: "red", height: "100px", width: "100%" }}>
          Esto es una prueba para ver si el contenido se renderiza
        </div>
      </main>
    </>
  );
};

export default Header;
