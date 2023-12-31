// src/components/CourseDetails.js
import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';

const CourseDetails = ({ selectedCourse, onEnroll }) => {
  const [showForm, setShowForm] = useState(false);

  if (!selectedCourse) {
    return (
      <div className="course-details-container">
        <p>Selecciona un curso para ver los detalles.</p>
      </div>
    );
  }

  const { title, description } = selectedCourse;

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  return (
    <div className="course-details-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        Bienvenido al curso "{title}" en nuestra Plataforma de Aprendizaje en Línea.
        Este curso está diseñado para proporcionarte conocimientos prácticos y habilidades
        en el área de {title.toLowerCase()}.
      </p>
      <p>
        ¡No dudes en explorar el contenido del curso y participar activamente en las lecciones y ejercicios!
        Si estás listo para comenzar tu viaje de aprendizaje, simplemente haz clic en "Inscribirse" a continuación.
      </p>
      {!showForm ? (
        <button onClick={handleEnrollClick}>Inscribirse</button>
      ) : (
        <EnrollmentForm onEnroll={(formData) => onEnroll(selectedCourse, formData)} />
      )}
    </div>
  );
};

export default CourseDetails;