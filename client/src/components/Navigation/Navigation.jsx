import "./Navigation.css"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand as='span' className="title ">Galeria de Imagenes</Navbar.Brand>
                    <Nav className="line">
                        <Link to="/nuevaImagen">
                            <Nav.Link className="me-auto B" as="span"> Añadir Imagen </Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )

}

export default Navigation