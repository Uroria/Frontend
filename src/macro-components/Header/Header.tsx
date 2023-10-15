import styles from './Header.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import Button from "../../micro-components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube, IconChevronDown} from "@tabler/icons-react";
import {useLanguage} from "../../hooks/LanguageHook";
import Box from "../../micro-components/Box/Box";
import News from "../../micro-components/News/News";

const Header = () => {

    const language = useLanguage();

    return <div className={styles.header}>
        <Container className={styles["header__container"]}>
            <div className={styles.header__content}>
                <Row style={{margin: 0, padding: 0}}>
                    <Col xs={12} lg={8}>
                        <h1>{language["header.heading.1"]} <span className="mark">{language["header.heading.1.mark"]}</span>
                        </h1>
                        <h1>{language["header.heading.2"]} <span className="mark">{language["header.heading.2.mark"]}</span>
                        </h1>
                        <p>{language["header.description"]}</p>
                    </Col>

                    <Col xs={12} lg={4} style={{margin: 0, padding: 0}}>

                        <Row style={{margin: 0, padding: 0}}>
                            <Col xs={12}>
                                <News date={new Date()}
                                      title={"Uroria Update 2.0"}
                                      description={"Uroria is an event-hosting network, which allows creators to create an unique..."}
                                      image={"./assets/images/2.png"}/>
                            </Col>
                            <Col style={{margin: 0, padding: 0}}>
                                <Row style={{margin: 0, padding: 0}}>
                                    <Col xs={6}>
                                        <Box>
                                            <b>{"28"}</b><br/>players are currently online
                                        </Box>
                                    </Col>
                                    <Col xs={6}>
                                        <Box>
                                            <b>{"821.141"}</b> <br/>players are registered
                                        </Box>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>



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