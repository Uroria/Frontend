import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes} from "react";
import styles from "../../styles/components/Input.module.scss"
import {IconInfoCircle} from "@tabler/icons";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    description?: string,
    blink?: boolean
}

const Input: FunctionComponent<InputProps> = ({description, blink = false, ...args}) => <>
    <div className={styles.input__wrapper}>
        <div style={{width: args.width + "px"}} className={styles.input}>
            <input {...args} style={{width: (Number(args.width) - 30) + "px"}}/>
        </div>
        {blink ? <div className={styles.input__blink}/> : null}
    </div>

    {description ? <p className={styles.input__description} style={{width: args.width + "px"}}><IconInfoCircle size={12.8}/> {description}</p> : null}
</>

export default Input;