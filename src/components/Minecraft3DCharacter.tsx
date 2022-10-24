import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {FunctionComponent, useEffect, useRef, useState} from "react";
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
    scale?: number
}

interface MinecraftCosmeticProps {
    hatModel: CosmeticsProps,
    scale?: number
}

const Minecraft3DCharacter: FunctionComponent<Minecraft3DCharacterProps> = ({skinModel, hatModel, scale = 1}) => {
    //variables
    // @ts-ignore
    const [mixer] = useState(() => new THREE.AnimationMixer())
    const actions = useRef<{ idle: any } | undefined>();
    const primitiveRef = useRef<Group | undefined>();
    const [object, setObject] = useState<GLTF | undefined>(undefined);
    const [currentHat, setCurrentHat] = useState<THREE.Group | undefined>(undefined);

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
        texture.encoding = THREE.sRGBEncoding;

        object?.scene.traverse((child) => {

            // @ts-ignore
            if (!child["material"]) return;
            child.castShadow = true;
            // @ts-ignore
            child["material"].map = texture;

        });

    }, [object, skinModel.texture]);

    //load and set hat cosmetic on minecraft character head
    useEffect(() => {
        if (!hatModel || !object) return;
        const oldhat = {"oldhat": currentHat};
        const hat = new GLTFLoader();

        hat.load(hatModel.gltf, async newHat => {
            newHat.scene.castShadow = true;
            newHat.scene.receiveShadow = true;
            newHat.scene.scale.set(hatModel.scale ?? 1, hatModel.scale ?? 1, hatModel.scale ?? 1);
            newHat.scene.position.set((hatModel.positionX ?? 0) * (hatModel.scale ?? 1), (hatModel.positionY ?? 0) * (hatModel.scale ?? 1), (hatModel.positionZ ?? 0) * (hatModel.scale ?? 1))

            newHat.scene.traverse(child => child.castShadow = true)

            await object.scene.traverse((child: Object3D) => {
                if (child.name != "phead_0") return;
                if (oldhat.oldhat) child.remove(oldhat.oldhat);
                child.add(newHat.scene);
            })

            setCurrentHat(newHat.scene);

        });
    }, [object, hatModel])

    //animation
    useEffect(() => {
        if (!object) return;
        actions.current = {idle: mixer.clipAction(object.animations[1], primitiveRef.current)}
        actions.current.idle.play()
    }, [object])
    useFrame((state, delta) => mixer.update(delta))

    return object ? <primitive ref={primitiveRef}
                               position={[skinModel.positionX ?? 0, skinModel.positionY ?? 0, skinModel.positionZ ?? 0]}
                               object={object.scene}
                               scale={scale}/> : null;
}

export const MinecraftCosmetic: FunctionComponent<MinecraftCosmeticProps> = ({hatModel, scale}) => {
    const model = useGLTFModel(hatModel.gltf)

    useEffect(() => {
        if (!model) return;
        if (model) model.scene.castShadow = true;
        if (model) model.scene.receiveShadow = true;
        const bbox = new THREE.Box3().setFromObject(model.scene);
        const offset = new THREE.Vector3();
        bbox.getCenter(offset).negate();
        model.scene.position.set(offset.x, offset.y, offset.z);
    }, [model])

    return model ? <primitive position={[hatModel.positionX ?? 0, hatModel.positionY ?? 0, hatModel.positionZ ?? 0]}
                              object={model.scene}
                              scale={scale}/> : null;
}

const useGLTFModel = (gltf: string) => {
    const loader = new GLTFLoader();
    const [gltfObject, setGltfObject] = useState<GLTF | undefined>(undefined);

    loader.load(gltf, object => {
        if (!gltfObject) setGltfObject(object)
    });

    return gltfObject;
}

export default Minecraft3DCharacter;