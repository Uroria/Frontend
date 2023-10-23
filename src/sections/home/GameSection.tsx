import {Col, Row} from "react-bootstrap";
import Section from "../../micro-components/Section";
import {useLanguage} from "../../hooks/LanguageHook";
import {ItemPreview} from "../../micro-components/ItemPreview/ItemPreview";
import News from "../../micro-components/News/News";

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
                        <News date={new Date()}
                              title={"Uroria Update 2.0"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                    <Col lg={6}>
                        <News date={new Date()}
                              title={"Uroria Update 2.0"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <News date={new Date()}
                              title={"Uroria Update 2.0"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                    <Col lg={6}>
                        <News date={new Date()}
                              title={"Uroria Update 2.0"}
                              description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                              image={"./assets/images/2.png"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Section>
}

export default GameSection;