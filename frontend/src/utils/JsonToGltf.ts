export const JsonToGltf = (json: Object) => {
    const stringGLTF = JSON.stringify(json) // convert Object to a String
    const base64EncodedGLTF = btoa(stringGLTF) // Base64 encode the String

    return `data:application/octet-stream;base64,${base64EncodedGLTF}`;
}