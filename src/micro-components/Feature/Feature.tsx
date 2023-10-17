import {FunctionComponent, ReactNode} from "react";
import styles from './Feature.module.scss'
import Box from "../Box/Box";

type FeatureProps = {
    description: string,
    children: ReactNode
}

const Feature: FunctionComponent<FeatureProps> = ({description, children}) => <Box className={styles["feature"]}>
    <h2>{children}</h2>
    <span>{description}</span>
</Box>

export default Feature;