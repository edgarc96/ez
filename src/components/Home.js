import React, { useEffect, useRef } from "react";
import "../styles/home.css";

const Home = () => {
  // Crea un ref para la sección de automatización
  const automationSectionRef = useRef(null);

  useEffect(() => {
    // Desplázate a la sección de automatización
    if (automationSectionRef.current) {
      automationSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Bienvenido a EZ LIVING</h1>
        <p>
          Automatización e integración de dispositivos IoT con Home Assistant.
        </p>
      </div>

      {/* Sección a la que queremos hacer scroll */}
      <div ref={automationSectionRef} className="automation-section">
        <h2>Automatización del Hogar</h2>
        <p>Detalles sobre las capacidades de automatización...</p>
      </div>

      {/* Añade más contenido aquí si es necesario */}
      <div style={{ height: "1500px" }}>
        <p>
          Contenido adicional para asegurar que haya espacio para desplazarse.
        </p>
      </div>
    </div>
  );
};

export default Home;
