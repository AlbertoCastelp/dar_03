// Navbar.js
import React from 'react';
import './Navbar.css'; // Importar los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Kubernetes</li>
        <li className="nav-item">Charts de Helm</li>
        <li className="nav-item">Script de Linux</li>
      </ul>
    </nav>
  );
};

export default Navbar;
