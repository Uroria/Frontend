import {FunctionComponent} from "react";
import styles from '../../../styles/components/Shop/ShopItemDetailCard.module.scss'
import {Container} from "react-bootstrap";
import CharacterPreview from "../../components/CharacterPreview";
import {CosmeticsProps} from "../../components/Minecraft3DCharacter";
import {FixedPage} from "../../components/FixedPage/FixedPage";


const ItemDetailSection: FunctionComponent = () => {

    const backpack: CosmeticsProps = {
        gltf: "candy_backpack",
        positionY: 0.3,
        positionX: 0,
        positionZ: -0.25,
        scale: 0.6
    };

    const username = 'LvckyFelix';

    return <FixedPage>
        <Container className={styles["item-detail"]}>

            <div className={styles["item-detail__name"]}>
                {
                    username.split('').map(value => {
                        return <div className={styles["item-detail__name__letter"]}>{value}</div>
                    })
                }
            </div>

            <div className={styles["item-detail__item"]}>
                <CharacterPreview skinName={username} backpackModel={backpack}/>
            </div>

        </Container>
    </FixedPage>
}

export default ItemDetailSection;