import React, {FunctionComponent} from "react";
import {CosmeticsProps} from "../components/Minecraft3DCharacter";
import ShopContainer from "../components/ShopContainer";
import {IShopSection} from "../@types/TShopSection";


const allHats: CosmeticsProps[] = [{
    gltf: "Witch_Hat",
    positionY: 0.15,
    positionX: -0.5,
    positionZ: -0.5,
    scale: 0.9
}, {
    gltf: "propeller_hat",
    positionY: -0.15,
    positionX: -0.5,
    positionZ: -0.5,
    scale: 0.65
}, {
    gltf: "cowboy_hat",
    positionY: 0.15,
    positionX: -0.5,
    positionZ: -0.5,
    scale: 0.95
}, {
    gltf: "candy_backpack",
    positionY: 0.3,
    positionX: 0,
    positionZ: -0.25,
    scale: 0.6
}, {
    gltf: "santa_hat",
    positionY: 0.15,
    positionX: -0.5,
    positionZ: -0.5,
    scale: 0.6
}];


const Shop: FunctionComponent = () => {


    const test: IShopSection[] = [{
        title: "Monthly Shop",
        items: [{
            size: "large",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                tag: "New",
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "medium",
            item: [{
                model: allHats[4],
                rareness: "legendary",
                price: 1200,
                discount: 300,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "small",
            item: [{
                model: allHats[4],
                rareness: "uncommon",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }, {
                model: allHats[4],
                rareness: "common",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "small",
            item: [{
                model: allHats[4],
                rareness: "uncommon",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }, {
                model: allHats[4],
                rareness: "uncommon",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }]
    }, {
        title: "Monthly Shop",
        items: [{
            size: "medium",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                discount: 100,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "medium",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                tag: "New",
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "small",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }, {
                model: allHats[4],
                rareness: "epic",
                price: 900,
                tag: "Spooky Stuff",
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "small",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }, {
                model: allHats[4],
                rareness: "epic",
                price: 900,
                discount: 49,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }]
    }, {
        title: "Monthly Shop",
        items: [{
            size: "large",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "medium",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "small",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }, {
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }, {
            size: "small",
            item: [{
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }, {
                model: allHats[4],
                rareness: "epic",
                price: 900,
                name: "Crazy Whitch",
                image: "./magic_backpack-2.png",
                description: "sdsd",
                type: "Backpack"
            }]
        }]
    }]

    return <>
        <ShopContainer sections={test}/>
    </>
}

export default Shop;