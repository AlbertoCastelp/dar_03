// src/components/EnrollmentForm.js
import React, { useState } from 'react';

const EnrollmentForm = ({ onEnroll }) => {
  // Estados para los campos del formulario y el mensaje de error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // Funciones para manejar cambios en los campos
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Función para validar una dirección de correo electrónico con una expresión regular
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Validar los datos antes de llamar a onEnroll
    if (name.trim() === '' || phoneNumber.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, ingresa una dirección de correo electrónico válida.');
      return;
    }

    // Llamar a la función onEnroll con los datos del formulario
    onEnroll({ name, email, phoneNumber });

    // Limpiar los campos después de enviar el formulario y eliminar cualquier mensaje de error
    setName('');
    setEmail('');
    setPhoneNumber('');
    setError('');
  };

  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="phoneNumber">Número de Teléfono:</label>
      <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />

      {/* Mostrar mensaje de error si existe */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleSubmit}>Inscribirse</button>
    </div>
  );
};

export default EnrollmentForm;
