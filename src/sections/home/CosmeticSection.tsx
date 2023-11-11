"use client"

import Section from "../../micro-components/Section/Section";
import {Col, Row} from "react-bootstrap";
import {useRef, useState} from "react";
import {CosmeticsProps} from "../../micro-components/Minecraft3DCharacter";
import CharacterPreview from "../../micro-components/CharacterPreview";
import Input from "../../micro-components/Input";
import {Tab, Tabs} from "../../micro-components/Tabs";
import {ItemPreview} from "../../micro-components/ItemPreview/ItemPreview";
import {useTranslations} from "next-intl";

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
    gltf: "crocodile_hat",
    positionY: -0.2,
    positionX: -0.5,
    positionZ: -0.7,
    scale: 0.75
}, {
    gltf: "santa_hat",
    positionY: 0.15,
    positionX: -0.5,
    positionZ: -0.5,
    scale: 0.6
}];

const allBackpacks: CosmeticsProps[] = [{
    gltf: "candy_backpack",
    positionY: 0.3,
    positionX: 0,
    positionZ: -0.25,
    scale: 0.6
}];

const allBalloons: CosmeticsProps[] = [{
    gltf: "space_shuttle",
    positionX: 2,
    positionZ: 1,
    positionY: 5.5,
    scale: .5
}];


const CosmeticSection = () => {

    const language = useTranslations('Index');

    const [currentHat, setCurrentHat] = useState(allHats[0]);
    const [currentBackpack, setCurrentBackpack] = useState(allBackpacks[0]);
    const [currentBalloon, setCurrentBalloon] = useState(allBalloons[0]);
    const [currentSkinName, setCurrentSkinName] = useState("MHF_Steve");
    const ref = useRef<HTMLDivElement>(null)

    return <Section>
        <Row style={{position: "relative"}}>
            <Col lg={"5"} ref={ref} style={{position: "relative", display: "flex", height: "100% !important", justifyContent: "center", alignItems: "center"}}>
                <div style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "600px"
                }}>
                    <CharacterPreview height={ref?.current?.offsetHeight || 600} skinName={currentSkinName} hatModel={currentHat} backpackModel={currentBackpack} balloonModel={currentBalloon}/>
                    <div style={{position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)"}}>
                        <Input maxLength={16} blink={true}
                               description={language("cosmetic-skin-input-description")}
                               width={300} placeholder={"username"} onEnter={value => value && value != "" && value != currentSkinName ? setCurrentSkinName(value.toLocaleLowerCase()) : undefined}/>
                    </div>
                </div>
            </Col>
            <Col lg={"7"}>
                <h1>{language("cosmetic-heading-1")} <span className="mark">{language("cosmetic-heading-1-mark")}</span></h1><br/>
                <h1>{language("cosmetic-heading-2")} <span className="mark">{language("cosmetic-heading-2-mark")}</span></h1><br/>
                <p>{language("cosmetic-description")}</p>

                <Tabs>
                    <Tab title={language("cosmetic-tab-hat")}>
                        <Row>
                            {
                                allHats.map((hat, index) => {
                                    return <Col xs={4} sm={4} md={3} key={index}
                                                onClick={() => currentHat != allHats[index] ? setCurrentHat(allHats[index]) : null} style={{marginBottom: "1.5rem"}}>
                                        <ItemPreview image={"/magic_backpack-2.png"} type={"hat"} rareness={"common"}/>
                                    </Col>
                                })
                            }
                        </Row>
                    </Tab>
                    <Tab title={language("cosmetic-tab-backpack")}>
                        <Row>
                            {
                                allBackpacks.map((backpack, index) => {
                                    return <Col xs={4} sm={4} md={3} key={index}
                                                onClick={() => currentBackpack != allBackpacks[index] ? setCurrentBackpack(allBackpacks[index]) : null} style={{marginBottom: "1.5rem"}}>
                                        <ItemPreview image={"/magic_backpack-2.png"} type={"backpack"} rareness={"common"}/>
                                    </Col>
                                })
                            }
                        </Row>
                    </Tab>
                    <Tab title={language("cosmetic-tab-balloon")}>
                        <p>Balloon Cosmetics coming soon</p>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Section>
}

export default CosmeticSection;