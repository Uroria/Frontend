import {Col, Row} from "react-bootstrap";
import Section from "../../components/Section";
import {useLanguage} from "../../hooks/LanguageHook";
import {ItemPreview} from "../../components/ItemPreview/ItemPreview";

const GameSection = () => {

    const language = useLanguage();

    return <Section>
        <h1>{language["game.heading.1"]}</h1><br/>
        <h1><span className="mark">{language["game.heading.2"]}</span></h1><br/>
        <p>{language["game.description"]}</p>
        <Row>
            <Col xs={4} sm={4} md={3} lg={2}>
                <ItemPreview name={language["game.ghosthouse.heading"]} image={"./magic_backpack-2.png"} rareness={"legendary"}/>
            </Col>
            <Col xs={4} sm={4} md={3} lg={2}>
                <ItemPreview name={language["game.manhunt.heading"]} image={"./magic_backpack-2.png"} rareness={"common"}/>
            </Col>
            <Col xs={4} sm={4} md={3} lg={2}>
                <ItemPreview tag={language["game.soon.heading"]} disabled={true} name={language["game.soon.heading"]} image={"./magic_backpack-2.png"} rareness={"common"}/>
            </Col>
            <Col xs={4} sm={4} md={3} lg={2}>
                <ItemPreview tag={language["game.soon.heading"]} disabled={true} name={language["game.soon.heading"]} image={"./magic_backpack-2.png"} rareness={"common"}/>
            </Col>
        </Row>
    </Section>
}

export default GameSection;