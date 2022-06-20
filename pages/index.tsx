import Home from "../src/pages/Home";
import {GetServerSideProps, NextPage} from "next";
import {getLanguage} from "../src/utils/Language";
import Language from "../src/components/Language";
import {ILanguage} from "../src/@types/TLanguage";
interface HomePageProps {
    language: any,
    customItems: any[]
}

const HomePage: NextPage<HomePageProps> = ({language, customItems}) => <Home language={language}
                                                                             customItems={customItems}/>

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const customItems = await getCustomItems();
    const {languageProperties} = await useLanguage(locale);
    return {props: {"customItems": customItems, "language": languageProperties}}
}

const getCustomItems = async () => {
    const res = await fetch("http://localhost:3000/JSON/CustomItems.json")
    return await res.json();
}

export default HomePage;