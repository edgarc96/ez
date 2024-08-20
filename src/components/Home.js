import React, { useRef } from "react";
import "../styles/home.css";

const Home = () => {
  // Crea un ref para la sección de automatización
  const automationSectionRef = useRef(null);

  return (
    <>
      <div className="home">
        <div className="home-content section-1">
          <h1>Bienvenido a EZ LIVING</h1>
          <p className="text-animation">
            Automatización e integración de dispositivos IoT con Home Assistant.
          </p>
          <div className="divider"></div> {/* Divider para la partición */}
        </div>

        {/* Sección a la que queremos hacer scroll */}
        <div
          ref={automationSectionRef}
          className="automation-section section-2"
        >
          <h2>Esto puedes hacer en una casa inteligente</h2>
          <div className="features-container">
            <div className="feature">
              <img
                src={require("../components/images/automate-recuded.gif")}
                alt="Automatización del hogar"
                className="feature-image"
              />
              <div className="feature-text">
                <h3>Automatización del hogar</h3>
                <p>
                  Ajusta el termostato, inicia música en toda la casa, cierra
                  las persianas o puertas, controla una línea de iluminación
                  inteligente, equipos de audio, cámaras, altavoces y más.
                </p>
              </div>
            </div>
            <div className="feature">
              <img
                src={require("../components/images/home_cinema.gif")}
                alt="Cine en casa High-End"
                className="feature-image"
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
            <div className="feature">
              <img
                src={require("../components/images/home-assistant.jpg")}
                alt="Tableta"
                className="feature-image"
              />
              <div className="feature-text">
                <h3>Centro de Control</h3>
                <p>
                  Controla tu hogar con esta tableta, tu centro de comando
                  inteligente. Gestiona luces, cámaras, clima, y más con un
                  simple toque, manteniendo todo bajo control desde cualquier
                  lugar.
                </p>
              </div>
            </div>
            <div className="feature">
              <img
                src={require("../components/images/refri.jpg")}
                alt="Aire"
                className="feature-image"
              />
              <div className="feature-text">
                <h3>Aire Acondicionado</h3>
                <p>
                  Controla la temperatura de tu hogar con facilidad. Ajusta el
                  aire acondicionado desde cualquier lugar utilizando tu tableta
                  de control inteligente. Mantén tu hogar fresco y cómodo con un
                  simple toque, optimizando el clima en cada habitación según
                  tus necesidades
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nueva sección: Servicios */}
        <div className="services-section section-3">
          <h2>Servicios</h2>
          <div className="services-icons-container">
            <img
              src={require("../components/images/bulb.jpg")}
              alt="Iluminación"
              className="service-icon"
            />
            <img
              src={require("../components/images/camera_draw.jpg")}
              alt="Seguridad"
              className="service-icon"
            />
            <img
              src={require("../components/images/sensor image.webp")}
              alt="Sensores"
              className="service-icon"
            />
            <img
              src={require("../components/images/cine_en_casa.png")}
              alt="Sensores"
              className="service-icon"
            />
            <img
              src={require("../components/images/sensores.png")}
              alt="Sensores"
              className="service-icon"
            />
            <img
              src={require("../components/images/temperatura.png")}
              alt="Temperatura"
              className="service-icon"
            />
            <img
              src={require("../components/images/puertas.png")}
              alt="Puertas"
              className="service-icon"
            />
          </div>
        </div>

        {/* Añade más contenido aquí si es necesario */}
        <div className="Brands">
          <p>Algunos Servicios de Integración</p>
          <img src={require("./images/brands.png")} alt="Branding" />
        </div>
      </div>

      <a
        href="https://wa.me/+526861567925"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("./images/whatsapp.png")}
          alt="Contacta por WhatsApp"
        />
      </a>
    </>
  );
};

export default Home;
