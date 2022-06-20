import {FunctionComponent, ReactNode} from "react";

type CardTagProps = {
    color: 'gray' | 'red' | "common" | "uncommon" | "rare" | "legendary" | "epic",
    text: string
}

type CardProps = {
    heading: string,
    children: ReactNode,
    tag?: string,
    tags?: CardTagProps[],
    src: string,
}

const Card: FunctionComponent<CardProps> = ({tag, tags, heading, children, src}) => <div className={"card"}>
    <img src={src} alt={""}/>
    {tag ? <div className={"tag"}>{tag}</div> : null}
    <img src={"/assets/images/corner.svg"} width={20} style={{opacity: .25, position: "absolute", bottom: 20, right: 20}} alt={""}/>
    <div className={"firstline"}/>
    <div className={"secondline"}/>

    <div className={"body"}>
        <h2>{heading}</h2>
        {
            tags?.map((tag: CardTagProps) => <p key={tag.text} className={"rareness-tag " + tag.color}>{tag.text}</p>)
        }
        <ul className={"list"}>{children}</ul>
    </div>
</div>
export default Card;