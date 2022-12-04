import Home from "../src/pages/Home";
import {GetServerSideProps, NextPage} from "next";
import {getLanguage} from "../src/utils/Language";
import Language from "../src/components/Language";
import {PageProps} from "../src/@types/TPage";

const HomePage: NextPage<PageProps> = ({language}) => {
    return <Language.Provider value={language}><Home/></Language.Provider>
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const languageProperties = await getLanguage(locale);
    return {props: {"language": languageProperties}}
}

export default HomePage;