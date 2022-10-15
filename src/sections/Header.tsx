import styles from '../../styles/components/Header.module.scss'
import {Container} from "react-bootstrap";
import Button from "../components/Button";
import {
    IconBrandDiscord,
    IconBrandInstagram,
    IconBrandYoutube,
    IconChevronDown,
    IconDeviceGamepad2
} from "@tabler/icons";

const Header = () => <div className={styles.header}>
    <Container className={styles.header__container}>
        <div className={styles.header__middle}>
            <h1>Spiele <span className="mark">kostenlos,</span></h1><br/>
            <h1>mit deiner <span className="mark">Community!</span></h1><br/>
            <p>Mit dem Ziel, sich als einen starken Event-Hoster in der Minecraft-Szene zu etablieren, bietet dir Uroria
                die einzigartige Möglichkeit, Server nach deinen Vorstellungen, an dich und deine Community anzupassen.
                Wir haben uns es zu unserer Aufgabe gemacht, unter der Verwendung eines eigen Texturenpakets die
                Spielfähigkeit und Abwechslung auf unserem Server zu erhöhen, damit erschaffen wir Systeme, die noch
                über Minecraft selbst hinaus gehen.</p>
            {/*<Button buttonSize={"lg"} type={"square"}><IconDeviceGamepad2
                style={{marginRight: "0.5rem", rotate: "-10deg"}}/>Play now!</Button>*/}
            <Button href={"https://dc.uroria.com"} buttonSize={"lg"} type={"square"}><IconBrandDiscord
                style={{marginRight: "0.5rem", rotate: "-10deg"}}/>Discord</Button>
        </div>

        <div className={styles.header__bottom}>
            <div className={styles.header__bottom_socialmedia}>
                <Button href={"https://dc.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                <Button href={"https://yt.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandYoutube/></Button>
                <Button href={"https://ig.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandInstagram/></Button>
            </div>
            <div className={styles.header__bottom_moreinfos}>
                <Button href={"#features"} buttonSize={"md"} type={"round"} color={"white"}>
                    <IconChevronDown size={16} style={{marginRight: "0.5rem"}}/>More Infos
                </Button>
            </div>
        </div>
    </Container>
</div>

export default Header;