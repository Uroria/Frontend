"use client"

import styles from './Header.module.scss'
import {Col, Row} from "react-bootstrap";
import Button from "../../micro-components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube, IconChevronDown} from "@tabler/icons-react";
import Box from "../../micro-components/Box/Box";
import News from "../../micro-components/News/News";
import {useTranslations} from "next-intl";
import Container from "../../micro-components/Container/Container";
import {useNewestPost} from "../../hooks/post/Post.hook";

const Header = () => {

    const t = useTranslations('Index');
    const {post} = useNewestPost()

    return <div className={styles.header}>
        <Container>
            <div className={styles.header__content}>
                <Row>
                    <Col xs={12} lg={8}>
                        <h1>{t("header-heading-1")} <span
                            className="mark">{t("header-heading-1-mark")}</span>
                        </h1>
                        <h1>{t("header-heading-2")} <span
                            className="mark">{t("header-heading-2-mark")}</span>
                        </h1>
                        <p>{t("header-description")}</p>
                    </Col>

                    <Col xs={12} lg={4} style={{margin: 0, padding: 0}}>

                        <Row style={{margin: 0, padding: 0}}>
                            <Col xs={12} style={{marginBottom: "1.5rem"}}>
                                <News slug={post?.slug ?? ""} date={post?.publishedAt ?? new Date()}
                                      title={post?.title ?? ""}
                                      description={post?.description ?? ""}
                                      image={`http://localhost:1337${post?.mediumImage?.url}`}/>
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
                        <IconChevronDown size={16} style={{marginRight: "0.5rem"}}/>{t("header-button-moreinfo")}
                    </Button>
                </div>

        </Container>
    </div>
}

export default Header;