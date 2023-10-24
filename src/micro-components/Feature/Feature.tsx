import {FunctionComponent, ReactNode} from "react";
import styles from './Feature.module.scss'
import Box from "../Box/Box";
import Button from "../Button";

type FeatureProps = {
    description: string,
    children: ReactNode
}

const Feature: FunctionComponent<FeatureProps> = ({description, children}) => <Box className={styles["feature"]}>
    <div className={styles["feature__container"]}>
        <h2>{children}</h2>
        <span>{description}</span>
    </div>

    <Button buttonSize={"md"}>Show Detail</Button>
</Box>

export default Feature;