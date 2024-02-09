import {FunctionComponent} from "react";
import styles from "./Game.module.scss"
import Box from "../Box/Box";

type Game = {
    readonly title: string
    readonly description: string
    readonly image: string
}

const Game: FunctionComponent<Game> = (props) => {

    const {image, title, description} = props;

    return <Box image={image} className={styles["game"]}>
        <div className={styles["game__heading"]}>
            <span className={styles["game__heading__title"]}>{title}</span>
            <p className={styles["game__heading__description"]}>{description}</p>
        </div>

    </Box>
}

export default Game;