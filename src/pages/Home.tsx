import Script from "next/script";
import {FunctionComponent} from "react";
import Header from "../sections/Header";
import Navigation from "../components/Navigation";
import FeatureSection from "../sections/home/FeatureSection";
import GameSection from "../sections/home/GameSection";
import CosmeticSection from "../sections/home/CosmeticSection";
import Footer from "../sections/Footer";

const Home: FunctionComponent = () => {

    return <>
        <Navigation/>
        <Header/>
        <FeatureSection/>
        <GameSection/>
        <CosmeticSection/>
        <Footer/>
    </>
}

export default Home;