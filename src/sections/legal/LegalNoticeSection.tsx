import {FunctionComponent} from "react";
import Section from "../../components/Section";
import {useLanguage, useLanguageTranslations} from "../../hooks/LanguageHook";

const LegalNoticeSection: FunctionComponent = () => {

    const language = useLanguage();

    return <Section>
        <h1>{language["legal.heading"]}</h1>

        <p>
            <b>{language["legal.tmg"]}</b><br/>

            {useLanguageTranslations("legal.tmg").map((value, index) => {
                return language["legal.tmg." + (index + 2)] ? <>{value}<br/></> : <>{value}</>;
            })}
        </p>
        <p>
            <b>{language["legal.contact"]}</b><br/>
            {useLanguageTranslations("legal.contact").map((value, index) => {
                return language["legal.contact." + (index+2)] ? <>{value}<br/></> : <>{value}</>
            })}
        </p>

        <p>
            <b>{language["legal.responsible"]}</b><br/>
            {useLanguageTranslations("legal.responsible").map((value, index) => {
                return language["legal.responsible." + (index+2)] ? <>{value}<br/></> : <>{value}</>
            })}
        </p>

        <a href={"https://www.e-recht24.de/impressum-generator.html"}>
            Quelle: https://www.e-recht24.de/impressum-generator.html
        </a>
    </Section>
}


export default LegalNoticeSection;