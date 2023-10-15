import {FunctionComponent, ReactNode} from "react";
import styles from "./Box.module.scss"

type Box = {
    readonly image?: string
    readonly children: ReactNode
}

const Box: FunctionComponent<Box> = (props) => {

    const {children, image} = props;

    return <div {...(image ? {
        style: {
            "background": image ? `url(${image})` : "",
            "backgroundSize": "cover"
        }
    } : "")} className={styles["box"]}>
        <div className={styles["box__content"]}>
            {children}
        </div>
    </div>
}

export default Box;