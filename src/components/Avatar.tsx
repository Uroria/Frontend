import {FunctionComponent, ReactNode} from "react";

type AvatarProps = {
    image: ReactNode,
}

const Avatar: FunctionComponent<AvatarProps> = ({image}) => <div className="avatar">
    <div className="image">
        {image}
    </div>
</div>

export default Avatar;