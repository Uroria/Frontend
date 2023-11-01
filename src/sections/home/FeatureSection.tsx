"use client"

import {Col, Row} from "react-bootstrap";
import Feature from "../../micro-components/Feature/Feature";
import Section from "../../micro-components/Section";
import {useLanguage} from "../../hooks/LanguageHook";

const FeatureSection = () => {

    const language = useLanguage();

    return <Section id={"features"}>
        <Row>
            <Col lg={"8"}>
                <h1><span className="mark">{language["feature.heading.1.mark"]}</span>{language["feature.heading.1"]}</h1><br/>
                <h1>{language["feature.heading.2"]} <span className="mark">{language["feature.heading.2.mark"]}</span></h1><br/>
                <p>{language["feature.description"]}</p>
                <Row>
                    <Col xs={6} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.events.description"]}>{language["feature.events.heading"]}</Feature>
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.cosmetics.description"]}>{language["feature.cosmetics.heading"]}</Feature>
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.community.description"]}>{language["feature.community.heading"]}</Feature>
                    </Col>
                    <Col xs={6} sm={4} md={3} lg={3}>
                        <Feature description={language["feature.battles.description"]}>{language["feature.battles.heading"]}</Feature>
                    </Col>
                </Row>
            </Col>
            <Col lg={"4"} className={"remove-on-small-device"} style={{position: "relative", overflow: "hidden", padding: "2rem"}}>
                <img src={"/assets/images/feature.png"}
                     style={{transform: "perspective(500px) rotateY(-10deg)", width:"100%", height :"100%", objectFit: "contain"}}/>
            </Col>
        </Row>
    </Section>
}

export default FeatureSection;