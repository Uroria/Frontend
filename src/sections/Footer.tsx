import Section from "../components/Section";
import {Col, Row} from "react-bootstrap";
import Button from "../components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube} from "@tabler/icons";
import styles from '../../styles/components/Footer.module.scss'
import Link from "next/link";
import {useLanguage} from "../hooks/LanguageHook";

const Footer = () => {

    const language = useLanguage();

    return <Section>
        <div className={styles.footer}>
            <h1>{language["footer.heading.1"]}</h1><br/>
            <h1>{language["footer.heading.2"]} <span className="mark">{language["footer.heading.2.mark"]}</span></h1><br/>
            <Row>
                <Col xs={12} sm={5} md={4} lg={4} xxl={4}>
                    <p>{language["footer.description"]}</p>
                </Col>
                <Col xs={5} sm={5} md={4} lg={3} xxl={2}>
                    <p>{language["footer.heading.socialmedia"]}</p>
                    <Button href={"https://dc.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                    <Button href={"https://yt.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandYoutube/></Button>
                    <Button href={"https://ig.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandInstagram/></Button>
                </Col >
                <Col xs={5} sm={5} md={4} lg={3} xxl={2}>
                    <ul>
                        <p>{language["footer.heading.importantlinks"]}</p>

                        <Link href={"https://dc.uroria.com"}>
                            <li>{language["footer.importantlinks.unban"]}</li>
                        </Link>
                        <Link href={"https://dc.uroria.com"}>
                            <li>{language["footer.importantlinks.apply"]}</li>
                        </Link>
                        <Link href={"https://dc.uroria.com"}>
                            <li>{language["footer.importantlinks.bug"]}</li>
                        </Link>

                    </ul>
                </Col>
                <Col xs={5} sm={5} md={4} lg={3} xxl={2}>
                    <ul>
                        <p>{language["footer.heading.legal"]}</p>
                        <Link href={"/legal"}>
                            <li>{language["footer.legal.legalnotice"]}</li>
                        </Link>
                    </ul>
                </Col>
            </Row>
        </div>
    </Section>
}

export default Footer;