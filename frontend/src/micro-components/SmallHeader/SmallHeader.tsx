import {FunctionComponent} from "react";
import styles from "./SmallHeader.module.scss"
import Container from "../Container/Container";

type SmallHeader = {
    title: string
    children: string
}

const SmallHeader: FunctionComponent<SmallHeader> = ({title, children}) => {
    return <div className={styles["small-header"]}>
        <Container>
            <h1>{title}</h1>
            <p className={styles["small-header__text"]}>{children}</p>
        </Container>
    </div>
}

export default SmallHeader;