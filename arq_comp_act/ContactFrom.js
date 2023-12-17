// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
