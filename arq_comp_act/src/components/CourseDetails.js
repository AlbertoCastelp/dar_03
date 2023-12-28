// src/components/CourseDetails.js
import React from 'react';

const CourseDetails = ({ selectedCourse, onEnroll }) => {
  if (!selectedCourse) {
    return <div><p>Selecciona un curso para ver los detalles.</p></div>;
  }

  const { title, description } = selectedCourse;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => onEnroll(selectedCourse)}>Inscribirse</button>
    </div>
  );
};

export default CourseDetails;