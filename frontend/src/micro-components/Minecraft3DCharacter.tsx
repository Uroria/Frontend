"use client"

import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {FunctionComponent, useEffect, useMemo, useRef, useState} from "react";
import {Group, Object3D, Texture, TextureLoader, Vector2} from "three";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {texture} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

export interface ObjectProps {
    gltf: string,
    texture?: string,
    positionY?: number,
    positionX?: number,
    positionZ?: number
}

export interface CosmeticsProps extends ObjectProps {
    scale?: number
    animationDuration?: number
    animationFrames?: number
    animationTextureIndex?: number
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
        // @ts-ignore
        const [backpackMixer, setBackpackMixer] = useState(() => new THREE.AnimationMixer())
        const primitiveRef = useRef<Group | undefined>();
        const [object, setObject] = useState<GLTF | undefined>(undefined);
        const [currentHat, setCurrentHat] = useState<THREE.Group | undefined>(undefined);
        const [currentBackpack, setCurrentBackpack] = useState<GLTF | undefined>(undefined);
        const [currentBalloon, setCurrentBalloon] = useState<THREE.Group | undefined>(undefined);

        //load model
        useEffect(() => {
            const loader = new GLTFLoader();

            loader.load(skinModel.gltf, pObject => {
                pObject.scene.rotation.set(0, 135.3, 0);
                setObject(pObject)
            });

        }, [skinModel.gltf])

        //load texture on minecraft character
        useEffect(() => {

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
        useEffect(() => {
            if (!hatModel || !object) return;
            const hat = new GLTFLoader();

            let interval = 0

            hat.load(hatModel.gltf, async newHat => {

                hatModel.animationTextureIndex && newHat.parser.loadTexture(hatModel.animationTextureIndex).then(texture => {
                    let count = 0
                    interval = setInterval((_) => {
                        texture.offset.set(0, (1 / (hatModel.animationFrames || 4)) * count)
                        count = (count + 1) % (hatModel.animationFrames || 4)
                    }, 50 * (hatModel.animationDuration || 20))
                })

                newHat.scene.castShadow = true;
                newHat.scene.receiveShadow = true;
                newHat.scene.scale.set(hatModel.scale ?? 1, hatModel.scale ?? 1, hatModel.scale ?? 1);
                newHat.scene.position.set((hatModel.positionX ?? 0) * (hatModel.scale ?? 1), (hatModel.positionY ?? 0) * (hatModel.scale ?? 1), (hatModel.positionZ ?? 0) * (hatModel.scale ?? 1))

                newHat.scene.traverse(child => child.castShadow = true)

                object.scene.traverse((child: Object3D) => {
                    if (child.name != "phead_0") return;
                    if (currentHat) child.remove(currentHat);
                    child.add(newHat.scene);
                })

                setCurrentHat(newHat.scene);

            });


            return () => {
                clearInterval(interval)
            }

        }, [object, hatModel?.gltf]);

        //load and set cosmetics on minecraft character
        useEffect(() => {
            if (!backpackModel || !object) return;
            const backpack = new GLTFLoader();

            let interval = 0

            backpack.load(backpackModel.gltf, async newBackpack => {
                backpackModel.animationTextureIndex && newBackpack.parser.loadTexture(backpackModel.animationTextureIndex).then(texture => {
                    let count = 0
                    interval = setInterval((_) => {
                        texture.offset.set(0, (1 / (backpackModel.animationFrames || 4)) * count)
                        count = (count + 1) % (backpackModel.animationFrames || 4)
                    }, 50 * (backpackModel.animationDuration || 20))
                })
                newBackpack.scene.castShadow = true;
                newBackpack.scene.receiveShadow = true;
                newBackpack.scene.scale.set(backpackModel.scale ?? 1, backpackModel.scale ?? 1, backpackModel.scale ?? 1);
                newBackpack.scene.position.set((backpackModel.positionX ?? 0) * (backpackModel.scale ?? 1), (backpackModel.positionY ?? 0) * (backpackModel.scale ?? 1), (backpackModel.positionZ ?? 0) * (backpackModel.scale ?? 1))
                newBackpack.scene.traverse(child => child.castShadow = true)

                object.scene.traverse((child: Object3D) => {
                    if (child.name != "pbody_2") return;
                    if (currentBackpack) child.remove(currentBackpack.scene);
                    child.add(newBackpack.scene);
                })

                setCurrentBackpack(newBackpack);

            });


            return () => {
                clearInterval(interval)
            }

        }, [object, backpackModel?.gltf])

        //load and set cosmetics on minecraft character
        useEffect(() => {
            if (!balloonModel || !object) return;
            const balloon = new GLTFLoader();

            if (currentBalloon) object.scene.remove(currentBalloon)

            let interval = 0

            balloon.load(balloonModel.gltf, async (newBalloon: GLTF) => {
                balloonModel.animationTextureIndex && newBalloon.parser.loadTexture(balloonModel.animationTextureIndex).then(texture => {
                    let count = 0
                    interval = setInterval((_) => {
                        texture.offset.set(0, (1 / (balloonModel.animationFrames || 4)) * count)
                        count = (count + 1) % (balloonModel.animationFrames || 4)
                    }, 50 * (balloonModel.animationDuration || 20))
                })
                newBalloon.scene.castShadow = true;
                newBalloon.scene.receiveShadow = true;
                newBalloon.scene.scale.set(balloonModel.scale ?? 1, balloonModel.scale ?? 1, balloonModel.scale ?? 1);
                newBalloon.scene.position.set((balloonModel.positionX ?? 0) * (balloonModel.scale ?? 1), (balloonModel.positionY ?? 0) * (balloonModel.scale ?? 1), (balloonModel.positionZ ?? 0) * (balloonModel.scale ?? 1))
                //newBackpack.scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), 180 * Math.PI / 180)
                newBalloon.scene.traverse(child => child.castShadow = true)

                object.scene.add(newBalloon.scene)
                setCurrentBalloon(newBalloon.scene);


            });

            return () => {
                clearInterval(interval)
            }

        }, [object, balloonModel?.gltf])

        //animation
        useEffect(() => {
            if (!object) return;
            const modelAction = {idle: mixer.clipAction(object.animations[1], primitiveRef.current)}
            modelAction.idle.play()

            return () => {
                modelAction.idle.stop()
            }
        }, [object])

        //animation
        useEffect(() => {
            if (!currentBackpack) return;
            if (!currentBackpack.animations.length) return;
            const animation = backpackMixer.clipAction(currentBackpack.animations[0], primitiveRef.current)
            animation.play()

            return () => {
                // @ts-ignore
                setBackpackMixer(() => new THREE.AnimationMixer())
            }
        }, [currentBackpack])

        useFrame((state, delta) => {
            mixer.update(delta)
            backpackMixer.update(delta)
        })

        return object ? <primitive ref={primitiveRef}
                                   position={[skinModel.positionX ?? 0, skinModel.positionY ?? 0, skinModel.positionZ ?? 0]}
                                   object={object.scene}
                                   scale={scale}/> : null;
    }

export default Minecraft3DCharacter;