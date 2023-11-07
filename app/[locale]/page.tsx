import {NextPage} from "next";
import Header from "../../src/macro-components/Header/Header";
import FeatureSection from "../../src/sections/home/FeatureSection";
import CosmeticSection from "../../src/sections/home/CosmeticSection";
import GameSection from "../../src/sections/home/GameSection";
import Footer from "../../src/sections/Footer";

// @ts-ignore
const HomePage: NextPage = () => {
    return <>
        <Header/>
        <FeatureSection/>
        <CosmeticSection/>
        <GameSection/>
        <Footer/>
    </>
}


export default HomePage;