import {Container} from "react-bootstrap";
import {FunctionComponent, ReactNode} from "react";
import styles from "../../styles/components/Section.module.scss";

type SectionProps = {
    children: ReactNode,
}

const Section: FunctionComponent<SectionProps> = ({children}) => <div className={styles.section}>
    <Container className={styles.section__container}>
        {children}
        {!transitionOnlyTop ? <div className={"transition"}/> : null}
    </> : null;


    return <>
        {useContainer ?
            <div className={"section" + (className ? " " + className : "")} style={style}><div className={"container"}>{children}</div> </div> :
            <div className={"section" + (className ? " " + className : "")} style={style} children={children}/>}
    </>

}


export default Section;