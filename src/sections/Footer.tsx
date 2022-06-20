import Section from "../components/Section";
import {IconBrandDiscord, IconBrandInstagram, IconBrandYoutube} from "@tabler/icons";
import {useLanguage, useLanguageTranslations} from "../hooks/LanguageHook";

const Footer = () => {

    const language = useLanguage();

    return <Section
        src={"https://static.planetminecraft.com/files/resource_media/screenshot/1307/2013-02-14_114038_4837850_lrg.jpg"}
        useTransition={true} paddingY={200} transitionOnlyTop={true} className={"footer"}>
        <footer className="row">
            <div className="col-md">
                <img
                    src="/assets/images/Uroria.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <p>{language["footer.description"]}</p>
                <span className={"brand-btn"}><IconBrandInstagram/></span>
                <span className={"brand-btn"}><IconBrandYoutube/></span>
                <span className={"brand-btn"}><IconBrandDiscord/></span>
            </div>

            <div className="col-4">
                <h5>{language["footer.column.1.title"]}</h5>
                <ul className="nav flex-column">
                    {
                        useLanguageTranslations("footer.column.1.list")
                            .map(translation => <li className="nav-item mb-2"><a href="#">{translation}</a></li>)
                    }
                </ul>
            </div>

            <div className="col-4">
                <h5>{language["footer.column.2.title"]}</h5>
                <ul className="nav flex-column">
                    {
                        useLanguageTranslations("footer.column.2.list")
                            .map(translation => <li className="nav-item mb-2"><a href="#">{translation}</a></li>)
                    }
                </ul>
            </div>
        </footer>
    </Section>
}

export default Footer;