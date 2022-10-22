import {Col, Row} from "react-bootstrap";
import Event from "../../components/Event";
import Section from "../../components/Section";
import {useLanguage} from "../../hooks/LanguageHook";

const GameSection = () => {

    const language = useLanguage();

    return <Section>
        <h1>{language["game.heading.1"]}</h1><br/>
        <h1><span className="mark">{language["game.heading.2"]}</span></h1><br/>
        <p>{language["game.description"]}</p>
        <Row>
            <Col xs={4} sm={4} md={3} lg={2}>
                <Event description={language["game.ghosthouse.description"]}>{language["game.ghosthouse.heading"]}</Event>
            </Col>
            <Col xs={4} sm={4} md={3} lg={2}>
                <Event description={language["game.manhunt.description"]}>{language["game.manhunt.heading"]}</Event>
            </Col>
            <Col xs={4} sm={4} md={3} lg={2}>
                <Event commingSoon={true} description={language["game.soon.description"]}>{language["game.soon.heading"]}</Event>
            </Col>
            <Col xs={4} sm={4} md={3} lg={2}>
                <Event commingSoon={true} description={language["game.soon.description"]}>{language["game.soon.heading"]}</Event>
            </Col>
        </Row>
    </Section>
}

export default GameSection;