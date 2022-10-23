import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../../styles/components/Navigation.module.scss'
import {FunctionComponent, ReactNode, useState} from "react";
import Link from "next/link";
import Label from "./Label";
import {useLanguage} from "../hooks/LanguageHook";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu4"

const Navigation = () => {

    const language = useLanguage();
    const [checked, setChecked] = useState(false);

    return <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Container>
            <Navbar.Brand href="/">
                <img
                    src="/assets/images/Uroria.svg"
                    width="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle style={{border: "none"}} aria-controls="responsive-navbar-nav">
                <UseAnimations className={styles["nav-menu"]} strokeColor={"white"} reverse={checked} onClick={() => {setChecked(!checked);}} animation={menu} size={56}/>
            </Navbar.Toggle>
            <Navbar.Collapse className={styles["nav-collapse"]} id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0">
                </Nav>
                <Nav className="d-flex">
                    <Link href={"/"} passHref><NavigationItem>{language["nav.links.home"]}</NavigationItem></Link>
                    <Link href={""} passHref><NavigationItem
                        label={language["nav.label.soon"]}>{language["nav.links.creator"]}</NavigationItem></Link>
                    <Link href={""} passHref><NavigationItem
                        label={language["nav.label.soon"]}>{language["nav.links.shop"]}</NavigationItem></Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}


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