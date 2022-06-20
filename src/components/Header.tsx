import {Container} from "react-bootstrap";

const Header = (props: any) => {
    return <div className={"header-uroria"}>
        <Container>
            {props.children}
        </Container>
        <div className={"transition"}/>
    </div>
}

export default Header;