import Footer from "../../../src/sections/Footer";

const PostsLayout = async ({children}: {
    children: React.ReactNode
}) => {
    return <>
        {children}
        <Footer/>
    </>
}

export default PostsLayout;

