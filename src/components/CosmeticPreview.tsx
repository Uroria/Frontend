import {Canvas} from "@react-three/fiber";
import {FunctionComponent, Suspense} from "react";
import {CosmeticsProps, MinecraftCosmetic} from "./Minecraft3DCharacter";
import {OrbitControls} from "@react-three/drei";
import styles from "../../styles/components/Cosmetic.module.scss";
import {useAPI} from "../utils/Fetcher";
import {JsonToGltf} from "../utils/JsonToGltf";

type CosmeticRareness = "Epic" | "Legendeary" | "Rare" | "Uncommon" | "Common";

interface CosmeticProps {
    hatModel: CosmeticsProps
    rareness?: CosmeticRareness
}

const CosmeticPreview: FunctionComponent<CosmeticProps> = ({rareness = "Common", hatModel}) => {

    const playerHatModel = useAPI("./assets/3dModels/" + hatModel.gltf + ".json");

    return <div className={styles.cosmetic + " " + styles["cosmetic-" + rareness?.toLowerCase]}>
        {playerHatModel.data ? <Canvas style={{cursor: "pointer"}} camera={{fov: 75}}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5}/>
                <directionalLight color="rgb(240,240,240)" position={[0, 0, 5]}/>
                <directionalLight color="rgb(240,240,240)" position={[0, 0, -5]}/>
                <MinecraftCosmetic hatModel={{gltf: JsonToGltf(playerHatModel.data)}} scale={3}/>
                <OrbitControls enableZoom={false} enableRotate={false} autoRotate={true}
                               autoRotateSpeed={5}/>
            </Suspense>
        </Canvas> : (!playerHatModel.data && !playerHatModel.error) ? <p>Loading</p> : <p>Error while loading</p>}
    </div>
}

export default CosmeticPreview;