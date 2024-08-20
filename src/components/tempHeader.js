import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };

  return (
    <>
      <header className="header">
        <div className="main-header">
          <div className="logo">
            <img src={require("./images/logo.png")} alt="Logo" />
            <div className="company-info">
              <h1>EZ Living</h1>
              <p>Tijuana | Rosarito | Mexicali</p>
            </div>
          </div>

          <div className="cta">
            <a
              href="https://wa.me/1234567890?text=Hola,%20quiero%20cotizar%20sus%20servicios"
              className="quote-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar
            </a>
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
