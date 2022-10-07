import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, ReactNode} from "react";
import styles from '../../styles/components/Button.module.scss'

interface ButtonProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    href?: string,
    buttonSize?: "lg" | "md" | "sm",
    color?: "white" | "black" | "blue",
    type?: "round" | "square",
    icon?: boolean,
    children: ReactNode,
}

const Button: FunctionComponent<ButtonProps> = ({children, buttonSize = "md", color = "black", type = "round", icon = false, ...args}) =>
    <a className={(styles["btn-" + color + "-" + type]) + " " + styles["btn-" + buttonSize] + " " + (icon ? styles["btn-icon"] : "")} {...args}>
    {children}
</a>

export default Button;