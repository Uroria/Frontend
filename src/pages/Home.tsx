import Script from "next/script";
import {useLanguage} from "../hooks/LanguageHook";
import {ILanguage} from "../@types/TLanguage";
import {FunctionComponent} from "react";
import Header from "../sections/Header";
import Navigation from "../components/Navigation";
import FeatureSection from "../sections/home/FeatureSection";
import GameSection from "../sections/home/GameSection";
import CosmeticSection from "../sections/home/CosmeticSection";
import Section from "../components/Section";
import {Col, Row} from "react-bootstrap";
import Button from "../components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube} from "@tabler/icons";

const Home: FunctionComponent = () => {

    const language: ILanguage = useLanguage();

    return <>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>

        <Navigation/>
        <Header/>
        <FeatureSection/>
        <GameSection/>
        <CosmeticSection/>
        <Section>
            <h1>Erkunde die Welt</h1><br/>
            <h1>von <span className="mark">Uroria!</span></h1><br/>
            <Row>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <p>Hier siehst du eine Liste, der von unseren Creator favorisierten Spielmodi, sie verdienen daher
                        besondere
                        Aufmerksamkeit und werden von uns jederzeit auf dem Laufenden gehalten. Um mehr über die
                        jeweiligen Spielmodi zu
                        erfahren, lese dir einfach die Blogs zu den jeweiligen Modi durch!</p>
                </Col>
                <Col xs={4} sm={4} md={3} lg={2}>
                    <p>Social Media</p>
                    <Button size={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                    <Button size={"sm"} type={"round"} icon={true}><IconBrandYoutube/></Button>
                    <Button size={"sm"} type={"round"} icon={true}><IconBrandInstagram/></Button>
                </Col>
                <Col xs={4} sm={4} md={3} lg={2}>
                    <ul>
                        <p>Wichtige Links</p>

                        <a>
                            <li>Entbannungsantrag stellen</li>
                        </a>
                        <a>
                            <li>Bewerbung einsenden</li>
                        </a>
                        <a>
                            <li>Bug melden</li>
                        </a>

                    </ul>
                </Col>
                <Col xs={4} sm={4} md={2} lg={2}>
                    <ul>
                        <p>Datenschutz und ...</p>
                        <a>
                            <li>Impressum</li>
                        </a>
                        <a>
                            <li>Datenschutz</li>
                        </a>
                        <a>
                            <li>Allgemeine Geschäftsbedingungen</li>
                        </a>

                    </ul>
                </Col>
            </Row>
        </Section>
    </>
}

export default Home;