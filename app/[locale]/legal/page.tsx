import {NextPage} from "next";
import LegalNoticeSection from "../../../src/sections/legal/LegalNoticeSection";
import Footer from "../../../src/sections/Footer";
import SmallHeader from "../../../src/micro-components/SmallHeader/SmallHeader";

const LegalPage: NextPage = () => {
    return <>
        <SmallHeader title={"Legal notice"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
        </SmallHeader>
        <LegalNoticeSection/>
        <Footer/>
    </>
}

export default LegalPage;