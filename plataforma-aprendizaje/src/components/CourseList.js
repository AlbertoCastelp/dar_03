// src/components/CourseList.js
import React, { useState } from 'react';

const CourseList = ({ onCourseSelect }) => {
  const courses = [
    { id: 1, title: 'Desarrollo Web', description: 'Aprende a desarrollar sitios web modernos.' },
    { id: 2, title: 'React.js', description: 'Explora el mundo de React.js para construir aplicaciones interactivas.' },
    { id: 3, title: 'Python', description: 'Inicia tu viaje en la programación con Python.' },
    // Agrega más cursos según sea necesario
  ];

  return (
    <div className="course-list-container">
      <h2>Lista de Cursos</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} onClick={() => onCourseSelect(course)}>
            <button className="course-button">{course.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
