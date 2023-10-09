import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes, useState} from "react";
import styles from "../../styles/components/Input.module.scss"
import {IconInfoCircle, IconArrowBarRight} from "@tabler/icons-react";
import Button from "./Button";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    description?: string,
    blink?: boolean,
    onEnter?: (value: string) => void
}

const Input: FunctionComponent<InputProps> = ({description, blink = false, onEnter = (value) => {}, ...args}) => {

    const [focus, setFocus] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    return <>
        <div className={styles.input__wrapper}>
            <div style={{width: args.width + "px"}} className={styles.input}>
                <input {...args} onChange={event => setValue(event.target.value)} onFocus={() => setFocus(true)} onBlur={() => {
                    setFocus(false)
                    onEnter(value)
                }} style={{width: (Number(args.width) - 30) + "px"}}/>
            </div>
            {focus ? <Button style={{
                position: "absolute",
                top: "50%",
                right: "-.5rem",
                transform: "translateY(-50%)",
                padding: ".15rem"
            }} onClick={() => onEnter(value)} buttonSize={"sm"} type={"round"} icon={true}><IconArrowBarRight/></Button> : null}
            {blink ? <div className={styles.input__blink}/> : null}
        </div>

        {description ? <p className={styles.input__description} style={{width: args.width + "px"}}><IconInfoCircle size={12.8}/> {description}</p> : null}
    </>
}

export default Input;