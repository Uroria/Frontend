import {FunctionComponent, ReactNode} from "react";

type AvatarListProps = {
    children: ReactNode
}

const AvatarList: FunctionComponent<AvatarListProps> = ({children}) => <div className={"avatar-list"}>
    {children}
</div>

export default AvatarList;
