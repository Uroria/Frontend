import {FunctionComponent} from "react";
import Minecraft3DCharacter, {CosmeticsProps} from "./Minecraft3DCharacter";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import * as THREE from "three";
import {JsonToGltf} from "../utils/JsonToGltf";
import {useAPI} from "../utils/Fetcher";

interface CharacterPreviewProps {
    skinName: string,
    hatModel?: CosmeticsProps,
}

const CharacterPreview: FunctionComponent<CharacterPreviewProps> = ({skinName, hatModel}) => {

    //fetch animated minecraft player model
    const playerModel = useAPI('./assets/3dModels/player.json');

    //fetch hat cosmetic when present
    const playerHatModel = hatModel ? useAPI("./assets/3dModels/" + hatModel.gltf + ".json") : {
        data: undefined,
        error: false
    };

    // create shadow
    const material = new THREE.ShadowMaterial();
    material.opacity = 0.2;

    return <Canvas style={{cursor: "ew-resize"}} shadows>
        <Minecraft3DCharacter
            skinModel={{gltf: skinGltf, texture: "https://mc-heads.net/skin/" + skinName, positionY: -3}}
            hatModel={(hatModel && playerHatModel.data && !playerHatModel.error) ? {
                gltf: JsonToGltf(playerHatModel.data),
                positionX: hatModel.positionX,
                positionZ: hatModel.positionZ,
                positionY: hatModel.positionY,
                scale: hatModel.scale
            } : undefined}
            scale={2.5}/>
        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} material={material}>
            <planeGeometry args={[100, 100]}/>
        </mesh>
        <hemisphereLight intensity={.7} color="white" position={[0, 20, 0]}/>
        <directionalLight castShadow={true} intensity={1} position={[4, 5, 5]} color="#ffffff"/>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
    </Canvas>
}

export default CharacterPreview;