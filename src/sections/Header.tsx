import styles from '../../styles/components/Header.module.scss'
import {Container} from "react-bootstrap";
import Button from "../components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube, IconChevronDown} from "@tabler/icons";
import {useLanguage} from "../hooks/LanguageHook";

const Header = () => {

    const language = useLanguage();

    return <div className={styles.header}>
        <Container className={styles.header__container}>
            <div className={styles.header__middle}>
                <h1>{language["header.heading.1"]} <span className="mark">{language["header.heading.1.mark"]}</span></h1><br/>
                <h1>{language["header.heading.2"]} <span className="mark">{language["header.heading.2.mark"]}</span></h1><br/>
                <p>{language["header.description"]}</p>
                {/*<Button buttonSize={"lg"} type={"square"}><IconDeviceGamepad2
                style={{marginRight: "0.5rem", rotate: "-10deg"}}/>Play now!</Button>*/}
                <Button href={"https://dc.uroria.com"} buttonSize={"lg"} type={"square"}><IconBrandDiscord
                    style={{marginRight: "0.5rem", rotate: "-10deg"}}/>Discord</Button>
            </div>

            <div className={styles.header__bottom}>
                <div className={styles.header__bottom_socialmedia}>
                    <Button href={"https://dc.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                    <Button href={"https://yt.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandYoutube/></Button>
                    <Button href={"https://ig.uroria.com"} buttonSize={"sm"} type={"round"}
                            icon={true}><IconBrandInstagram/></Button>
                </div>
                <div className={styles.header__bottom_moreinfos}>
                    <Button href={"#features"} buttonSize={"md"} type={"round"} color={"white"}>
                        <IconChevronDown size={16} style={{marginRight: "0.5rem"}}/>{language["header.button.moreinfo"]}
                    </Button>
                </div>
            </div>
        </Container>
    </div>
}

export default Header;