"use client"

import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import menu from "../../../public/assets/menu.json";
import styles from "./Navigation.module.scss";

export const NavigationBurger: FunctionComponent = () => {

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
                   className={styles["nav__burger"]}
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