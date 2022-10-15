import {Container} from "react-bootstrap";
import {FunctionComponent, ReactNode} from "react";
import styles from "../../styles/components/Section.module.scss";

type SectionProps = {
    id?: string,
    children: ReactNode,
}

const Section: FunctionComponent<SectionProps> = ({children, id}) => <div className={styles.section}>
    <Container id={id} className={styles.section__container}>
        {children}
    </Container>
</div>

export default Section;