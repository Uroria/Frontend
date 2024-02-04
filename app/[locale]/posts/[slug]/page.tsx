import {FunctionComponent} from "react";
import Markdown from "react-markdown";
import {NextPage} from "next";
import SmallHeader from "../../../../src/micro-components/SmallHeader/SmallHeader";


const Post: NextPage = () => {
    return <>
        <SmallHeader title={"News & Updates"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
        </SmallHeader>

        <UroriaDown>
            {
                `
~~~test
    sdsd
    ~~~test1
        sdsd
        sdsds
    ~~~
~~~                
                `
            }
        </UroriaDown>
    </>
}
const UroriaDown: FunctionComponent<{ children: string }> = ({children}) => {

    return <Markdown components={{
        pre({node, ...props}) {
            return <>{props.children}</>
        },
        code(props) {

            const {children, className, node, ...rest} = props
            // @ts-ignore
            return className ? <div attr-meta={node?.data?.meta || null} className={className}>
                <UroriaDown>{String(children)}</UroriaDown></div> : <UroriaDown>{String(children)}</UroriaDown>;
        },
    }} children={children}/>

}

export default Post;