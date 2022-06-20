import {FunctionComponent} from "react";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import NewsSection from "../sections/NewsSection";
import Footer from "../sections/Footer";
import {ILanguage} from "../@types/TLanguage";
import {useLanguage} from "../hooks/LanguageHook";

type BlogProps = {
    blogs: {[key: string] : any}[]
}

const Blog: FunctionComponent<BlogProps> = ({blogs}) => {

    const language: ILanguage = useLanguage();

    return <div>
        <Script type={"module"} src={"https://unpkg.com/@google/model-viewer@1.9.1/dist/model-viewer.min.js"}/>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>

        <Navigation/>
        <Header>
            <h1>{language["blog.section.header.title"]}</h1>
        </Header>

        <NewsSection negativeMarginTop={true} blogs={blogs}/>
        <Footer/>
    </div>
}

export default Blog;