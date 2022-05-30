import {CSSProperties, FunctionComponent, ReactNode} from "react";

type ButtonProps = {
    color: "green" | "blue" | "red"
    text: ReactNode | string,
    style?: CSSProperties | undefined
}

const Button: FunctionComponent<ButtonProps> = ({text, color,style}) => <button style={style} className={"btn-uroria " + "btn-" + color}>
    {text}
</button>

export default Button;