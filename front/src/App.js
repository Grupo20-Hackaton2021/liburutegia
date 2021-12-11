import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Projects from './components/pages/Projects';
import CreateProjects from './components/pages/CreateProject';

document.body.style = "background-color: #648C66"

//debido a la falta de conexion con back se necesita cambiar el nombre del componente dentro del return para
//ver las otras vistas

function App() {
  return (
      <Login />
  );
}

export default App;
