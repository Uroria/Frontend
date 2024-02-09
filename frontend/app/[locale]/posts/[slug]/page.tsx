"use client"

import {FunctionComponent} from "react";
import Markdown from "react-markdown";
import {NextPage} from "next";
import Container from "../../../../src/micro-components/Container/Container";
import {Col, Row} from "react-bootstrap";
import {ItemPreview} from "../../../../src/micro-components/ItemPreview/ItemPreview";
import {usePost} from "../../../../src/hooks/post/Post.hook";
import SmallHeader from "../../../../src/micro-components/SmallHeader/SmallHeader";
import {useRouter} from "next/navigation";

const Post: NextPage<{ params: any }> = ({params}) => {

    const router = useRouter()
    const {post} = usePost(params.slug)
    if (post === null) router.push("/posts")

    return <>
        <SmallHeader title={post?.title ?? ""}>
            {post?.description ?? ""}
        </SmallHeader>
        <Container>
            <UroriaDown>{post?.content ?? ""}</UroriaDown>
        </Container>

    </>
}
const UroriaDown: FunctionComponent<{ children: string }> = ({children}) => {

    return <Markdown components={{
        img({node, ...props}) {
            console.log(props)
            return <img alt={"default"} {...props} style={{width: "100%", objectFit: "cover"}}/>
        },
        pre({node, ...props}) {
            return <>{props.children}</>
        },
        code(props) {

            const {children, className, node, ...rest} = props

            const tagName = String(className).split("language-")[1]


            const attributes: { [key: string]: any } = {}

            // @ts-ignore
            String(node?.data?.meta).split(/\s+/g).forEach(keyValue => {
                const keyValueSplitted = keyValue.split("=")
                attributes[keyValueSplitted[0]] = keyValueSplitted[1]
            })

            if (tagName === "row") {
                return <Row>
                    <UroriaDown>{String(children)}</UroriaDown>
                </Row>
            }

            if (tagName === "col") {
                return <Col xs={attributes.xs} sm={attributes.sm} md={attributes.md} lg={attributes.lg}
                            xl={attributes.xl}>
                    <UroriaDown>{String(children)}</UroriaDown>
                </Col>
            }

            if (tagName === "item-preview") {
                return <p><ItemPreview rareness={attributes.rareness} image={attributes.image} type={attributes.type}/></p>
            }

            return className ? <div attr-meta={JSON.stringify(attributes)} className={tagName}>
                <UroriaDown>{String(children)}</UroriaDown></div> : <UroriaDown>{String(children)}</UroriaDown>;
        },
    }} children={children}/>

}

export default Post;