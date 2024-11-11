import React, { useRef } from "react";
import "../styles/home.css";

const Home = () => {
  const automationSectionRef = useRef(null);

  return (
    <>
      <div className="home">
        <div className="home-content section-1">
          <h1>Bienvenido a EZ LIVING</h1>

          <div className="text-animation">
            <h4>Automatización e integración de dispositivos IoT.</h4>
            <ul>
              <li>
                Instalación y configuración de luces y switches inteligentes de
                diferentes fabricantes.
              </li>
              <li>Sensores inteligentes de movimiento y presencia.</li>
              <li>Control de termostatos de aire acondicionado.</li>
              <li>Sistemas de cámaras de seguridad.</li>
              <li>
                Integración de persianas automatizadas a dashboard de control.
              </li>
            </ul>
          </div>
          <p className="ultimo">
            ¿Ya tienes tus dispositivos inteligentes? - ¡Nosotros te podemos
            ayudar!
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
              src={require("../components/images/nest_thermostat.jpg")}
              alt="Termostato Inteligente"
              className="feature-image"
              loading="lazy"
            />
            <div className="feature-text">
              <h3>Termostato Inteligente</h3>
              <p>
                Descubre el control total de tu hogar con nuestro termostato
                inteligente, que te permite ajustar la temperatura con precisión
                y eficiencia.
                <strong style={{ color: "black" }}> Ahorra energía </strong>
                mientras mantienes la comodidad ideal en cada habitación, todo
                desde la palma de tu mano.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src={require("../components/images/centro_control_ha.jpg")}
              alt="Tablet"
              className="feature-image"
              loading="lazy"
            />
            <div className="feature-text">
              <h3>Dashboard Inteligente</h3>
              <p>
                <strong style={{ color: "black" }}>¡Controla tu hogar </strong>
                desde un solo lugar! Con nuestra tableta/dashboard, gestiona{" "}
                <strong style={{ color: "black" }}>
                  {" "}
                  luces, seguridad, clima y más{" "}
                </strong>
                de forma{" "}
                <strong style={{ color: "black" }}>
                  {" "}
                  rápida y sencilla.
                </strong>{" "}
                Todo el control al alcance de tu mano.
              </p>
            </div>
          </div>
          <div className="contact-section">
            <div className="contact-form">
              <h3>Contáctanos</h3>
              <form action="/enviar-formulario" method="POST">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre completo"
                  required
                />

                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Tu número de teléfono"
                  required
                />

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  required
                />

                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Escribe tu mensaje"
                  required
                ></textarea>

                <button type="submit">Enviar</button>
              </form>
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
