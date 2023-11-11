import {FunctionComponent} from "react";
import Markdown from "react-markdown";
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