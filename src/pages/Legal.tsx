import {FunctionComponent} from "react";
import Navigation from "../components/Navigation";
import Header from "../sections/Header";
import LegalNoticeSection from "../sections/legal/LegalNoticeSection";
import Footer from "../sections/Footer";

const Legal: FunctionComponent = () => {
    return <>
        <Navigation/>
        <Header/>
        <LegalNoticeSection/>
        <Footer/>
    </>
}

export default Legal;