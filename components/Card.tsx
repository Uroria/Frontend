import {FunctionComponent, ReactNode} from "react";

type CardTagProps = {
    color: 'gray' | 'red',
    text: string
}

type CardProps = {
    src?: string,
    tag: string,
    heading: string,
    tags?: CardTagProps[]
    children: ReactNode
}

const Card: FunctionComponent<CardProps> = ({tag, tags, heading, children, src}) => <div className={"card"}>
    {src ? <img src={src} alt={""}/> : null}
    {src ? <div className={"tag"}>{tag}</div> : <div className={"tag margin"}>{tag}</div>}
    <img src={"/corner.svg"} width={20} style={{opacity: .25, position: "absolute", bottom: 20, right: 20}} alt={""}/>
    <div className={"firstline"}/>
    <div className={"secondline"}/>

    <div className={"body"}>
        <h2>{heading}</h2>
        {
            tags?.map((tag: CardTagProps) => <p className={"tag-lite " + tag.color}>{tag.text}</p>)
        }
        <ul className={"list"}>{children}</ul>
    </div>
</div>
export default Card;