import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../../styles/components/Navigation.module.scss'
import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Label from "./Label";
import {useLanguage} from "../hooks/LanguageHook";
import menu from "../../public/assets/menu.json"
import {useRouter} from "next/router";
import {Player} from "@lottiefiles/react-lottie-player";

const Navigation = () => {

    const language = useLanguage();
    const router = useRouter();

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
            </Navbar.Toggle>
            <Navbar.Collapse className={styles["nav-collapse"]} id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0">
                </Nav>
                <Nav className="d-flex">
                    <div className={styles["navbar__nav-item"] + (router.pathname == getHrefWithoutLocale("/") ? " " + styles["navbar__nav-item-active"] : "")}>
                        <Link href={"/"}>{language["nav.links.home"]}</Link>
                    </div>
                    <div className={styles["navbar__nav-item"] + (router.pathname == getHrefWithoutLocale("/creator") ? " " + styles["navbar__nav-item-active"] : "")}>
                        <Link href={"#soon"}>{language["nav.links.creator"]}</Link>
                        <Label onNavigation={true}>{language["nav.label.soon"]}</Label>
                    </div>
                    <div className={styles["navbar__nav-item"] + (router.pathname == getHrefWithoutLocale("/shop") ? " " + styles["navbar__nav-item-active"] : "")}>
                        <Link href={"/shop"}>{language["nav.links.shop"]}</Link>
                        <Label onNavigation={true}>{language["nav.label.soon"]}</Label>
                    </div>
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


const getHrefWithoutLocale = (href = "/") => {
    const router = useRouter();
    return router.locale && href.includes(router.locale) ? href.replace(router.locale, "") : href;
}

export default Navigation;