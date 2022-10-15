import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../../styles/components/Navigation.module.scss'
import {FunctionComponent, ReactNode} from "react";
import Link from "next/link";
import Label from "./Label";

const Navigation = () => <Navbar collapseOnSelect fixed={"top"} expand="lg" className={styles.navbar}>
    <Container>
        <Navbar.Brand href="/">
            <img
                src="/assets/images/Uroria.svg"
                width="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
            </Nav>
            <Nav className="d-flex">
                <Link href={"/"} passHref><NavigationItem>Homepage</NavigationItem></Link>
                <Link href={""} passHref><NavigationItem label={"soon"}>Creator</NavigationItem></Link>
                <Link href={""} passHref><NavigationItem label={"soon"}>Shop</NavigationItem></Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>


/* navigation item */

interface NavigationItemProps {
    children: ReactNode,
    href?: string,
    label?: string
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({children, href, label}) => <div
    className={styles.navitem}>
    <a href={href}> {children}</a>
    {label ? <Label onNavigation={true}>{label}</Label> : null}
</div>

export default Navigation;