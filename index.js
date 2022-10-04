
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListStudents from "./student-n/liststudent";
import Students from "./student-n/students";
import StudentsSearchParam from "./student-n/studentsearch";
import Student from './student-n/student';
import Courses from './student-n/courses';
import StudentINCourse from './student-n/studentincourse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >
        <Route path="courses_wuth_param" element={<Courses />} >
          <Route path=":studentincourseid" element={<StudentINCourse/>} />
        </Route>
        <Route path="students" element={<ListStudents />} />
        <Route path="students_with_param" element={<Students />}>
          <Route path=":studentid" element={<Student/>} />
        </Route>
        <Route path="students_search_param" element={<StudentsSearchParam />} />
          {/* no match route*/}
     <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      } 
    />
      </Route>
     
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

