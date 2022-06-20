import {GetServerSideProps, NextPage} from "next";
import Language from "../src/components/Language";
import {getLanguage} from "../src/utils/Language";
import {ILanguage} from "../src/@types/TLanguage";
import Apply from "../src/pages/Apply";

interface ApplyPageProps {
    language: ILanguage
}


const ApplyPage: NextPage<ApplyPageProps> = ({language}) => {
    return <Language.Provider value={language}><Apply/></Language.Provider>
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const languageProperties = await getLanguage(locale);
    return {props: {"language": languageProperties}}
}

export default ApplyPage;