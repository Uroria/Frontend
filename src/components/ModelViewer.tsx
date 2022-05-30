import {FunctionComponent} from "react";

type ModelViewerRotationProps = {
    x: number,
    y: number,
    z: number
}

type ModelViewerProps = {
    rotation: ModelViewerRotationProps,
    src: string,
    autoRotate?: boolean
}

const ModelViewer: FunctionComponent<ModelViewerProps> = ({rotation, src, autoRotate = false}) => {
    // @ts-ignore
    return <>{autoRotate ? <model-viewer
        environment-image={"/assets/3dmodels/Lightroom.hdr"}
        src={src}
        id={"renderer"}
        camera-orbit={rotation.x + "deg " + rotation.y + "deg " + rotation.z + "%"}
        auto-rotate={true}
        auto-rotate-delay={0}
        rotation-per-second={"30deg"}
        loading={"eager"}
        // @ts-ignore
        reveal={"auto"}/> : <model-viewer
            environment-image={"/assets/3dmodels/Lightroom.hdr"}
            src={src}
            id={"renderer"}
            camera-orbit={rotation.x + "deg " + rotation.y + "deg " + rotation.z + "%"}
            loading={"eager"}
            reveal={"auto"}/>}</>
}

export default ModelViewer;