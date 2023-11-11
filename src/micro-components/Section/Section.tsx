import {FunctionComponent, ReactNode} from "react";
import styles from "./Section.module.scss";
import Container from "../Container/Container";

type SectionProps = {
    id?: string,
    children: ReactNode,
}

const Section: FunctionComponent<SectionProps> = ({children, id}) => <div className={styles.section}>
    <Container>
        {children}
    </Container>
</div>

export default Section;