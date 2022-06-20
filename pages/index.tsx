import Home from "../src/pages/Home";
import {GetServerSideProps, NextPage} from "next";
import {getLanguage} from "../src/utils/Language";
import Language from "../src/components/Language";
import {ILanguage} from "../src/@types/TLanguage";
interface HomePageProps {
    language: ILanguage,
    customItems: {[key: string] : any}[],
    blogs: {[key: string] : any}[]
}

const HomePage: NextPage<HomePageProps> = ({language, customItems, blogs}) => {
    return <Language.Provider value={language}><Home blogs={blogs} customItems={customItems}/></Language.Provider>
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const customItems = await getCustomItems();
    const blogs = await getBlogs();
    const languageProperties = await getLanguage(locale);
    return {props: {"customItems": customItems, "blogs": blogs, "language": languageProperties}}
}

const getCustomItems = async () => {
    const res = await fetch("http://localhost:3000/JSON/CustomItems.json")
    return await res.json();
}

const getBlogs = async () => {
    const res = await fetch("http://localhost:3000/JSON/Blogs.json")
    return await res.json();
}

export default HomePage;