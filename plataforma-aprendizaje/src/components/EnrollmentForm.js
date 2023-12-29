// src/components/EnrollmentForm.js
import React, { useState } from 'react';

const EnrollmentForm = ({ onEnroll }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

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
