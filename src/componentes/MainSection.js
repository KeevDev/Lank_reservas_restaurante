import React from 'react';
import '../styles/MainSection.css'; // Importa el archivo CSS que contenga los estilos


const MainSection = () => {
    return (
      <main>
        <div>
          <img className="banner" src="/banner.jpg" alt="Banner" />
          <p className="mensaje">EXPERIENCIA INNOVADORA</p>
          <p className="submensaje">Directo al paladar</p>
          <a href="pages/login.html" className="boton">
            <p className="texto-boton">RESERVA YA</p>
          </a>
        </div>
      </main>
    );
  };
  
  export default MainSection;