import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../../styles/components/Navigation.module.scss'
import React, {FunctionComponent, ReactNode, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Label from "./Label";
import {useLanguage} from "../hooks/LanguageHook";
import menu from "../../public/assets/menu.json"
import {useRouter} from "next/router";
import {Player} from "@lottiefiles/react-lottie-player";

const Navigation = () => {

    const language = useLanguage();

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
                <NavigationBurger/>
                {/*<UseAnimations className={styles["nav-menu"]} strokeColor={"white"} reverse={checked} onClick={() => {
                    setChecked(!checked);
                }} animation={menu} size={56}/>*/}
            </Navbar.Toggle>
            <Navbar.Collapse className={styles["nav-collapse"]} id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0">
                </Nav>
                <Nav className="d-flex">
                    <Link href={"/"} passHref><NavigationItem>{language["nav.links.home"]}</NavigationItem></Link>
                    <Link href={"#soon"} passHref><NavigationItem
                        label={language["nav.label.soon"]}>{language["nav.links.creator"]}</NavigationItem></Link>
                    <Link href={"#soon"} passHref><NavigationItem
                        label={language["nav.label.soon"]}>{language["nav.links.shop"]}</NavigationItem></Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}


const NavigationBurger: FunctionComponent = () => {

    const playerref = useRef<Player>();
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        if (checked) {
            playerref.current?.setPlayerDirection(1);
        } else {
            playerref.current?.setPlayerDirection(-1);
        }

    }, [checked])

    // @ts-ignore
    return <Player ref={playerref}
                   src={menu}
                   className={styles["nav-menu"]}
                   renderer={"svg"}
                   keepLastFrame={true}
                   speed={2}
                   onEvent={event => {

                       if (event != "load") return;

                       playerref.current?.container?.addEventListener("click", () => {
                           playerref.current?.play();
                           setChecked(prevState => !prevState);
                       })
                   }}
    />;
}

/* navigation item */

interface NavigationItemProps {
    children: ReactNode,
    href?: string,
    label?: string
}

const NavigationItem: FunctionComponent<NavigationItemProps> = (props) => {
    const {children, href = "/", label} = props;
    const router = useRouter();
    const hrefWithoutLocale = router.locale && href.includes(router.locale) ? href.replace(router.locale, "") : href;

    return <div
        className={styles["navbar__nav-item"] + (router.pathname == hrefWithoutLocale ? " " + styles["navbar__nav-item-active"] : "")}>
        <a href={href}> {children}</a>
        {label ? <Label onNavigation={true}>{label}</Label> : null}
    </div>
}

export default Navigation;