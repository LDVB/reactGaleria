import "./Navigation.css"
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {

    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="title ">Galeria de Imagenes</Navbar.Brand>
                    <Nav className="line">
                        <Nav.Link href="#home" className="me-auto A">Home</Nav.Link>
                        <Nav.Link href="#features" className="me-auto B">Añadir Imagen</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )

}

export default Navigation