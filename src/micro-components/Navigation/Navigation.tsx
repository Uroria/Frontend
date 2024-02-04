"use client"

import {Nav, Navbar} from "react-bootstrap";
import styles from './Navigation.module.scss'
import React, {useState} from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import {IconHome2} from "@tabler/icons-react";
import {usePathname} from "next/navigation";
import {useLocale} from "next-intl";
import {NavigationBurger} from "./NavigationBurger";
import {NavItem} from "./NavigationItem/NavItem";
import Container from "../Container/Container";

const Navigation = () => {

    const pathname: string = usePathname() || "";
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const locale = useLocale();

    //filter out current locale and pages with params in the url
    const breadcrumb: string[] = pathname.slice(1, pathname.length).split("/").filter(value => {
        return !(value.startsWith("[") && value.endsWith("]") || value.includes(locale))
    });

    //create the matching link
    const breadcrumbLink = (index: number): string => {
        return breadcrumb.map((value, tindex) => {
            return index >= tindex ? `/${value}` : "";
        }).toString();
    }
    


    return <div className={`${styles["nav"]} ${collapsed ? styles["nav--collapsed"] : ""}`}>
        <Container>
            <Navbar collapseOnSelect expand="lg" className={styles["nav__bar"]}>
                <Navbar.Brand href="/">
                    <img
                        src="/assets/images/Uroria.svg"
                        width="70"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle style={{border: "none"}} aria-controls="responsive-navbar-nav">
                    <NavigationBurger onCollapse={collapsed => setCollapsed(collapsed)}/>
                </Navbar.Toggle>
                <Navbar.Collapse className={styles["nav__collapse"]} id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                    </Nav>
                    <Nav className="d-flex">
                        <NavItem href={"/"} lang={"nav-links-home"}/>
                        <NavItem href={"/creator"} lang={"nav-links-creator"} disabled/>
                        <NavItem href={"/shop"} lang={"nav-links-shop"} disabled/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className={styles["nav__breadcrumbs"]}>

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
export default Navigation;