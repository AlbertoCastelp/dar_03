// src/components/CourseDetails.js
import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';

const CourseDetails = ({ selectedCourse, onEnroll }) => {
  // Estado para controlar la visibilidad del formulario de inscripción
  const [showForm, setShowForm] = useState(false);

  // Verifica si no hay un curso seleccionado
  if (!selectedCourse) {
    return (
      <div className="course-details-container">
        <p>Selecciona un curso para ver los detalles.</p>
      </div>
    );
  }

  // Obtiene datos del curso seleccionado
  const { title, description } = selectedCourse;

  // Manejador para mostrar el formulario de inscripción al hacer clic en "Inscribirse"
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
      {/* Renderiza el botón "Inscribirse" o el formulario de inscripción según el estado */}
      {!showForm ? (
        <button onClick={handleEnrollClick}>Inscribirse</button>
      ) : (
        <EnrollmentForm onEnroll={(formData) => onEnroll(selectedCourse, formData)} />
      )}
    </div>
  );
};

export default CourseDetails;
