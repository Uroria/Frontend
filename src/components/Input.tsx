import {DetailedHTMLProps, FunctionComponent, InputHTMLAttributes} from "react";
import styles from "../../styles/components/Input.module.scss"

const Input:FunctionComponent<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (args) => <div>
    <div className={styles.input__wrapper}>
        <div style={{width: args.width + "px"}} className={styles.input}><input {...args} style={{width: args.width + "px"}}/></div>
        <div className={styles.input__blink}/>
    </div>

    <p className={styles.input__description}>{args["aria-describedby"]}</p>
</div>

export default Input;