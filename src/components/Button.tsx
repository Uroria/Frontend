import {FunctionComponent, ReactNode} from "react";
import styles from '../../styles/components/Button.module.scss'

type ButtonProps = {
    href?: string,
    size?: "lg" | "md" | "sm",
    color?: "white" | "black" | "blue",
    type?: "round" | "square",
    icon?: boolean,
    children: ReactNode,
}

const Button: FunctionComponent<ButtonProps> = ({href, children, size = "md", color = "black", type = "round", icon = false}) => <a
    href={href} className={(styles["btn-" + color + "-" + type]) + " " + styles["btn-" + size] + " " + (icon ? styles["btn_icon"] : undefined)}>
    {children}
</a>

export default Button;