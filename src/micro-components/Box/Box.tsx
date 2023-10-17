import {DetailedHTMLProps, FunctionComponent, HTMLAttributes, InputHTMLAttributes, ReactNode} from "react";
import styles from "./Box.module.scss"

interface Box extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    readonly image?: string
    readonly children: ReactNode
}

const Box: FunctionComponent<Box> = ({children, image, ...args}) => {


    return <div {...(image ? {
        style: {
            "background": image ? `url(${image})` : "",
            "backgroundSize": "cover"
        }
    } : "")} className={styles["box"]} {...args}>
        <div className={styles["box__content"]}>
            {children}
        </div>
    </div>
}

export default Box;