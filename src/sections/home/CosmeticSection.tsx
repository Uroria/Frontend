import Section from "../../components/Section";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {CosmeticsProps} from "../../components/Minecraft3DCharacter";
import {JsonToGltf} from "../../utils/JsonToGltf";
import {useAPI} from "../../utils/Fetcher";
import CharacterPreview from "../../components/CharacterPreview";
import Input from "../../components/Input";
import {Tab, Tabs} from "../../components/Tabs";
import CosmeticPreview from "../../components/CosmeticPreview";

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
    const [currentSkinName, setCurrentSkinName] = useState("sterndecraft");

    return <Section>
        <Row>
            <Col lg={"5"} className={"position-relative"} style={{minHeight: "450px"}}>
                <CharacterPreview skinName={currentSkinName} hatModel={currentHat}/>
                <div style={{position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)"}}>
                    <Input maxLength={16} blink={true}
                           description={"leave input to enter unsername and skin viewer is currently only available for Steve 1.7+ skins"}
                           onBlur={event => event.target.value && event.target.value != "" && event.target.value != currentSkinName ? setCurrentSkinName(event.target.value.toLocaleLowerCase()) : undefined}
                           width={300} placeholder={"username"}/>
                </div>
            </Col>
            <Col lg={"7"}>
                <h1>Gestalte deinen <span className="mark">Charakter,</span></h1><br/>
                <h1>wie du es <span className="mark">magst!</span></h1><br/>
                <p>Kosmetische Gegenstände waren in der Minecraft-Java Version sonst nur durch Client-Modifikationen
                    möglich oder wurden von Servern als Partikel angezeigt. Beides ist nicht die optimale Lösung, jedoch
                    haben wir einen Weg zu einer guten Lösung gefunden. Durch unser Texturenpaket, mit welchem wir von
                    neuen Items über Modelle bis neue Rüstungen hinzufügen können, sind kosmetische Gegenstände ein
                    zentraler Bestandteil. So können alle Spieler dieses Servers ihren Spielcharakter zusätzlich
                    verschönern!</p>


                <Tabs>
                    <Tab title="🤠 Hat Cosmetics">
                        <Row>
                            {
                                allHats.map((hat, index) => {
                                    return <Col xs={4} sm={4} md={3} lg={3} xxl={2}
                                                onClick={() => currentHat != allHats[index] ? setCurrentHat(allHats[index]) : null}>
                                        <CosmeticPreview hatModel={{gltf: hat.gltf}} rareness={"Legendeary"}/>
                                    </Col>
                                })
                            }
                        </Row>
                    </Tab>
                    <Tab title="🎒 Backpack Cosmetics">
                        <p>Backpack Cosmetics coming soon</p>
                    </Tab>
                    <Tab title="🎈 Balloon Cosmetics">
                        <p>Balloon Cosmetics coming soon</p>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Section>
}

export default CosmeticSection;