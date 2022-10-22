import {Col, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import Section from "../../components/Section";
import {useLanguage} from "../../hooks/LanguageHook";

const FeatureSection = () => {

    const language = useLanguage();

    return <Section id={"features"}>
        <Row>
            <Col lg={"5"}>
                <img src={"/assets/images/uroria_render_gebuildet_cropped.png"} height={600}
                     style={{filter: "drop-shadow(0px 0px 20px rgba(0,0,0,.8))"}}/>
            </Col>
            <Col lg={"7"}>
                <h1><span className="mark">{language["feature.heading.1.mark"]}</span>{language["feature.heading.1"]}</h1><br/>
                <h1>{language["feature.heading.2"]} <span className="mark">{language["feature.heading.2.mark"]}</span></h1><br/>
                <p>{language["feature.description"]}</p>
                <Row>
                    <Col xs={4} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.events.description"]}>{language["feature.events.heading"]}</Feature>
                    </Col>
                    <Col xs={4} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.cosmetics.description"]}>{language["feature.cosmetics.heading"]}</Feature>
                    </Col>
                    <Col xs={4} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.community.description"]}>{language["feature.community.heading"]}</Feature>
                    </Col>
                    <Col xs={4} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.battles.description"]}>{language["feature.battles.heading"]}</Feature>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Section>
}

export default FeatureSection;