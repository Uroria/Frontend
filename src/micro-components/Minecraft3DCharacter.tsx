"use client"

import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {FunctionComponent, useEffect, useMemo, useRef, useState} from "react";
import {Group, Object3D, TextureLoader} from "three";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

export interface ObjectProps {
    gltf: string,
    texture?: string,
    positionY?: number,
    positionX?: number,
    positionZ?: number
}

export interface CosmeticsProps extends ObjectProps {
    scale?: number
}

interface Minecraft3DCharacterProps {
    skinModel: ObjectProps,
    hatModel?: CosmeticsProps,
    backpackModel?: CosmeticsProps
    balloonModel?: CosmeticsProps
    scale?: number
}

const Minecraft3DCharacter: FunctionComponent<Minecraft3DCharacterProps> =
    ({skinModel, hatModel, backpackModel, balloonModel, scale = 1}) => {
        //variables
        // @ts-ignore
        const [mixer] = useState(() => new THREE.AnimationMixer())
        const actions = useRef<{ idle: any } | undefined>();
        const primitiveRef = useRef<Group | undefined>();
        const [object, setObject] = useState<GLTF | undefined>(undefined);
        const [currentHat, setCurrentHat] = useState<THREE.Group | undefined>(undefined);
        const [currentBackpack, setCurrentBackpack] = useState<THREE.Group | undefined>(undefined);
        const [currentBalloon, setCurrentBalloon] = useState<THREE.Group | undefined>(undefined);

        //load model
        useMemo(() => {
            const loader = new GLTFLoader();

            loader.load(skinModel.gltf, pObject => {
                pObject.scene.rotation.set(0, 135.3, 0);
                setObject(pObject)

            });

        }, [skinModel.gltf])

        //load texture on minecraft character
        useMemo(() => {

            if (!skinModel.texture) return;
            if (object) object.scene.castShadow = true;
            if (object) object.scene.receiveShadow = true;

            const texture = new TextureLoader().load(skinModel.texture);
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestMipMapNearestFilter;
            texture.colorSpace = THREE.SRGBColorSpace;

            const material = new THREE.MeshLambertMaterial({map: texture, transparent: true});

            material.opacity = 1

            object?.scene.traverse((child) => {

                // @ts-ignore
                if (!child["material"]) return;
                child.castShadow = true;

                // @ts-ignore
                child["material"] = material;

            });

        }, [object, skinModel.texture]);

        //load and set cosmetics on minecraft character
        useMemo(() => {
            if (!hatModel || !backpackModel || !object) return;
            const oldhat = {"oldhat": currentHat};
            const hat = new GLTFLoader();

            hat.load(hatModel.gltf, async newHat => {
                newHat.scene.castShadow = true;
                newHat.scene.receiveShadow = true;
                newHat.scene.scale.set(hatModel.scale ?? 1, hatModel.scale ?? 1, hatModel.scale ?? 1);
                newHat.scene.position.set((hatModel.positionX ?? 0) * (hatModel.scale ?? 1), (hatModel.positionY ?? 0) * (hatModel.scale ?? 1), (hatModel.positionZ ?? 0) * (hatModel.scale ?? 1))

                newHat.scene.traverse(child => child.castShadow = true)

                object.scene.traverse((child: Object3D) => {
                    if (child.name != "phead_0") return;
                    if (oldhat.oldhat) child.remove(oldhat.oldhat);
                    child.add(newHat.scene);
                })

                setCurrentHat(newHat.scene);

            });

        }, [object, hatModel]);

        //load and set cosmetics on minecraft character
        useMemo(() => {
            if (!backpackModel || !object) return;
            const oldbackpack = {"oldbackpack": currentBackpack};
            const backpack = new GLTFLoader();


            backpack.load(backpackModel.gltf, async newBackpack => {
                newBackpack.scene.castShadow = true;
                newBackpack.scene.receiveShadow = true;
                newBackpack.scene.scale.set(backpackModel.scale ?? 1, backpackModel.scale ?? 1, backpackModel.scale ?? 1);
                newBackpack.scene.position.set((backpackModel.positionX ?? 0) * (backpackModel.scale ?? 1), (backpackModel.positionY ?? 0) * (backpackModel.scale ?? 1), (backpackModel.positionZ ?? 0) * (backpackModel.scale ?? 1))
                //newBackpack.scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), 180 * Math.PI / 180)
                newBackpack.scene.traverse(child => child.castShadow = true)

                object.scene.traverse((child: Object3D) => {
                    if (child.name != "pbody_2") return;
                    if (oldbackpack.oldbackpack) child.remove(oldbackpack.oldbackpack);
                    child.add(newBackpack.scene);
                })

                setCurrentBackpack(newBackpack.scene);

            });

        }, [object, backpackModel])

        //load and set cosmetics on minecraft character
        useMemo(() => {
            if (!balloonModel || !object) return;
            const balloon = new GLTFLoader();

            if (currentBalloon) object.scene.remove(currentBalloon);

            balloon.load(balloonModel.gltf, async newBalloon => {
                newBalloon.scene.castShadow = true;
                newBalloon.scene.receiveShadow = true;
                newBalloon.scene.scale.set(balloonModel.scale ?? 1, balloonModel.scale ?? 1, balloonModel.scale ?? 1);
                newBalloon.scene.position.set((balloonModel.positionX ?? 0) * (balloonModel.scale ?? 1), (balloonModel.positionY ?? 0) * (balloonModel.scale ?? 1), (balloonModel.positionZ ?? 0) * (balloonModel.scale ?? 1))
                //newBackpack.scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), 180 * Math.PI / 180)
                newBalloon.scene.traverse(child => child.castShadow = true)

                object.scene.add(newBalloon.scene)
                setCurrentBalloon(newBalloon.scene);


                const position = new THREE.Vector3(balloonModel.positionX, balloonModel.positionY, balloonModel.positionZ)


                const geometry = new THREE.BoxGeometry(.5, .5, .5);
                const color = new THREE.MeshBasicMaterial({color: "#000000"});
                const box = new THREE.Mesh(geometry, color);


                // @ts-ignore
                box.position.set(balloonModel.scale * position.x + 0.25, balloonModel.scale * position.y + 0.25, balloonModel.scale * position.z + 0.25);

                object.scene.add(box)


            });

        }, [object, balloonModel])

        //animation
        useEffect(() => {
            if (!object) return;
            actions.current = {idle: mixer.clipAction(object.animations[1], primitiveRef.current)}
            actions.current.idle.play()
        }, [object])

        useFrame((state, delta) => {
            mixer.update(delta)

        })

        return object ? <primitive ref={primitiveRef}
                                   position={[skinModel.positionX ?? 0, skinModel.positionY ?? 0, skinModel.positionZ ?? 0]}
                                   object={object.scene}
                                   scale={scale}/> : null;
    }

export default Minecraft3DCharacter;