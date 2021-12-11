import React from 'react'
import { Card, Container, Form ,Button, Link} from 'react-bootstrap';

const Login = () => {
    return ( 
        <Container className="font mt-2 p-4">
                <Card className="p-4 mt-5 col-md-6 mx-auto" border="dark">
                    <h1 className="text-center mt-4">INICIAR SESIÓN</h1>
                    <Form className="m-3">
                        <Form.Group className="m-3">
                            <Form.Control className="mt-3 mb-3 rounded-pill" placeholder="NÚMERO DE DOCUMENTO" type = "text"/>
                            <Form.Control className="mt-3 mb-3 rounded-pill" placeholder="CONTRASEÑA" type = "password"/>
                            <div className="text-center">
                                <Button type="submit" className="mt-3 primary">INGRESAR</Button>
                            </div>
                            <div className="text-center">
                                <Button type="submit" className="mt-3 primary">CREAR UNA CUENTA</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card>
        </Container>
    );
}
 
export default Login;