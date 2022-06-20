import {useLanguage, useLanguageTranslations} from "../hooks/LanguageHook";
import {Col, Row} from "react-bootstrap";
import Card from "../components/Card";
import Section from "../components/Section";
import {FunctionComponent} from "react";

type ApplySectionProps = {
    negativeMarginTop?: boolean
}

const ApplySection: FunctionComponent<ApplySectionProps> = ({negativeMarginTop}) => {

    const language = useLanguage();
    return <Section useContainer={true} useTransition={false} negativeMarginTop={negativeMarginTop}>
        <Row>
            <Col lg={4}><Card src={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164595907/original/f2ed53ee9c6a53a8e7a6ac7bf3a4040ef3f9e2d0/create-a-minecraft-wallpaper-or-thumbnail-in-high-quality.png"} heading={language["apply.section.jobs.developer.heading"]} tags={[{color: "epic", text: language["apply.section.jobs.developer.name"]}]}>
                {
                    useLanguageTranslations("apply.section.jobs.developer.list").map(translation => <li>{translation}</li>)
                }
            </Card></Col>
            <Col lg={4}><Card src={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164595907/original/f2ed53ee9c6a53a8e7a6ac7bf3a4040ef3f9e2d0/create-a-minecraft-wallpaper-or-thumbnail-in-high-quality.png"} heading={language["apply.section.jobs.gamedesigner.heading"]} tags={[{color: "legendary", text: language["apply.section.jobs.gamedesigner.name"]}]}>
                {
                    useLanguageTranslations("apply.section.jobs.gamedesigner.list").map(translation => <li>{translation}</li>)
                }
            </Card></Col>
            <Col lg={4}><Card src={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164595907/original/f2ed53ee9c6a53a8e7a6ac7bf3a4040ef3f9e2d0/create-a-minecraft-wallpaper-or-thumbnail-in-high-quality.png"} heading={language["apply.section.jobs.designer.heading"]} tags={[{color: "legendary", text: language["apply.section.jobs.designer.name"]}]}>
                {
                    useLanguageTranslations("apply.section.jobs.designer.list").map(translation => <li>{translation}</li>)
                }
            </Card></Col>
            <Col lg={4}><Card src={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164595907/original/f2ed53ee9c6a53a8e7a6ac7bf3a4040ef3f9e2d0/create-a-minecraft-wallpaper-or-thumbnail-in-high-quality.png"} heading={language["apply.section.jobs.builder.heading"]} tags={[{color: "uncommon", text: language["apply.section.jobs.builder.name"]}]}>
                {
                    useLanguageTranslations("apply.section.jobs.builder.list").map(translation => <li>{translation}</li>)
                }
            </Card></Col>
        </Row>
    </Section>
}

export default ApplySection;