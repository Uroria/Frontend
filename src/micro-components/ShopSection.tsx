"use client"

import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {Container, Row} from "react-bootstrap";
import styles from "../../styles/components/Shop/ShopSection.module.scss"
import {ShopItemLarge, ShopItemMedium, ShopItemSmall} from "./ShopItem/ShopItem";
import {IconClockCancel} from "@tabler/icons-react";
import {IShopSection} from "../@types/TShopSection";

interface ShopSectionComponent {
    section: IShopSection,
    height: number
}

const ShopSection: FunctionComponent<ShopSectionComponent> = ({section, height}) => {

    const headingRef = useRef<null | HTMLHeadingElement>(null);

    //is needed because there is now direct access on headingRef or any update state -> so useEffect solves this issue
    const [headingHeight, setHeadingHeight] = useState<number>(0);
    useEffect(() => setHeadingHeight((headingRef.current?.offsetHeight ?? -14) + 30), [headingRef.current?.offsetHeight])

    return <Container className={styles["shop-section__inner-container"]}>
        <div ref={headingRef} className={styles["shop-section__heading"]}>
            <div className={styles["shop-section__heading__title"]}>
                {section.title}
            </div>
            <div className={styles["shop-section__heading__time"]}>
                <IconClockCancel size={32} style={{marginRight: "0.5rem"}}/> 24 hours
            </div>
        </div>
        {headingHeight != 0 ?
            <Row className={styles["shop-section__inner-row"]} style={{height: (height - headingHeight) + "px"}}>
                {
                    section.items.map((shopItem, key) => {
                        if (shopItem.size == "small") {
                            return <ShopItemSmall key={key} size={"small"}
                                                  item={shopItem.item}
                                                  height={height - headingHeight - 16}/>
                        } else if (shopItem.size == "medium") {
                            return <ShopItemMedium key={key} height={height - headingHeight - 16} size={"medium"}
                                                   item={shopItem.item}/>
                        } else if (shopItem.size == "large") {
                            return <ShopItemLarge key={key} height={height - headingHeight - 16} size={"large"}
                                                  item={shopItem.item}/>
                        }

                        return null;

                    })
                }
            </Row> : null}
    </Container>

}


export default ShopSection;