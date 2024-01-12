// src/components/CourseMenu.js
import React from 'react';

// CourseMenu es un componente funcional que muestra una lista de cursos como un menú
const CourseMenu = ({ courses, onCourseClick }) => (
  <nav className="course-menu">
    {/* Lista no ordenada que representa el menú de cursos */}
    <ul>
      {/* Mapeo sobre la lista de cursos y crea un elemento de lista para cada curso */}
      {courses.map((course) => (
        <li key={course.id} onClick={() => onCourseClick(course)}>
          {course.title}
        </li>
      ))}
    </ul>
  </nav>
);

export default CourseMenu;
