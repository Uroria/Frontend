import {FunctionComponent} from "react";
import Section from "../../micro-components/Section/Section";
import {useTranslations} from "next-intl";

const LegalNoticeSection: FunctionComponent = () => {

    const language = useTranslations("Index");

    return <Section>
        <h1>{language("legal-heading")}</h1>

        <p>
            <b>{language("legal-tmg")}</b><br/>

            {language("legal-tmg-1")}<br/>
            {language("legal-tmg-2")}<br/>
            {language("legal-tmg-3")}
        </p>
        <p>
            <b>{language("legal-contact")}</b><br/>

            {language("legal-contact-1")}<br/>
            {language("legal-contact-2")}<br/>
            {language("legal-contact-3")}
        </p>

        <p>
            <b>{language("legal-responsible")}</b><br/>

            {language("legal-responsible-1")}<br/>
            {language("legal-responsible-2")}<br/>
            {language("legal-responsible-3")}
        </p>

        <a href={"https://www.e-recht24.de/impressum-generator.html"}>
            Quelle: https://www.e-recht24.de/impressum-generator.html
        </a>
    </Section>
}


export default LegalNoticeSection;