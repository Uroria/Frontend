import {NextPage} from "next";
import {FunctionComponent} from "react";
import Markdown from "react-markdown";
import Header from "../../../src/macro-components/Header/Header";
import {Container} from "react-bootstrap";

const PostsPage: NextPage = () => {
    return <>
        <Header/>
        <Container>
            <UroriaDown>{`
        
# Test

## Test
**akjkasasa** sdkiskksd *sdlsd*


        
~~~section
    ~~~col sm--12 lg--6
        # Test
        Description blablabla
    ~~~
    
    ~~~blog-post id=17
    sdsd
    ~~~
~~~

`}</UroriaDown>
        </Container>
    </>
}


const UroriaDown: FunctionComponent<{children: string}> = ({children}) => {

    return <Markdown components={{
        pre({ node, ...props }) {
            return <>{props.children}</>
        },
        code(props) {

            const {children, className, node, ...rest} = props
            // @ts-ignore
            return className ? <div attr-meta={node?.data?.meta || null} className={className}><UroriaDown>{String(children)}</UroriaDown></div> : <UroriaDown>{String(children)}</UroriaDown>;
        },
    }} children={children}/>

}

export default PostsPage;