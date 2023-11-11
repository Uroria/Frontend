import {FunctionComponent} from "react";
import {Container} from "react-bootstrap";
import styles from "./SmallHeader.module.scss"

type SmallHeader = {
    title: string
    children: string
}

const SmallHeader: FunctionComponent<SmallHeader> = ({title, children}) => {
    return <div className={styles["small-header"]}>
        <Container className={styles["small-header__container"]}>
            <h1>{title}</h1>
            <p className={styles["small-header__text"]}>{children}</p>
        </Container>
    </div>
}

export default SmallHeader;