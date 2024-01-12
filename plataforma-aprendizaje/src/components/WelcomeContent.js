// src/components/WelcomeContent.js
import React from 'react';
import welcomeImage from '../images/4e8a3406-af93-49b3-ac0b-11cc35dbc68e.jpeg';

// Componente funcional WelcomeContent que representa el contenido de bienvenida
const WelcomeContent = () => (
  <div className="welcome-container">
    <div className="welcome-content">
      <div className="welcome-text">
        {/* Título principal */}
        <h2>Bienvenido a la Plataforma de Aprendizaje en Línea</h2>

        {/* Mensaje de bienvenida */}
        <p>¡Empieza tu viaje de aprendizaje hoy mismo!</p>

        <div className="additional-content">
          {/* Encabezado para destacar lo que se ofrece */}
          <h3>Descubre lo que ofrecemos:</h3>

          {/* Lista de características */}
          <ul>
            <li>Cursos interactivos y emocionantes</li>
            <li>Profesores apasionados y expertos</li>
            <li>Recursos multimedia de alta calidad</li>
            <li>Comunidad activa de aprendices</li>
          </ul>

          {/* Mensaje adicional */}
          <p>¡Explora, aprende y crece con nosotros!</p>
        </div>
      </div>

      {/* Imagen sugerida para mejorar la presentación visual */}
      <img
        src={welcomeImage}
        alt="Imagen representativa de la plataforma de aprendizaje"
        className="welcome-image"
      />
    </div>
  </div>
);

// Exporta el componente WelcomeContent para que pueda ser utilizado en otros archivos
export default WelcomeContent;
