import Section from "../components/Section";
import {Col, Row} from "react-bootstrap";
import Button from "../components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube} from "@tabler/icons";
import styles from '../../styles/components/Footer.module.scss'
import Link from "next/link";

const Footer = () => <Section>
    <div className={styles.footer}>
        <h1>Erkunde die Welt</h1><br/>
        <h1>von <span className="mark">Uroria!</span></h1><br/>
        <Row>
            <Col xs={12} sm={5} md={4} lg={4} xxl={4}>
                <p>Hier siehst du eine Liste, der von unseren Creator favorisierten Spielmodi, sie verdienen daher
                    besondere
                    Aufmerksamkeit und werden von uns jederzeit auf dem Laufenden gehalten. Um mehr über die
                    jeweiligen Spielmodi zu
                    erfahren, lese dir einfach die Blogs zu den jeweiligen Modi durch!</p>
            </Col>
            <Col xs={5} sm={5} md={4} lg={3} xxl={2}>
                <p>Social Media</p>
                <Button buttonSize={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                <Button buttonSize={"sm"} type={"round"} icon={true}><IconBrandYoutube/></Button>
                <Button buttonSize={"sm"} type={"round"} icon={true}><IconBrandInstagram/></Button>
            </Col >
            <Col xs={5} sm={5} md={4} lg={3} xxl={2}>
                <ul>
                    <p>Wichtige Links</p>

                    <Link href={"https://dc.uroria.com"}>
                        <li>Entbannungsantrag stellen</li>
                    </Link>
                    <Link href={"https://dc.uroria.com"}>
                        <li>Bewerbung einsenden</li>
                    </Link>
                    <Link href={"https://dc.uroria.com"}>
                        <li>Bug melden</li>
                    </Link>

                </ul>
            </Col>
            <Col xs={5} sm={5} md={4} lg={3} xxl={2}>
                <ul>
                    <p>Datenschutz und mehr</p>
                    <Link href={"https://dc.uroria.com"}>
                        <li>Impressum</li>
                    </Link>
                </ul>
            </Col>
        </Row>
    </div>
</Section>

export default Footer;