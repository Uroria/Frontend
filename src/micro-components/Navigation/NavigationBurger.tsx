"use client"

import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import menu from "../../../public/assets/menu.json";
import styles from "./Navigation.module.scss";

type NavigationBurger = {
    onCollapse?: (collapsed: boolean) => void
}

export const NavigationBurger: FunctionComponent<NavigationBurger> = ({onCollapse}) => {

    const playerRef = useRef<Player>();
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {

        onCollapse && onCollapse(checked);

        if (checked) {
            playerRef.current?.setPlayerDirection(1);
        } else {
            playerRef.current?.setPlayerDirection(-1);
        }

    }, [checked])

    // @ts-ignore
    return <Player ref={playerRef}
                   src={menu}
                   className={styles["nav__burger"]}
                   renderer={"svg"}
                   keepLastFrame={true}
                   speed={2}
                   onEvent={event => {

                       if (event != "load") return;

                       playerRef.current?.container?.addEventListener("click", () => {
                           playerRef.current?.play();
                           setChecked(prevState => !prevState);
                       })
                   }}
    />;
}