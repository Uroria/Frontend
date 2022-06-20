import ModelViewer from "./ModelViewer";
import {Col, Row} from "react-bootstrap";
import CustomItemAbilityGraph from "./CustomItemAbilityGraph";
import {FunctionComponent} from "react";

type CustomItemPreviewCardAbilityGraphProps = {
    progres?: number,
    name: string
}

type CustomItemPreviewCardModelProps = {
    src: string
}

type CustomItemPreviewCardMainAbilityProps = {
    mainAbilityStats: number,
    rareness: "common" | "uncommon" | "rare" | "legendary" | "epic" | string,
}

type CustomItemPreviewCardAbilitiesProps = {
    itemAbilities: CustomItemPreviewCardAbilityGraphProps[]
}

type CustomItemPreviewCardProps = {
    src: string,
    mainAbilityStats: number,
    rareness: "common" | "uncommon" | "rare" | "legendary" | "epic" | string,
    itemName: string,
    description: string[],
    itemAbilities: CustomItemPreviewCardAbilityGraphProps[]

}

const CustomItemPreviewCard: FunctionComponent<CustomItemPreviewCardProps> = ({src, mainAbilityStats, rareness, itemName, description, itemAbilities}) => <div className={"customitempreviewcard"}>

    <CustomItemPreviewCardModel src={src}/>
    <CustomItemPreviewCardMainAbility mainAbilityStats={mainAbilityStats} rareness={rareness}/>

    <h2>{itemName}</h2>
    <ul>
        {description.map((descriptionItem, index) => <li key={index}>{descriptionItem}</li>)}
    </ul>

    <CustomItemPreviewCardAbilities itemAbilities={itemAbilities}/>
</div>

const CustomItemPreviewCardModel: FunctionComponent<CustomItemPreviewCardModelProps> = ({src}) => <>

    <ModelViewer autoRotate={true} src={src} rotation={{x: 80, y: 80, z: 120}}/>
    <ModelViewer autoRotate={true} src={src} rotation={{x: 80, y: 80, z: 120}}/>

</>

const CustomItemPreviewCardMainAbility: FunctionComponent<CustomItemPreviewCardMainAbilityProps> = ({mainAbilityStats, rareness}) => <div className={"main-ability"}>
    <span className={"stats"}>{mainAbilityStats}</span>
    <span className={"rareness-tag " + rareness}>{rareness}</span>
</div>

const CustomItemPreviewCardAbilities: FunctionComponent<CustomItemPreviewCardAbilitiesProps> = ({itemAbilities}) =>  <Row>
    {
        itemAbilities.map(itemAbility => <Col key={itemAbility.name} className={"abilities"}>
                <CustomItemAbilityGraph progres={itemAbility.progres}>{itemAbility.name}</CustomItemAbilityGraph>
            </Col>)
    }
</Row>


export default CustomItemPreviewCard;