"use client"

import {FunctionComponent} from "react";
import Section from "../../micro-components/Section/Section";
import {Col, Row} from "react-bootstrap";
import News from "../../micro-components/News/News";
import Button from "../../micro-components/Button";
import {useFeaturedPost} from "../../hooks/post/Post.hook";
import {notFound} from 'next/navigation';
import {useTranslations} from "next-intl";
import {IconLink} from "@tabler/icons-react";
import useConfig from "../../utils/config.hook";


const PostFeatured: FunctionComponent = () => {

    const [config, error] = useConfig()

    const {post} = useFeaturedPost()
    const t = useTranslations("general")
    if(!config) return <></>
    if(error) notFound()
    return <Section>
        <h2>Featured Post</h2>
        <Row>
            <Col sm={12} lg={5}>
                <News slug={post?.slug ?? ""} title={post?.title ?? ""} description={post?.description ?? ""} date={post?.publishedAt ?? new Date()}
                      image={`${config.strapi}${post?.mediumImage?.url}`}/>
            </Col>
            <Col sm={12} lg={7}>
                <h3>{post?.title ?? ""}</h3>
                <p>{post?.description ?? ""}</p>
                <Button href={`/posts/${post?.slug}`}>{t("more-info")} <IconLink/></Button>
            </Col>
        </Row>
    </Section>
}

export default PostFeatured;