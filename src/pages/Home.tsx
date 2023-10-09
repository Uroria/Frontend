import {FunctionComponent} from "react";
import Header from "../sections/Header";
import FeatureSection from "../sections/home/FeatureSection";
import GameSection from "../sections/home/GameSection";
import CosmeticSection from "../sections/home/CosmeticSection";

const Home: FunctionComponent = () => {

    return <>
        <Header/>
        <FeatureSection/>
        <CosmeticSection/>
        <GameSection/>
    </>
}

export default Home;