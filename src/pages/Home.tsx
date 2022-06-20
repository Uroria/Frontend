import Script from "next/script";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AvatarList from "../components/AvatarList";
import Avatar from "../components/Avatar";
import IconButton from "../components/IconButton";
import {IconUsers} from "@tabler/icons";
import StatusView from "../components/StatusView";
import NewsSection from "../sections/NewsSection";
import ItemPreviewSection from "../sections/ItemPreviewSection";
import {FunctionComponent} from "react";
import FeatureSection from "../sections/FeatureSection";
import Footer from "../sections/Footer";
import {useLanguage} from "../hooks/LanguageHook";
import {ILanguage} from "../@types/TLanguage";

interface HomeProps {
    customItems: {[key: string] : any}[],
    blogs: {[key: string] : any}[]
}

const Home: FunctionComponent<HomeProps> = ({customItems, blogs}) => {

    const language: ILanguage = useLanguage();

    return <div>
        <Script type={"module"} src={"https://unpkg.com/@google/model-viewer@1.9.1/dist/model-viewer.min.js"}/>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>

        <Navigation/>
        <Header>
            <AvatarList>
                <Avatar image={<img src={"/assets/images/ururiabot.png"}/>}/>
                <Avatar image={<img src={"/assets/images/jan.png"}/>}/>
                <Avatar image={<img src={"/assets/images/gecoded.png"}/>}/>
                <Avatar image={<img src={"/assets/images/paul.png"}/>}/>
                <IconButton tooltip={"Jetzt bewerben"}><IconUsers size={20}/></IconButton>
            </AvatarList>
            <h1>{language["index.section.header.title"]}</h1>

            <StatusView headline={language["index.section.header.infocard.status"]}
                        icon={"/assets/icons/haken.png"}>Active</StatusView>
            <StatusView headline={language["index.section.header.infocard.nextevent"]}
                        icon={"/assets/icons/calender.png"}>6ter September, 10 Uhr</StatusView>
            <StatusView headline={language["index.section.header.infocard.price"]}
                        icon={"/assets/icons/coins.png"}>150</StatusView>

        </Header>

        <NewsSection count={3} blogs={blogs}/>
        <ItemPreviewSection customItems={customItems}/>
        <FeatureSection/>
        <Footer/>
    </div>
}

export default Home;