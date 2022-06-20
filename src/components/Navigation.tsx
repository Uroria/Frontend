import {Container, Nav, Navbar} from "react-bootstrap";
import Button from "./Button";
import {FunctionComponent} from "react";
import {ILanguage} from "../@types/TLanguage";
import Link from "next/link";
import {useRouter} from "next/router";
import {useLanguage} from "../hooks/LanguageHook";

const Navigation: FunctionComponent = () => {

    const locale: string | undefined = useRouter().locale;
    const language: ILanguage = useLanguage();

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
                    <Link href={"/"} locale={locale} passHref><Nav.Link>{language["navbar.item.home"]}</Nav.Link></Link>
                    <Link href={"/apply"} locale={locale} passHref><Nav.Link>{language["navbar.item.apply"]}</Nav.Link></Link>
                    <Link href={"/blog"} locale={locale} passHref><Nav.Link>{language["navbar.item.blog"]}</Nav.Link></Link>
                </Nav>
                <Nav>
                    <Nav.Link><Button disabled={true} color={"green"} text={"Login"}/></Nav.Link>
                    <Link href={useRouter().route} locale={locale == "en_EN" ? "de_DE" : "./en_EN"} passHref replace><a
                        className={"btn-uroria btn-blue"}>{locale == "de_DE" ? "Englisch" : "German"}</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Navigation;