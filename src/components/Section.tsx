import {CSSProperties, FunctionComponent, ReactNode} from "react";

type SectionProps = {
    children: ReactNode,
    useContainer?: boolean,
    useTransition?: boolean
    src?: string,
    paddingY?: number
    transitionOnlyTop?: boolean,
    className?: string,
    negativeMarginTop?: boolean
}

const Section: FunctionComponent<SectionProps> = ({children, src, useContainer = true, useTransition = true, paddingY= 0, transitionOnlyTop = false, className, negativeMarginTop = false}) => {

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