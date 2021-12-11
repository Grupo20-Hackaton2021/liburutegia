import React, {Fragment} from 'react'
import NavBar from '../NavBar';
import Imagen from '../../images/añadir.svg'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

document.body.style = "background-color: white";

const Projects = () => {
    return ( 
        <div className="colorFondo vh-100">
            <NavBar />

            <Container className="font text-center">
                <h1 className="mt-4">POSTULAR NUEVO PROYECTO</h1>

                <img
                    alt="Logo"
                    src={Imagen}
                    width="80"
                    height="80"
                    className="btn d-inline-block"
                />

                <h2 className="mt-4">CONSULTAR PROYECTOS</h2>

                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group>
                            <Form.Control 
                                className = "rounded-pill text-center"
                                placeholder = "Nombre del proyecto"/>
                                
                            <Button className="mt-2">Buscar</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>   
     );
}
 
export default Projects;