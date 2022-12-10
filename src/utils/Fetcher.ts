import useSWR, {SWRResponse} from "swr";

// @ts-ignore
const fetcherJSON = (...args) => fetch(...args, {headers: {"Origin": "*"}}).then((res) => res.json());
// @ts-ignore
const fetcherImage = (...args) => fetch(...args).then((res) => res.blob()).then(blob => toBase64(blob)).then(src => getImage(src));
export const useAPI = (url: string): SWRResponse => useSWR(url, fetcherJSON);
export const useImage = (url: string): SWRResponse => useSWR(url, fetcherImage)

const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const getImage = (file: string) => {
    return new Promise (function (resolved) {
        const image = new Image()
        image.onload = () => resolved(image)
        image.src = file
    })
}