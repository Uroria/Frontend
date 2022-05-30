import {CSSProperties, FunctionComponent} from "react";

type IconButtonProps = {
    style?: CSSProperties | undefined,
    children?: JSX.Element,
    color?: "green" | "blue" | "red"
}

const IconButton: FunctionComponent<IconButtonProps> = ({children, style, color = "green"}) => <button className={"btn-uroria " + "btn-" + color + " btn-icon"} style={style}>
    {children}
</button>

export default IconButton;