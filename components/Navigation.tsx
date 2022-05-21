import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "./Button";

const UroriaNavbar = () => {
    return <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src="/Uroria.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Startseite</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Shop</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#pricing"><Button color={"green"} text={"Login"}/></Nav.Link>
                    <Nav.Link href="#pricing"><Button color={"blue"} text={"Registrieren"}/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default UroriaNavbar;