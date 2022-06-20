import {Col, Container, Row} from "react-bootstrap";
import Section from "../components/Section";
import CustomItemPreviewCard from "../components/CustomItemPreviewCard";
import CustomItemPreviewSmall from "../components/CustomItemPreviewSmall";
import {FunctionComponent, ReactNode, useState} from "react";

type ItemPreviewSectionProps = {
    customItems: {[key: string] : any}[]
}

type ItemPreviewSectionComponentProps = {
    children: ReactNode
}

const ItemPreviewSection: FunctionComponent<ItemPreviewSectionProps> = ({customItems}) => {

    const [customItemPreviewCard, setSrc] = useState(customItems[0]);

    return <ItemPreviewSectionComponent>
        <Container>
            <Row>
                <Col lg={4}>
                    <CustomItemPreviewCard
                        src={"/assets/3dmodels/" + customItemPreviewCard.itemSrc}
                        mainAbilityStats={customItemPreviewCard.itemMainAbilityStats}
                        rareness={customItemPreviewCard.itemRareness}
                        itemName={customItemPreviewCard.itemName}
                        description={customItemPreviewCard.itemDescription}
                        itemAbilities={customItemPreviewCard.itemAbilities}/>
                </Col>
                <Col lg={8}>
                    <Row>
                        {
                            customItems.map((customItem, index) => {
                                return <Col key={index}><CustomItemPreviewSmall
                                    active={customItemPreviewCard.itemName == customItem.itemName}
                                    onClick={() => setSrc(customItem)} src={"/assets/3dmodels/" + customItem.itemSrc}
                                    rareness={customItem.itemRareness}/></Col>
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    </ItemPreviewSectionComponent>
}


const ItemPreviewSectionComponent: FunctionComponent<ItemPreviewSectionComponentProps> = ({children}) => <Section
    src={"https://static.planetminecraft.com/files/resource_media/screenshot/1307/2013-02-14_114038_4837850_lrg.jpg"}
    useContainer={false}
    title={"Custom Items"}
    paddingY={200}>{children}</Section>

export default ItemPreviewSection;