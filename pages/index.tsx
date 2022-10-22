import Home from "../src/pages/Home";
import {GetServerSideProps, NextPage} from "next";
import {getLanguage} from "../src/utils/Language";
import Language from "../src/components/Language";
import {ILanguage} from "../src/@types/TLanguage";
interface HomePageProps {
    language: ILanguage
}

const HomePage: NextPage<HomePageProps> = ({language}) => {
    return <Language.Provider value={language}><Home/></Language.Provider>
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const languageProperties = await getLanguage(locale);
    return {props: {"language": languageProperties}}
}

export default HomePage;