"use client";

import {FunctionComponent} from "react";
import Section from "../../micro-components/Section/Section";
import News from "../../micro-components/News/News";
import {Col, Row} from "react-bootstrap";

const Posts: FunctionComponent = () => {
  return <Section>
      <h2>Updates</h2>
      <Row>
          <Col sm={12} lg={4}>
              <News title={"Test"} description={"sdksdkssjs dsjdksksd"} date={new Date()} image={"/assets/images/1.png"}/>
          </Col>
          <Col sm={12} lg={4}>
              <News title={"Test"} description={"sdksdkssjs dsjdksksd"} date={new Date()} image={"/assets/images/1.png"}/>
          </Col>
          <Col sm={12} lg={4}>
              <News title={"Test"} description={"sdksdkssjs dsjdksksd"} date={new Date()} image={"/assets/images/1.png"}/>
          </Col>

      </Row>
  </Section>
}

export default Posts;