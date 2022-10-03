import {Col, Row} from "react-bootstrap";
import Event from "../../components/Event";
import Section from "../../components/Section";

const GameSection = () => <Section>
    <h1>Unsere beliebtesten</h1><br/>
    <h1><span className="mark">Games!</span></h1><br/>
    <p>Hier siehst du eine Liste, der von unseren Creator favorisierten Spielmodi, sie verdienen daher besondere
        Aufmerksamkeit und werden von uns jederzeit auf dem Laufenden gehalten. Um mehr über die jeweiligen Spielmodi zu
        erfahren, lese dir einfach die Blogs zu den jeweiligen Modi durch!</p>
    <Row>
        <Col xs={4} sm={4} md={3} lg={2}>
            <Event description={"escape, ghost, spooky"}>GhostHouse</Event>
        </Col>
        <Col xs={4} sm={4} md={3} lg={2}>
            <Event description={"running or hunting"}>ManHunt</Event>
        </Col>
        <Col xs={4} sm={4} md={3} lg={2}>
            <Event description={"will be launched soon"} commingSoon={true}>Coming soon</Event>
        </Col>
        <Col xs={4} sm={4} md={3} lg={2}>
            <Event description={"will be launched soon"} commingSoon={true}>Coming soon</Event>
        </Col>
    </Row>
</Section>

export default GameSection;