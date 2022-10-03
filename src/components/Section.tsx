import {Container} from "react-bootstrap";
import {FunctionComponent, ReactNode} from "react";
import styles from "../../styles/components/Section.module.scss";

type SectionProps = {
    children: ReactNode,
}

const Section: FunctionComponent<SectionProps> = ({children}) => <div className={styles.section}>
    <Container className={styles.section__container}>
        {children}
    </Container>
</div>

export default Section;