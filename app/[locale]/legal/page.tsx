import {NextPage} from "next";
import Header from "../../../src/macro-components/Header/Header";
import LegalNoticeSection from "../../../src/sections/legal/LegalNoticeSection";
import Footer from "../../../src/sections/Footer";

const LegalPage: NextPage = () => {
    return <>
        <Header/>
        <LegalNoticeSection/>
        <Footer/>
    </>
}

export default LegalPage;