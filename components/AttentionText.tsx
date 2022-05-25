import {FunctionComponent, ReactNode} from "react";

type AttentionTextParams = {
    children: string | ReactNode,
    top: string[],
    left: string[]
}

// @ts-ignore
const AttentionText: FunctionComponent<AttentionTextParams> = ({children, top, left}) => <div style={{"--topXS": top[0],
    "--topSM": top[1],
    "--topMD": top[2],
    "--topLG": top[3],
    "--topXL": top[4],
    "--topXXL": top[5],
    "--leftXS": left[0],
    "--leftSM": left[1],
    "--leftMD": left[2],
    "--leftLG": left[3],
    "--leftXL": left[4],
    "--leftXXL": left[5]
}} className={"attentiontext"}>
    <span className={"text"}>{children}</span>
    <img src={"/arrow.svg"} width={100} className={"arrow"}/>
</div>

export default AttentionText