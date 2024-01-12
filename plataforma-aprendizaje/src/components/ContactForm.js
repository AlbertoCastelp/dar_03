// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  // Estado para gestionar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado con los nuevos datos del formulario
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Muestra los datos del formulario en la consola (simulación de envío a un servidor)
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <p>¡Nos encantaría saber de ti! Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>

      {/* Formulario de contacto */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
