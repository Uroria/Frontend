const Button = (props: any) => {
    return <button className={"btn-uroria " + "btn-" + props.type}>
            {props.text}
        </button>
}

export default Button;