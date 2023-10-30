import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../../styles/components/Navigation.module.scss'
import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Label from "./Label";
import {useLanguage} from "../hooks/LanguageHook";
import menu from "../../public/assets/menu.json"
import {NextRouter, useRouter} from "next/router";
import {Player} from "@lottiefiles/react-lottie-player";
import {ILanguage} from "../@types/TLanguage";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import {IconHome2} from "@tabler/icons-react";

const Navigation = () => {

    const language: ILanguage = useLanguage();
    const router: NextRouter = useRouter();
    const breadcrumb: string[] = router.pathname.slice(1, router.pathname.length).split("/").filter(value => {
        return !(value.startsWith("[") && value.endsWith("]"))
    });
    const breadcrumbLink = (index: number): string => {
        return breadcrumb.map((value, tindex) => {
            return index >= tindex ? `/${value}` : "";
        }).toString();
    }


    return <div className={styles["navigation"]}>
        <Container style={{position: "relative"}}>
            <Navbar collapseOnSelect expand="lg" className={styles["navigation__bar"]}>
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
                        <div
                            className={styles["navbar__nav-item"] + (router.pathname == getHrefWithoutLocale("/") ? " " + styles["navbar__nav-item-active"] : "")}>
                            <Link href={"/"}>{language["nav.links.home"]}</Link>
                        </div>
                        <div
                            className={styles["navbar__nav-item"] + (router.pathname == getHrefWithoutLocale("/creator") ? " " + styles["navbar__nav-item-active"] : "")}>
                            <Link href={"#soon"}>{language["nav.links.creator"]}</Link>
                            <Label onNavigation={true}>{language["nav.label.soon"]}</Label>
                        </div>
                        <div
                            className={styles["navbar__nav-item"] + (router.pathname == getHrefWithoutLocale("/shop") ? " " + styles["navbar__nav-item-active"] : "")}>
                            <Link href={"/shop"}>{language["nav.links.shop"]}</Link>
                            <Label onNavigation={true}>{language["nav.label.soon"]}</Label>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className={styles["navigation__breadcrumb-wrapper"]}>

                {
                    //show home icon before all subpages and only when on subpage
                    breadcrumb.length >= 1 && breadcrumb[0] != "" ?  <Breadcrumb href={"/"}><IconHome2 size={16}/></Breadcrumb> : null
                }

                {
                    breadcrumb.length >= 1 && breadcrumb[0] != "" ? breadcrumb.map((value, index) => {
                        return <>
                            <span>{"/"}</span>
                            <Breadcrumb href={breadcrumbLink(index)}>{value}</Breadcrumb>
                        </>
                    }) : null
                }

            </div>
        </Container>
    </div>
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