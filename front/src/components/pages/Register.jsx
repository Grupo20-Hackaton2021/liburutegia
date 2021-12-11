import React from 'react'
import { Card, Container, Form ,Button, Row, Col} from 'react-bootstrap';

document.body.style = "background-color: #648C66"

const Register = () => {
    return ( 
        <Container className="font">
            <Card className="p-3 mt-4 mb-4 col-md-6 mx-auto" border="dark">
                <h1 className="text-center">REGISTRO</h1>
                <Form className="m-3">
                    <Form.Group>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Control className="mt-3 mb-3 rounded-pill" placeholder="Nombres" type = "text"/>
                            </Form.Group>
                            
                            <Form.Group as={Col}>
                                <Form.Control className="mt-3 mb-3 rounded-pill" placeholder="Apellidos" type = "text"/>
                            </Form.Group>
                        </Row>
                        
                        <Form.Control className="mt-3 mb-3 rounded-pill" placeholder="Contraseña" type = "password"/>

                        <Row>
                            <Form.Label>Documento</Form.Label>
                            <Form.Group as={Col}>
                                <Form.Select className="rounded-pill" defaultValue="C.C">
                                    <option>Escoga</option>
                                    <option>T.I</option>
                                    <option>C.C</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} xs={9}>
                                <Form.Control 
                                    className = "rounded-pill"
                                    type = "password"
                                    placeholder = "Número"/>
                            </Form.Group>
                        </Row>

                        <Form.Control className="rounded-pill mt-3 mb-3" placeholder="Contraseña" type = "text"/>

                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Departamento</Form.Label>
                                <Form.Select className="rounded-pill" defaultValue="Departamento">
                                    <option>Norte de santander</option>
                                    <option>Santander</option>
                                    <option>Antioquia</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Municipio</Form.Label>
                                <Form.Select className="rounded-pill" defaultValue="Ocaña">
                                    <option>Ocaña</option>
                                    <option>Abrego</option>
                                    <option>Cucuta</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Rol</Form.Label>
                        <Form.Select className="rounded-pill" defaultValue="Estudiante">
                            <option>Investigador</option>
                            <option>Estudiante</option>
                            <option>Rector</option>
                        </Form.Select>
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="mt-3 primary">Registrarse</Button>
                    </div>
                </Form>
            </Card>
        </Container>
     );
}
 
export default Register;