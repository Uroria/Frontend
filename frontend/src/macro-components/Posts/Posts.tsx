"use client"

import {FunctionComponent} from "react";
import Section from "../../micro-components/Section/Section";
import News from "../../micro-components/News/News";
import {Col, Row} from "react-bootstrap";
import {usePosts} from "../../hooks/post/Post.hook";

const Posts: FunctionComponent = () => {

    const {posts} = usePosts()

    return <Section>
        <h2>Updates</h2>
        <Row>
            {
                posts?.map(post => {
                    return <Col sm={12} lg={4} key={post.slug} style={{marginBottom: "1.5rem"}}>
                        <News slug={post.slug} title={post.title} description={post.description} date={post.publishedAt}
                              image={`http://localhost:1337${post.mediumImage?.url}`}/>
                    </Col>
                })
            }

        </Row>
    </Section>
}

export default Posts;