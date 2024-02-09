import {FunctionComponent, ReactNode} from "react";
import styles from "./Container.module.scss";

export type Container = {
    children: ReactNode[] | ReactNode
}

const Container: FunctionComponent<Container> = ({children}) => {
    return <div className={styles["container"]}>
        {children}
    </div>
}
export default Container;