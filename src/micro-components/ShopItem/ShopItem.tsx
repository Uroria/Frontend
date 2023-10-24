import React, {FunctionComponent, ReactNode} from "react";
import styles from "./ShopItem.module.scss";
import {Col} from "react-bootstrap";
import {
    LargeShopItemContainer,
    MediumShopItemContainer,
    IShopItem,
    SmallShopItemContainer
} from "../../@types/TShopSection";
import {Item} from "../Item/Item";

interface ShopItemSmall extends SmallShopItemContainer {
    height: number
}

interface ShopItemMedium extends MediumShopItemContainer {
    height: number
}

interface ShopItemLarge extends LargeShopItemContainer {
    height: number
}

export const ShopItemSmall: FunctionComponent<ShopItemSmall> = ({item, height}) => {


    const shopItemHeight = height / 2 <= 200 ? height : height / 2

    const ShopItemPreviewSmallContainer: FunctionComponent<{ children: ReactNode }> =
        ({children}) => height / 2 <= 200 ? <>{children}</> :
            <Col xs={12} sm={6} lg={3} xxl={3}
                 style={{height: height + "px", flex: "0 0 auto", padding: "0 0 0 1rem"}}>{children}</Col>

    return <ShopItemPreviewSmallContainer>
        {item.map((shopItem, index) => {
            return height / 2 <= 200 ? <Col key={index} xs={12} sm={6} lg={3}
                                            style={{
                                                height: shopItemHeight + "px",
                                                padding: "0 0 0 1rem"
                                            }}>
                <ShopItem {...shopItem}/>
            </Col> : <Col key={index} xs={12}
                          style={{
                              height: shopItemHeight - 8 + "px",
                              marginBottom: index == 0 ? "1rem" : 0,
                              padding: "0"
                          }}>
                <ShopItem {...shopItem}/>
            </Col>
        })}
    </ShopItemPreviewSmallContainer>;
}

export const ShopItemMedium: FunctionComponent<ShopItemMedium> = ({item, height}) => {

    return <Col xs={12} sm={6} lg={3} style={{height: height + "px", flex: "0 0 auto", padding: "0 0 0 1rem"}}>
        <ShopItem {...item[0]}/>
    </Col>
}

export const ShopItemLarge: FunctionComponent<ShopItemLarge> = ({item, height}) => {

    return <Col xs={12} sm={6} lg={height / 2 <= 200 ? 3 : 6}
                style={{height: height + "px", flex: "0 0 auto", padding: "0 0 0 1rem"}}>
        <ShopItem {...item[0]}/>
    </Col>
}

const ShopItem: FunctionComponent<IShopItem> = (props) => {

    let {rareness, discount, image, tag, type, name, price} = props;
    let tagColor = discount ? true : undefined;

    tag = discount ? `${discount} Shards Off` : tag;

    return <Item name={name} price={price} discount={discount} className={styles["shop-item"]} rareness={rareness} tag={tag} tagBackgroundRed={tagColor} type={type}>

        <div className={styles["shop-item__image"]}>
            <img src={image} alt={""}/>
        </div>


    </Item>

}
