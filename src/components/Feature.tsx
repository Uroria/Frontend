import {FunctionComponent, ReactNode} from "react";
import styles from '../../styles/components/Feature.module.scss'

type FeatureProps = {
    description: string,
    children: ReactNode
}

const Feature: FunctionComponent<FeatureProps> = ({description, children}) => <div className={styles.feature}>
    <div>
        <h2>{children}</h2>
        <span>{description}</span>
    </div>
</div>

export default Feature;