import {NextPage} from "next";
import SmallHeader from "../../../src/micro-components/SmallHeader/SmallHeader";
import Posts from "../../../src/macro-components/Posts/Posts";
import PostFeatured from "../../../src/macro-components/PostFeatured/PostFeatured";

const PostsPage: NextPage = () => {
    return <>
        <SmallHeader title={"News & Updates"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
        </SmallHeader>
        <Posts/>
    </>
}

export default PostsPage;