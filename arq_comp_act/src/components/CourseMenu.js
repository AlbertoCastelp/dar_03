// src/components/CourseMenu.js
import React from 'react';

const CourseMenu = ({ courses, onCourseClick }) => (
  <nav className="course-menu">
    <ul>
      {courses.map((course) => (
        <li key={course.id} onClick={() => onCourseClick(course)}>
          {course.title}
        </li>
      ))}
    </ul>
  </nav>
);

export default CourseMenu;