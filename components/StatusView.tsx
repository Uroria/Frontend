import {FunctionComponent, ReactNode} from "react";

type StatusViewProps = {
    children: ReactNode,
    headline: string,
    icon?: string
}

const StatusView: FunctionComponent<StatusViewProps> = ({headline, icon, children}) => <div className={"statusview"}>
    <span className={"headline"}>{headline}</span>
    <span className={"subline"}>{ icon ? <img className={"icon"} src={icon}/> : ""}{children}</span>
</div>

export default StatusView