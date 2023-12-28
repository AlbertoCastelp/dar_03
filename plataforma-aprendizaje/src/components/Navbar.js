// src/components/Navbar.js
import React from 'react';

const Navbar = ({ onPageClick }) => (
  <nav className="navbar">
    <button onClick={() => onPageClick('Inicio')}>INICIO</button>
    <button onClick={() => onPageClick('Cursos')}>CURSOS</button>
    <button onClick={() => onPageClick('Contacto')}>CONTACTO</button>
  </nav>
);

export default Navbar;
