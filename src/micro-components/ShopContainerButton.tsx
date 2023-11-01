"use client"

import React, {FunctionComponent} from "react";
import {useSwiper} from "swiper/react";
import styles from "../../styles/components/Shop/ShopSection.module.scss";
import Button from "./Button";
import {IconChevronDown, IconChevronUp} from "@tabler/icons-react";


interface ShopContainerButtonProps {
    type: "down" | "up"
}

const ShopContainerButton: FunctionComponent<ShopContainerButtonProps> = ({type}) => {

    const swiper = useSwiper();

    return <div className={styles["shop-section__button-" + type]}>
        <Button onClick={() => type == "down" ? swiper.slideNext() : swiper.slidePrev()} buttonSize={"md"}
                type={"round"} color={"black"}>
            {type == "down" ? <IconChevronDown size={16} style={{marginRight: "0.5rem"}}/> :
                <IconChevronUp size={16} style={{marginRight: "0.5rem"}}/>}{"Page " + type}
        </Button>
    </div>
}

export default ShopContainerButton;