import Section from "../components/Section";
import {Col, Row} from "react-bootstrap";
import ModelViewer from "../components/ModelViewer";
import {useState} from "react";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons";
import {useLanguage, useLanguageTranslations} from "../hooks/LanguageHook";
import {ILanguage} from "../@types/TLanguage";

type TDance = {
    name: string,
    animationName: string
}

const dances: TDance[] = [{
    name: "Floss Dance",
    animationName: "floss"
}, {
    name: "Waving",
    animationName: "wave"
}, {
    name: "Move Fast",
    animationName: "gotta_go_fast"
}, {
    name: "Hype Dance",
    animationName: "hype"
}, {
    name: "Clapping",
    animationName: "clap"
}, {
    name: "Yes",
    animationName: "yes"
}]

const FeatureSection = () => {

    const language: ILanguage = useLanguage();
    console.log(language["index.section.feature.dances.list"]);

    const [dance, setDance] = useState(dances[0]);
    const [index, setIndex] = useState(0);

    const switchLeft = (): void => reachedLeftEnd() && setDance(dances[index - 1]) || setIndex(index - 1)
    const switchRight = (): void => reachedRightEnd() && setDance(dances[index + 1]) || setIndex(index + 1);

    const reachedLeftEnd = (): boolean => (index - 1) >= 0
    const reachedRightEnd = (): boolean => (dances.length - 1) >= (index + 1)

    return <Section className={"feature"} useContainer={true} useTransition={false}>
        <Row>
            <Col lg={6} className={"model"}>
                <ModelViewer animationName={dance.animationName} rotation={{x: 160, z: 100, y: 90}}
                             src={"/assets/3dmodels/steve.gltf"}/>
                <ModelViewer animationName={dance.animationName} rotation={{x: 160, z: 100, y: 90}}
                             src={"/assets/3dmodels/steve.gltf"}/>
                <span className={"switch-btn right " + (!reachedRightEnd() ? "disabled" : "")}
                      onClick={switchRight}><IconChevronRight/></span>
                <span className={"switch-btn left " + (!reachedLeftEnd() ? "disabled" : "")}
                      onClick={switchLeft}><IconChevronLeft/></span>
                <div className={"name"}>{dance.name}</div>
            </Col>
            <Col lg={6}>
                <h2>{language["index.section.feature.dances.title"]}</h2>
                <span className={"rareness-tag red"}>{language["index.section.feature.dances.tag"]}</span>
                <ul>
                    {
                        useLanguageTranslations("index.section.feature.dances.list")
                            .map(listElement => <li>{listElement}</li>)
                    }
                </ul>
            </Col>
            <Col lg={6}>
                <h2>{language["index.section.feature.mobs.title"]}</h2>
                <span className={"rareness-tag red"}>under development</span>
                <ul>
                    {
                        useLanguageTranslations("index.section.feature.mobs.list")
                            .map(listElement => <li>{listElement}</li>)
                    }
                </ul>
            </Col>
            <Col lg={6} className={"model"}>
                <ModelViewer animationName={"attack"} rotation={{x: 180, z: 110, y: 90}}
                             src={"/assets/3dmodels/kindletronjr.gltf"}/>
                <ModelViewer animationName={"attack"} rotation={{x: 180, z: 110, y: 90}}
                             src={"/assets/3dmodels/kindletronjr.gltf"}/>
            </Col>
        </Row>
    </Section>
}

export default FeatureSection;