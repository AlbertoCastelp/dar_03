// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import WelcomeContent from './components/WelcomeContent';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Inicio');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    setSelectedCourse(null); // Limpiar el curso seleccionado al cambiar de página
  };

  const handleCourseSelect = (course) => {
    setCurrentPage('Detalles del Curso');
    setSelectedCourse(course);
  };

  const handleEnroll = (course) => {
    // Mensaje de  inscripción al curso
    alert(`¡Te has inscrito en el curso de ${course.title}!`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Plataforma de Aprendizaje en Línea</h1>
        <Navbar onPageClick={handlePageClick} />
      </header>

      <main className="content">
        {currentPage === 'Inicio' && <WelcomeContent />}
        {currentPage === 'Cursos' && <CourseList onCourseSelect={handleCourseSelect} />}
        {currentPage === 'Detalles del Curso' && <CourseDetails selectedCourse={selectedCourse} onEnroll={handleEnroll} />}
      </main>

      <footer className="footer">
        <p>&copy; 2023 Plataforma de Aprendizaje en Línea</p>
      </footer>
    </div>
  );
};

export default App;