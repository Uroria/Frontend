import Script from "next/script";
import {useLanguage} from "../hooks/LanguageHook";
import {ILanguage} from "../@types/TLanguage";
import {FunctionComponent} from "react";
import Header from "../sections/Header";
import Navigation from "../components/Navigation";
import FeatureSection from "../sections/home/FeatureSection";
import GameSection from "../sections/home/GameSection";
import CosmeticSection from "../sections/home/CosmeticSection";
import Footer from "../sections/Footer";

const Home: FunctionComponent = () => {

    const language: ILanguage = useLanguage();

    console.log(language)

    return <>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>

        <Navigation/>
        <Header/>
        <FeatureSection/>
        <GameSection/>
        <CosmeticSection/>
        <Footer/>
    </>
}

export default Home;