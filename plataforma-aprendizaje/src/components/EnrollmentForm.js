// src/components/EnrollmentForm.js
import React, { useState } from 'react';

// Componente funcional EnrollmentForm que representa un formulario de inscripción
const EnrollmentForm = ({ onEnroll }) => {
  // Estados para almacenar los datos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Manejadores de cambio para actualizar los estados cuando se ingresan datos
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Manejador para enviar el formulario al hacer clic en el botón "Inscribirse"
  const handleSubmit = () => {
    // Validar los datos si es necesario antes de llamar a onEnroll
    if (name.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Llamar a la función onEnroll con los datos del formulario
    onEnroll({ name, email, phoneNumber });

    // Limpiar los campos después de enviar el formulario
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  // JSX que representa el formulario de inscripción
  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="phoneNumber">Número de Teléfono:</label>
      <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />

      <button onClick={handleSubmit}>Inscribirse</button>
    </div>
  );
};

export default EnrollmentForm;
