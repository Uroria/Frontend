import {CSSProperties, FunctionComponent, ReactNode} from "react";
import {Container} from "react-bootstrap";

type SectionProps = {
    children: ReactNode,
    useContainer?: boolean,
    useTransition?: boolean
    title?: string
    src?: string,
    paddingY?: number
}

const Section: FunctionComponent<SectionProps> = ({children, src, useContainer = true, title, useTransition = true, paddingY}) => {

    const style: CSSProperties = {
        background: "linear-gradient(315deg, rgba(0, 0, 0, 0.80) 0, rgba(0, 0, 0, 0.80) 100%), url('" + src + "') center",
        padding: paddingY + "px 0"
    }

    useTransition ? children = <>
        <div className={"transition"}/>
        {children}
        <div className={"transition"}/>
    </> : null;

    const containerNode = <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className={"tag section-tag"}>{title}</div>
        </div>
        {children}
    </>


    return <>
        {useContainer ?
            <Container style={style} className={"section"} children={title ? containerNode : children}/> :
            <div style={style} className={"section"} children={title ? containerNode : children}/>}
    </>

}


export default Section;