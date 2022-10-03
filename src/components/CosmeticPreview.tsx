import {Canvas} from "@react-three/fiber";
import {FunctionComponent, Suspense} from "react";
import {CosmeticsProps, MinecraftCosmetic} from "./Minecraft3DCharacter";
import {OrbitControls} from "@react-three/drei";
import styles from "../../styles/components/Cosmetic.module.scss";
import useSWR from "swr";
import {fetcher} from "../utils/Fetcher";
import {JsonToGltf} from "../utils/JsonToGltf";

type CosmeticRareness = "Epic" | "Legendeary" | "Rare" | "Uncommon" | "Common";

interface CosmeticProps {
    hatModel: CosmeticsProps
    rareness?: CosmeticRareness
}

const CosmeticPreview: FunctionComponent<CosmeticProps> = ({rareness = "Common", hatModel}) => {

    const {data, error} = useSWR("./assets/3dModels/" + hatModel.gltf + ".json", fetcher);

    return <div className={styles.cosmetic + " " + styles["cosmetic-" + rareness?.toLowerCase]}>
        {data ? <Canvas style={{cursor: "pointer"}} camera={{fov: 75}}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5}/>
                <directionalLight color="rgba(240,240,240, .7)" position={[0, 0, 5]}/>
                <directionalLight color="rgba(240,240,240, .7)" position={[0, 0, -5]}/>
                <MinecraftCosmetic hatModel={{gltf: JsonToGltf(data)}} scale={3}/>
                <OrbitControls enableZoom={false} enableRotate={false} autoRotate={true}
                               autoRotateSpeed={5}/>
            </Suspense>
        </Canvas> : (!data && !error) ? <p>Loading</p> : <p>Error while loading</p>}
    </div>
}

export default CosmeticPreview;