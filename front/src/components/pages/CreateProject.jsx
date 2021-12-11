import React, { Fragment } from 'react'
import {Container} from 'react-bootstrap';
import NavBar from '../NavBar';
document.body.style = "background-color: white";

const CreateProject = () => {
    return (
        <div className="vh-100 colorFondo">
            <NavBar />
            <Container>
                <h1 className="text-center mt-4">POSTULAR NUEVO PROYECTO</h1>
            </Container>
        </div>
      );
}
 
export default CreateProject;