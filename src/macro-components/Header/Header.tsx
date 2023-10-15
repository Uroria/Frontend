import styles from './Header.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import Button from "../../micro-components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube, IconChevronDown} from "@tabler/icons-react";
import {useLanguage} from "../../hooks/LanguageHook";

const Header = () => {

    const language = useLanguage();

    return <div className={styles.header}>
        <Container>
            <div className={styles.header__content}>
                <Row>
                    <Col xs={5}>
                        <h1>{language["header.heading.1"]} <span className="mark">{language["header.heading.1.mark"]}</span>
                        </h1>
                        <h1>{language["header.heading.2"]} <span className="mark">{language["header.heading.2.mark"]}</span>
                        </h1>
                        <Button href={"https://dc.uroria.com"} buttonSize={"lg"} type={"square"}><IconBrandDiscord
                            style={{marginRight: "0.5rem", rotate: "-10deg"}}/>Discord</Button>
                    </Col>

                    <Col xs={7}>

                    </Col>

                </Row>

            </div>

            <div className={styles["header__social-media"]}>
                <Button href={"https://dc.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                <Button href={"https://yt.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandYoutube/></Button>
                <Button href={"https://ig.uroria.com"} buttonSize={"sm"} type={"round"}
                        icon={true}><IconBrandInstagram/></Button>
            </div>
            <div className={styles["header__more-infos"]}>
                <Button href={"#features"} buttonSize={"md"} type={"round"} color={"white"}>
                    <IconChevronDown size={16} style={{marginRight: "0.5rem"}}/>{language["header.button.moreinfo"]}
                </Button>
            </div>

        </Container>
    </div>
}

export default Header;