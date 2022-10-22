import {FunctionComponent, ReactNode} from "react";
import styles from '../../styles/components/Label.module.scss'

interface LabelProps {
    children: ReactNode,
    onNavigation?: boolean
}

const Label:FunctionComponent<LabelProps> = ({children, onNavigation = false}) => <span className={styles.label + (onNavigation ? " " + styles["label-absolute"] : "")}>
    {children}
</span>

export default Label;