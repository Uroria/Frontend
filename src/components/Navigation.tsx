import {Container, Nav, Navbar} from "react-bootstrap";
import Button from "./Button";
import {FunctionComponent} from "react";
import {ILanguage} from "../@types/TLanguage";
import Link from "next/link";
import {useRouter} from "next/router";
import {useLanguage} from "../hooks/LanguageHook";

const Navigation: FunctionComponent = () => {

const UroriaNavbar: FunctionComponent<ILanguage> = ({language}) => {
    return <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src="/assets/images/Uroria.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">{language["navbar.item.home"]}</Nav.Link>
                    <Nav.Link href="#features">{language["navbar.item.apply"]}</Nav.Link>
                    <Nav.Link href="#pricing">{language["navbar.item.blog"]}</Nav.Link>
                    <Nav.Link href="#pricing">{language["navbar.item.shop"]}</Nav.Link>
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