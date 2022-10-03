import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../../styles/components/Navigation.module.scss'
import {FunctionComponent, ReactNode} from "react";
import Link from "next/link";

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
                <Link href={"/"} passHref><NavigationItem style={styles.navbar__navItem}>Homepage</NavigationItem></Link>
                <Link href={"/events"} passHref><NavigationItem style={styles.navbar__navItem}>Events</NavigationItem></Link>
                <Link href={"/creator"} passHref><NavigationItem style={styles.navbar__navItem}>Creator</NavigationItem></Link>
                <Link href={"/community"} passHref><NavigationItem style={styles.navbar__navItem}>Community</NavigationItem></Link>
                <Link href={"/shop"} passHref><NavigationItem style={styles.navbar__navItem}>Shop</NavigationItem></Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>


/* navigation item */

type NavigationItemProps = {
    children: ReactNode,
    href?: string,
    style: string
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({children, style, href}) => <div
    className={styles.navitem}>
    <a href={href}> {children}</a>
</div>

export default Navigation;