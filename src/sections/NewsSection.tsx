import {Col, Row} from "react-bootstrap";
import Card from "../components/Card";
import Section from "../components/Section";
import {FunctionComponent} from "react";

type TopNewsSectionProps = {
    blogs: { [key: string]: any }[],
    count?: number,
    negativeMarginTop?: boolean
}

const NewsSection: FunctionComponent<TopNewsSectionProps> = ({blogs, count = -1, negativeMarginTop}) => <Section
    useContainer={true} useTransition={false} negativeMarginTop={negativeMarginTop}>
    <Row>

        {
            blogs.map((blog, index) => {
                return ((index + 1) <= count || count < 0) ? <Col lg={4}>
                    <Card src={blog.src}
                          tag={blog.tag} heading={blog.heading}
                          tags={blog.tags}>
                        {
                            blog.descriptions.map((description: string) => <li>{description}</li>)
                        }
                    </Card>
                </Col> : null;
            })
        }
    </Row>
</Section>

export default NewsSection;