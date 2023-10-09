import {CosmeticsProps} from "../components/Minecraft3DCharacter";

export interface IShopSection {
    title: string,
    items: (LargeShopItemContainer | MediumShopItemContainer | SmallShopItemContainer)[]
}

export interface IShopItem {
    readonly model: CosmeticsProps
    readonly tag?: string
    readonly image: string
    readonly price: number
    readonly discount?: number
    readonly name: string
    readonly description: string
    readonly rareness: "common" | "uncommon" | "rare" | "epic" | "legendary"
    readonly type: "Hat" | "Backpack" | "Baloon" | "Weapon" | "none"
}

export interface LargeShopItemContainer {
    size: "large"
    item: FixedLengthArray<IShopItem, 1>
}

export interface MediumShopItemContainer {
    size: "medium"
    item: FixedLengthArray<IShopItem, 1>
}

export interface SmallShopItemContainer {
    size: "small"
    item: FixedLengthArray<IShopItem, 2>
}

interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
    0: T;
    length: L;
}