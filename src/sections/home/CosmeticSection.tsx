import Section from "../../components/Section";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import {CosmeticsProps} from "../../components/Minecraft3DCharacter";
import useSWR from 'swr'
import CosmeticPreview from "../../components/CosmeticPreview";
import {JsonToGltf} from "../../utils/JsonToGltf";
import {fetcher} from "../../utils/Fetcher";
import CharacterPreview from "../../components/CharacterPreview";

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
    const {data, error} = useSWR('/assets/3dModels/player.json', fetcher)

    return <Section>
        <Row>
            <Col lg={"5"}>
                <CharacterPreview skinGltf={JsonToGltf(data)} skinName={"lvckyfelix"} hatModel={currentHat}/>
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
                <Row>
                    {
                        allHats.map((hat, index) => {
                            return <Col xs={4} sm={4} md={3} lg={3} xxl={2} onClick={() => setCurrentHat(allHats[index])}>
                                <CosmeticPreview hatModel={{gltf: hat.gltf}} rareness={"Legendeary"}/>
                            </Col>
                        })
                    }
                </Row>
            </Col>
        </Row>
    </Section>
}

export default CosmeticSection;