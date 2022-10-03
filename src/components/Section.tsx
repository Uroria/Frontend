import {Container} from "react-bootstrap";
import {FunctionComponent, ReactNode} from "react";
import styles from "../../styles/components/Section.module.scss";

type SectionProps = {
    children: ReactNode,
}

const Section: FunctionComponent<SectionProps> = ({children, src, useContainer = true, useTransition = true, paddingY= 0, transitionOnlyTop = false, className, negativeMarginTop = false}) => {

    const style: CSSProperties = transitionOnlyTop ? {
        padding: paddingY + "px 0 50px 0"
    } : {
        padding: paddingY + "px 0"
    };

    style["background"] = src ? "linear-gradient(315deg, rgba(0, 0, 0, 0.80) 0, rgba(0, 0, 0, 0.80) 100%), url('" + src + "') center" : "transparent";
    style["marginTop"] = negativeMarginTop ? "-350px" : "0px";
    useTransition ? children = <>
        <div className={"transition"}/>
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