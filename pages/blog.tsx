import {GetServerSideProps, NextPage} from "next";
import Language from "../src/components/Language";
import {getLanguage} from "../src/utils/Language";
import {ILanguage} from "../src/@types/TLanguage";
import Blog from "../src/pages/Blog";

interface BlogPageProps {
    language: ILanguage,
    blogs: {[key: string] : any}[]
}


const BlogPage: NextPage<BlogPageProps> = ({language, blogs}) => {
    return <Language.Provider value={language}><Blog blogs={blogs}/></Language.Provider>
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const blogs = await getBlogs();
    const languageProperties = await getLanguage(locale);
    return {props: {"blogs": blogs, "language": languageProperties}}
}


const getBlogs = async () => {
    const res = await fetch("http://localhost:3000/JSON/Blogs.json")
    return await res.json();
}

export default BlogPage;