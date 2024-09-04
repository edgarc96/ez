import React, { useRef } from "react";
import "../styles/home.css";

const Home = () => {
  const automationSectionRef = useRef(null);

  return (
    <>
      <div className="home">
        <div className="home-content section-1">
          <h1>Bienvenido a EZ LIVING</h1>

          <p className="text-animation">
            <h4>Automatización e integración de dispositivos IoT. </h4>
            <ul>
              <li>Camaras de seguridad </li>
              <li>Sensores de movimiento y presencia </li>
              <li>Iluminación</li>
              <li>Persianas Automatizadas</li>
              <li>
                Si usted ya cuenta con dispositivos y app también se le puede
                dar asesoria
              </li>
            </ul>
          </p>
        </div>
        <div className="module-ha">
          <img
            src={require("../components/images/centro_control_ha.jpg")}
            alt="Modulo"
            className="modulo-icon"
            loading="lazy"
          />
        </div>
        <div className="divider"></div>
      </div>

      <div ref={automationSectionRef} className="automation-section section-2">
        <h2>Esto puedes hacer en una casa inteligente</h2>
        <div className="features-container">
          <div className="feature">
            <img
              src={require("../components/images/automate-recuded.gif")}
              alt="Automatización del hogar"
              className="feature-image"
              loading="lazy"
            />
            <div className="feature-text">
              <h3>Automatización del hogar</h3>
              <p>
                Ajusta el termostato, inicia música en toda la casa, cierra las
                persianas o puertas, controla una línea de iluminación
                inteligente, equipos de audio, cámaras, altavoces y más.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src={require("../components/images/home_cinema.gif")}
              alt="Cine en casa High-End"
              className="feature-image"
              loading="lazy"
            />
            <div className="feature-text">
              <h3>Cine en casa High-End</h3>
              <p>
                Ve tu película favorita, finales deportivas o juega el mejor
                videojuego en una sala de cine en casa, espacios con sonido
                envolvente, iluminación inteligente, audio y video high-end.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section section-3">
        <h2>Servicios</h2>
        <div className="services-icons-container">
          <img
            src={require("../components/images/bulb.jpg")}
            alt="Iluminación"
            className="service-icon"
            loading="lazy"
          />
          <img
            src={require("../components/images/camera_draw.jpg")}
            alt="Seguridad"
            className="service-icon"
            loading="lazy"
          />
          <img
            src={require("../components/images/puertas.png")}
            alt="Puerta"
            className="service-icon"
            loading="lazy"
          />
          <img
            src={require("../components/images/sensor image.webp")}
            alt="Sensor"
            className="service-icon"
            loading="lazy"
          />
          <img
            src={require("../components/images/sensores.png")}
            alt="Sensor"
            className="service-icon"
            loading="lazy"
          />
          <img
            src={require("../components/images/temperatura.png")}
            alt="Sensor"
            className="service-icon"
            loading="lazy"
          />
        </div>
      </div>

      <div className="Brands">
        <p>Algunos Servicios de Integración</p>
        <img
          src={require("../components/images/brands.png")}
          alt="Branding"
          loading="lazy"
        />
      </div>

      <a
        href="https://wa.me/+526861567925"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacta por WhatsApp"
      >
        <img
          src={require("../components/images/whatsapp.png")}
          alt="Contacta por WhatsApp"
          loading="lazy"
        />
      </a>
    </>
  );
};

export default Home;
