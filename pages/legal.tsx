import {GetServerSideProps, NextPage} from "next";
import {PageProps} from "../src/@types/TPage";
import Language from "../src/components/Language";
import Legal from "../src/pages/Legal";
import {getLanguage} from "../src/utils/Language";

const LegalPage: NextPage<PageProps> = ({language}) => {
    return <Language.Provider value={language}><Legal/></Language.Provider>
}

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const languageProperties = await getLanguage(locale);
    return {props: {"language": languageProperties}}
}

export default LegalPage;