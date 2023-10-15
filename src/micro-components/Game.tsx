import {FunctionComponent, ReactNode} from "react";
import styles from '../../styles/components/Event.module.scss'

type EventProps = {
    description: string,
    commingSoon?: boolean,
    children: ReactNode
}

const Game: FunctionComponent<EventProps> = ({description, children, commingSoon = false}) => <div className={styles.event + (commingSoon ? " " + styles.comming_soon : "")}>
    <div>
        <h2>{children}</h2>
        <span>{description}</span>
    </div>
</div>

export default Game;