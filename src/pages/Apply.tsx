import {FunctionComponent} from "react";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../sections/Footer";
import {ILanguage} from "../@types/TLanguage";
import {useLanguage} from "../hooks/LanguageHook";
import ApplySection from "../sections/ApplySection";


const Apply: FunctionComponent = () => {

    const language: ILanguage = useLanguage();

    return <div className={"uroria"}>
        <Script type={"module"} src={"https://unpkg.com/@google/model-viewer@1.9.1/dist/model-viewer.min.js"}/>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>

        <Navigation/>
        <Header>
            <h1>{language["apply.section.header.title"]}</h1>
        </Header>

        <ApplySection negativeMarginTop={true}/>
        <Footer/>
    </div>
}

export default Apply;