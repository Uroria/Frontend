"use client"

import {FunctionComponent} from "react";
import Minecraft3DCharacter, {CosmeticsProps} from "./Minecraft3DCharacter";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import * as THREE from "three";
import {JsonToGltf} from "../utils/JsonToGltf";
import {useAPI, useImage, useMojangProfile} from "../utils/Fetcher";

interface CharacterPreviewProps {
    skinName: string,
    hatModel?: CosmeticsProps,
    backpackModel?: CosmeticsProps,
    balloonModel?: CosmeticsProps,
    height?: number
}

const CharacterPreview: FunctionComponent<CharacterPreviewProps> = ({skinName, hatModel, backpackModel, balloonModel, height = 500}) => {


    //fetch skin texture for player model
    const {data: playerProfileData, error: playerProfileError} = useMojangProfile(skinName);
    const {data: textureData, error: textureError} = useImage("https://mc-heads.net/skin/" + skinName + ".png");

    //fetch animated minecraft player model
    const {data: playerModelData, error: playerModelError} = useAPI(`${__dirname}./assets/3dModels/player.json`);

    //fetch hat cosmetic when present
    const {data: playerHatModelData, error: playerHatModelError} = hatModel ? useAPI(__dirname + "./assets/3dModels/" + hatModel.gltf + ".json") : {
        data: false,
        error: false
    };

    //fetch hat cosmetic when present
    const {data: playerBalloonModelData, error: playerBalloonModelError} = balloonModel ? useAPI(__dirname + "./assets/3dModels/" + balloonModel.gltf + ".json") : {
        data: false,
        error: false
    };

    //fetch backpack cosmetic when present
    const {data: playerBackpackModelData, error: playerBackpackModelError} = backpackModel ? useAPI(__dirname + "./assets/3dModels/" + backpackModel.gltf + ".json") : {
        data: false,
        error: false
    }

    if (!playerProfileData) return <p style={{position: "absolute", lineHeight: "1", fontFamily: "Luckiest Guy, cursive", fontSize: "1.5rem", textAlign: "center", transform: "translateX(-50%) translateY(-50%)", left: "50%", top: "50%"}}>Loading Player Data...</p>
    if (playerProfileError || playerProfileData["status"] == "ERR") return <p style={{position: "absolute", lineHeight: "1", fontFamily: "Luckiest Guy, cursive", fontSize: "1.5rem", textAlign: "center", transform: "translateX(-50%) translateY(-50%)", left: "50%", top: "50%"}}>Loading Player Data failed!</p>

    //check if data loaded or an error accord
    if (!playerModelData) return <p style={{position: "absolute", lineHeight: "1", fontFamily: "Luckiest Guy, cursive", fontSize: "1.5rem", textAlign: "center", transform: "translateX(-50%) translateY(-50%)", left: "50%", top: "50%"}}>Loading Player Model...</p>
    if (playerModelError) return <p style={{position: "absolute", lineHeight: "1", fontFamily: "Luckiest Guy, cursive", fontSize: "1.5rem", textAlign: "center", transform: "translateX(-50%) translateY(-50%)", left: "50%", top: "50%"}}>Loading Player Model failed!</p>

    // create shadow
    const material = new THREE.ShadowMaterial();
    material.opacity = 0.5;


    //get right skin model depending on texture
    const mojangData = (!!playerProfileData && !playerProfileError) ? JSON.parse(new Buffer(playerProfileData?.textures?.raw?.value, 'base64').toString()) : undefined;
    const skinModel = playerModelData[mojangData.textures?.SKIN?.metadata?.model == "slim" ? ((textureData && !textureError) ? textureData.height : 64) < 64 ? "steve_old" : "alex" : ((textureData && !textureError) ? textureData.height : 64) < 64 ? "steve_old" : "steve_new"];


    //render for 3d Model
    return <Canvas style={{cursor: "ew-resize", height: `${height}px`}} shadows camera={{fov: 90, near: .1, far: 2000}}>
        <Minecraft3DCharacter
            skinModel={{gltf: JsonToGltf(skinModel), texture: (textureData && !textureError) ? textureData.src : undefined, positionY: -3}}
            hatModel={(!!hatModel && !!playerHatModelData && !playerHatModelError) ? {
                gltf: JsonToGltf(playerHatModelData),
                positionX: hatModel.positionX,
                positionZ: hatModel.positionZ,
                positionY: hatModel.positionY,
                scale: hatModel.scale
            } : undefined}
            backpackModel={(!!backpackModel && !!playerBackpackModelData && !playerBackpackModelError) ? {
                gltf: JsonToGltf(playerBackpackModelData),
                positionX: backpackModel.positionX,
                positionZ: backpackModel.positionZ,
                positionY: backpackModel.positionY,
                scale: backpackModel.scale
            } : undefined}
            balloonModel={(!!playerBalloonModelData && !playerBalloonModelError) ? {
                gltf: JsonToGltf(playerBalloonModelData),
                positionX: balloonModel?.positionX,
                positionZ: balloonModel?.positionZ,
                positionY: balloonModel?.positionY,
                scale: balloonModel?.scale
            } : undefined}
            scale={2.5}/>
        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} material={material}>
            <planeGeometry args={[100, 100]}/>
        </mesh>
        <hemisphereLight intensity={.7} color="white" position={[0, 20, 0]}/>
        <directionalLight castShadow={true} intensity={1} position={[4, 5, 5]} color="#ffffff"/>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
        <PerspectiveCamera makeDefault zoom={(!!playerBalloonModelData && !playerBalloonModelError) ? .75 : 1.1} position={[0, 0, 10]} />
    </Canvas>
}

export default CharacterPreview;