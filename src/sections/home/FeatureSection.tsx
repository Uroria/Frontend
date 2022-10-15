import {Col, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import Section from "../../components/Section";

const FeatureSection = () => <Section id={"features"}>
    <Row>
        <Col lg={"5"}>
            <img src={"/assets/images/uroria_render_gebuildet_cropped.png"} height={600}
                 style={{filter: "drop-shadow(0px 0px 20px rgba(0,0,0,.8))"}}/>
        </Col>
        <Col lg={"7"}>
            <h1><span className="mark">Uroria</span>, eine Welt</h1><br/>
            <h1>voller <span className="mark">Features!</span></h1><br/>
            <p>Um unserer Vision nachzukommen, vermag es Verstand und harte Arbeit, durch diese Arbeit konnten wir
                Systeme auf die Beine stellen, bei denen Events binnen Sekunden starten. Ein großer Teil dieser Arbeit
                sind die Hintergrundsysteme und die dort ablaufenden Kommunikationen, mit denen wir einzigartige
                Projekte in schnellster Zeit verwirklichen können.</p>
            <Row>
                <Col xs={4} sm={4} md={3} lg={3}>
                    <Feature description={"with your creator"}>Events</Feature>
                </Col>
                <Col xs={4} sm={4} md={3} lg={3}>
                    <Feature description={"that makes you unique"}>Cosmetics</Feature>
                </Col>
                <Col xs={4} sm={4} md={3} lg={3}>
                    <Feature description={"to build and grow to infinity"}>Community</Feature>
                </Col>
                <Col xs={4} sm={4} md={3} lg={3}>
                    <Feature description={"with other communities"}>Battles</Feature>
                </Col>
            </Row>
        </Col>
    </Row>
</Section>

export default FeatureSection;