import {CSSProperties, FunctionComponent, ReactNode} from "react";

type ButtonProps = {
    color: "green" | "blue" | "red"
    text: ReactNode | string,
    style?: CSSProperties | undefined,
    disabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({text, color,style, disabled = false}) => <button style={style} className={"btn-uroria " + "btn-" + color + " " + (disabled ? "disabled" : "")}>
    {text}
</button>

export default Button;