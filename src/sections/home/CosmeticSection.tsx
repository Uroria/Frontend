import Section from "../../components/Section";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {CosmeticsProps} from "../../components/Minecraft3DCharacter";
import CharacterPreview from "../../components/CharacterPreview";
import Input from "../../components/Input";
import {Tab, Tabs} from "../../components/Tabs";
import CosmeticPreview from "../../components/CosmeticPreview";
import {useLanguage} from "../../hooks/LanguageHook";

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
}];


const CosmeticSection = () => {

    const [currentHat, setCurrentHat] = useState(allHats[0]);
    const [currentSkinName, setCurrentSkinName] = useState("ninjaschnitzel");
    const language = useLanguage();

    return <Section>
        <Row>
            <Col lg={"5"} className={"position-relative"} style={{minHeight: "450px"}}>
                <CharacterPreview skinName={currentSkinName} hatModel={currentHat}/>
                <div style={{position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)"}}>
                    <Input maxLength={16} blink={true}
                           description={language["cosmetic.skin.input.description"]}
                           onBlur={event => event.target.value && event.target.value != "" && event.target.value != currentSkinName ? setCurrentSkinName(event.target.value.toLocaleLowerCase()) : undefined}
                           width={300} placeholder={"username"}/>
                </div>
            </Col>
            <Col lg={"7"}>
                <h1>{language["cosmetic.heading.1"]} <span className="mark">{language["cosmetic.heading.1.mark"]}</span></h1><br/>
                <h1>{language["cosmetic.heading.2"]} <span className="mark">{language["cosmetic.heading.2.mark"]}</span></h1><br/>
                <p>{language["cosmetic.description"]}</p>

                <Tabs>
                    <Tab title={language["cosmetic.tab.hat"]}>
                        <Row>
                            {
                                allHats.map((hat, index) => {
                                    return <Col xs={4} sm={4} md={3} lg={3} xxl={2} key={index}
                                                onClick={() => currentHat != allHats[index] ? setCurrentHat(allHats[index]) : null}>
                                        <CosmeticPreview key={index} hatModel={{gltf: hat.gltf}} rareness={"Legendeary"}/>
                                    </Col>
                                })
                            }
                        </Row>
                    </Tab>
                    <Tab title={language["cosmetic.tab.backpack"]}>
                        <p>Backpack Cosmetics coming soon</p>
                    </Tab>
                    <Tab title={language["cosmetic.tab.balloon"]}>
                        <p>Balloon Cosmetics coming soon</p>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Section>
}

export default CosmeticSection;