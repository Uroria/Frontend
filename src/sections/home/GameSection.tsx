import {Col, Row} from "react-bootstrap";
import Section from "../../micro-components/Section";
import {useLanguage} from "../../hooks/LanguageHook";
import Game from "../../micro-components/Game/Game";

const GameSection = () => {

    const language = useLanguage();

    return <Section>
        <Row>
            <Col lg={7}>
                <h1>{language["game.heading.1"]}</h1><br/>
                <h1><span className="mark">{language["game.heading.2"]}</span></h1><br/>
                <p>{language["game.description"]}</p>
            </Col>
            <Col lg={5}>
                <Row>
                    <Col lg={6}>
                        <Game title={"Ghosthouse"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                    <Col lg={6}>
                        <Game title={"Bedwars"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Game title={"Skywars"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                    <Col lg={6}>
                        <Game title={"Manhunt"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Section>
}

export default GameSection;