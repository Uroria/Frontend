import {Container} from "react-bootstrap";

const UroriaHeader = (props: any) => {
    return <div className={"header-uroria"}>
        <Container style={{position: "relative"}}>
            {props.children}
        </Container>
        <div className={"transition"}/>
    </div>
}

export default UroriaHeader;