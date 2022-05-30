import {Col, Row} from "react-bootstrap";
import Card from "../components/Card";
import Section from "../components/Section";
import {FunctionComponent} from "react";
import {ILanguage} from "../@types/TLanguage";

const TopNewsSection: FunctionComponent<ILanguage> = ({language}) => <Section useTransition={false}
                                                                              title={language["index.section.news.title"]}>
    <Row>
        <Col lg={4}>
            <Card src={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/885d69125376791.611d7c2b97b61.png"}
                  tag={"Update News"} heading={"Neuer dungeon veroeffentlicht!"}
                  tags={[{text: "Vor 30 Tagen", color: "gray"}, {text: "Dungeon Update", color: "red"}]}>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
            </Card>
        </Col>
        <Col lg={4}>
            <Card src={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/885d69125376791.611d7c2b97b61.png"}
                  tag={"Update News"} heading={"Neuer dungeon veroeffentlicht!"}
                  tags={[{text: "Vor 30 Tagen", color: "gray"}, {text: "Dungeon Update", color: "red"}]}>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
            </Card>
        </Col>
        <Col lg={4}>
            <Card src={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/885d69125376791.611d7c2b97b61.png"}
                  tag={"Update News"} heading={"Neuer dungeon veroeffentlicht!"}
                  tags={[{text: "Vor 30 Tagen", color: "gray"}, {text: "Dungeon Update", color: "red"}]}>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut
                </li>
            </Card>
        </Col>
    </Row>
</Section>

export default TopNewsSection;