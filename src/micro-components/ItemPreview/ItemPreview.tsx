import React, {FunctionComponent} from "react";
import styles from "./ItemPreview.module.scss";
import {Item} from "../Item/Item";
import Image from "next/image";

interface IItemPreview {
    readonly rareness: "common" | "uncommon" | "rare" | "epic" | "legendary"
    readonly image: string
    readonly type: "balloon" | "hat" | "backpack" | "weapon"
    readonly disabled?: boolean
    readonly tag?: string
}

export const ItemPreview: FunctionComponent<IItemPreview> = (props) => {

    const {rareness, image, tag, disabled, type = "weapon"} = props;

    return <Item name={""} rareness={rareness} tag={tag} disabled={disabled} className={`${styles["item-preview"]}`}>
        <div className={styles["item-preview__image"]}>
            <img src={image} alt={""}/>
        </div>
        <div className={styles["item-preview__icons"]}>
            <Image width={15} height={15} src={`/assets/images/icon__${type}.png`} alt={""}/>
            <div className={`${styles["item-preview__icons__rareness"]} ${styles["item-preview__icons__rareness-" + rareness]}`}/>
        </div>
    </Item>
}