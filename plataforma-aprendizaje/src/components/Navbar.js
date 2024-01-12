// src/components/Navbar.js
import React from 'react';

// Componente funcional Navbar que representa la barra de navegación
const Navbar = ({ onPageClick }) => (
  <nav className="navbar">
    {/* Botón para ir a la página de Inicio */}
    <button onClick={() => onPageClick('Inicio')}>INICIO</button>

    {/* Botón para ir a la página de Cursos */}
    <button onClick={() => onPageClick('Cursos')}>CURSOS</button>

    {/* Botón para ir a la página de Contacto */}
    <button onClick={() => onPageClick('Contacto')}>CONTACTO</button>
  </nav>
);

// Exporta el componente Navbar para que pueda ser utilizado en otros archivos
export default Navbar;
