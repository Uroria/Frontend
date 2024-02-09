import styles from "./Item.module.scss"
import React, {FunctionComponent, ReactNode} from "react";

interface IItemCard {
    readonly price?: number
    readonly discount?: number
    readonly name: string
    readonly rareness: "common" | "uncommon" | "rare" | "epic" | "legendary"
    readonly type?: "Hat" | "Backpack" | "Baloon" | "Weapon" | "none"
    readonly className?: string
    readonly tag?: string
    readonly disabled?: boolean
    readonly tagBackgroundRed?: boolean
    children: ReactNode[] | ReactNode
}

export const Item: FunctionComponent<IItemCard> = (props) => {

    const {rareness, discount, name, price, type, children, className, tag, tagBackgroundRed = false, disabled = false} = props;

    return <div className={styles["item-card"] + " " + styles[`item-card--${rareness}`] + " " + (disabled ? styles["item-card--disabled"] : "") + (className ? " " + className : "")}>
        {children}

        {tag ? <div className={styles["item-card__tag"]}>
            <div className={styles["item-card__tag__text"] + (tagBackgroundRed ? " " + styles["item-card__tag__text--red"] : "")}>{tag}</div>
        </div> : null}

        <div className={styles["item-card__info"]}>
            {price ? <div className={styles["item-card__info__price"]}>
                {discount ? <div className={styles["item-card__info__price__discount"]}>{price}</div> : null}
                {price - (discount ?? 0)} $
            </div> : null}

            <div className={styles["item-card__info__bottom"]} data-hasdesc={!!type}>
                <div className={styles["item-card__info__bottom__name"]}>{name}</div>
                {type ? <div className={styles["item-card__info__bottom__description"]}>{type}</div> : null}
            </div>

        </div>
    </div>
}