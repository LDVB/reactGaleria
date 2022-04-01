import "./Navigation.css"
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'

const Navigation = () => {

    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand as='span' className="title ">Galeria de Imagenes</Navbar.Brand>
                    <Nav className="line">
                        <NavLink to='/'>
                            <Nav.Link as='span' className="me-auto A">Home</Nav.Link>
                        </NavLink>
                        <NavLink to='/nuevaImagen'>
                            <Nav.Link href="#features" className="me-auto B">Añadir Imagen</Nav.Link>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )

}

export default Navigation