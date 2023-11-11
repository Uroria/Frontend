import {FunctionComponent} from "react";
import Section from "../../micro-components/Section/Section";
import {Col, Row} from "react-bootstrap";
import News from "../../micro-components/News/News";
import Button from "../../micro-components/Button";
import {IconBrandDiscord, IconBrandInstagram, IconBrandWhatsapp} from "@tabler/icons-react";


const PostFeatured: FunctionComponent = () => {
    return <Section>
        <h2>Featured Post</h2>
        <Row>
            <Col sm={12} lg={5}>
                <News title={"Lorem ipsum dolor sit"} description={"sdksdkssjs dsjdksksd"} date={new Date()}
                      image={"../assets/images/1.png"}/>
            </Col>
            <Col sm={12} lg={7}>
                <h3>Lorem ipsum dolor sit</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea.</p>
                <Button href={"https://dc.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandDiscord/></Button>
                <Button href={"https://yt.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandWhatsapp/></Button>
                <Button href={"https://ig.uroria.com"} buttonSize={"sm"} type={"round"} icon={true}><IconBrandInstagram/></Button>
            </Col>
        </Row>
    </Section>
}

export default PostFeatured;