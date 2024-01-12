// src/App.js
import React, { useState } from 'react';
import './App.css'; // Importa los estilos globales
import Navbar from './components/Navbar'; // Importa el componente Navbar
import CourseList from './components/CourseList'; // Importa el componente CourseList
import CourseDetails from './components/CourseDetails'; // Importa el componente CourseDetails
import WelcomeContent from './components/WelcomeContent'; // Importa el componente WelcomeContent
import ContactForm from './components/ContactForm'; // Importa el componente ContactForm

const App = () => {
  // Estados para gestionar la página actual y el curso seleccionado
  const [currentPage, setCurrentPage] = useState('Inicio');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Manejador de clics en la barra de navegación
  const handlePageClick = (page) => {
    setCurrentPage(page);
    setSelectedCourse(null); // Limpiar el curso seleccionado al cambiar de página
  };

  // Manejador de selección de cursos
  const handleCourseSelect = (course) => {
    setCurrentPage('Detalles del Curso');
    setSelectedCourse(course);
  };

  // Manejador de inscripción en cursos
  const handleEnroll = (course) => {
    // Mensaje de inscripción al curso
    alert(`¡Te has inscrito en el curso de ${course.title}!`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Plataforma de Aprendizaje en Línea</h1>
        <Navbar onPageClick={handlePageClick} /> {/* Renderiza la barra de navegación */}
      </header>

      <main className="content">
        {currentPage === 'Inicio' && <WelcomeContent />} {/* Renderiza el contenido de bienvenida si la página actual es 'Inicio' */}
        {currentPage === 'Cursos' && <CourseList onCourseSelect={handleCourseSelect} />} {/* Renderiza la lista de cursos si la página actual es 'Cursos' */}
        {currentPage === 'Detalles del Curso' && <CourseDetails selectedCourse={selectedCourse} onEnroll={handleEnroll} />} {/* Renderiza los detalles del curso si la página actual es 'Detalles del Curso' */}
        {currentPage === 'Contacto' && <ContactForm />} {/* Renderiza el formulario de contacto si la página actual es 'Contacto' */}
      </main>

      <footer className="footer">
        <p>&copy; 2023 Plataforma de Aprendizaje en Línea</p>
      </footer>
    </div>
  );
};

export default App;
