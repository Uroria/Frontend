import ModelViewer from "./ModelViewer";
import {FunctionComponent, MouseEventHandler} from "react";

type CustomItemPreviewSmallProps = {
    src: string
    rareness: "common" | "uncommon" | "rare" | "legendary" | "epic",
    onClick: MouseEventHandler<HTMLDivElement>,
    active?: boolean
}

const CustomItemPreviewSmall: FunctionComponent<CustomItemPreviewSmallProps> = ({src, rareness, onClick, active}) => <div onClick={onClick} className={"customitempreviewsmall " + rareness + (active ? " active" : "")}>
    <ModelViewer src={src} rotation={{x: 45, y: 90, z: 120}}/>
</div>

export default CustomItemPreviewSmall;