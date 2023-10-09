import {FunctionComponent, ReactNode} from "react"
import styles from "./FixedPage.module.scss"

interface IFixedPage {
    children: ReactNode
    background?: string
}

export const FixedPage: FunctionComponent<IFixedPage> = (props) => {

    const {children, background = "https://i.redd.it/vf95xj8n6k251.jpg"} = props;

    // @ts-ignore
    return <div className={styles["fixed-page"]} style={{"--data-bg" : `url("${background}")`}}>
        {children}
    </div>

}