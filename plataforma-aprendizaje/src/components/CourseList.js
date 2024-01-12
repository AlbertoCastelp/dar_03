// src/components/CourseList.js
import React from 'react';
import desarrolloWebImage from '../images/desarrollo-web-3.jpg';
import reactImage from '../images/react.jpg';
import pythonImage from '../images/919038_3ae1_11.jpg';

const CourseList = ({ onCourseSelect }) => {
  // Definición de cursos con sus detalles
  const courses = [
    { id: 1, title: 'Desarrollo Web', description: 'Aprende a desarrollar sitios web modernos. Este curso te enseñará las tecnologías más populares en el desarrollo web, incluyendo HTML, CSS y JavaScript.', image: desarrolloWebImage },
    { id: 2, title: 'React.js', description: 'Explora el mundo de React.js para construir aplicaciones interactivas. Este curso cubre los conceptos fundamentales de React y cómo construir componentes reutilizables.', image: reactImage },
    { id: 3, title: 'Python', description: 'Inicia tu viaje en la programación con Python. Este curso es ideal para principiantes y cubre los conceptos básicos de la programación utilizando Python.', image: pythonImage },
    // Agrega más cursos según sea necesario
  ];

  return (
    <div className="course-list-container">
      <h2>Descubre Nuestros Cursos</h2>
      <p>Explora nuestra selección de cursos y elige el camino que más te apasiona. Desde desarrollo web hasta programación en Python, tenemos cursos para todos los niveles.</p>
      <ul className="course-list">
        {/* Mapea sobre la lista de cursos y crea un elemento para cada uno */}
        {courses.map(course => (
          <li key={course.id} onClick={() => onCourseSelect(course)}>
            <div className="course-card">
              {/* Imagen del curso con estilos para ajustar su tamaño */}
              <img
                src={course.image}
                alt={`Imagen de ${course.title}`}
                className="course-image"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="course-button">Ver Detalles</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
