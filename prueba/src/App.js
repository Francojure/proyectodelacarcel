// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './paginas/inicioSesion';
import Plantilla from './paginas/Plantilla';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/plantilla" element={<Plantilla />} />
        <Route path="/" element={<InicioSesion />} /> {/* Redirecciona a inicio de sesión */}
      </Routes>
    </Router>
  );
};

export default App;


