import useSWR, {SWRResponse} from "swr";

// @ts-ignore
const fetcherJSON = async (...args) => fetch(...args).then((res) => res.json());
// @ts-ignore
const fetcherImage = async (...args) => fetch(...args).then((res) => res.blob()).then(blob => toBase64(blob)).then(src => getImage(src));

// @ts-ignore

export const useMojangProfile = (username: string): SWRResponse => useSWR(`https://api.ashcon.app/mojang/v2/user/${username}`, fetcherJSON)
export const useAPI = (url: string): SWRResponse => useSWR(url, fetcherJSON);
export const useImage = (url: string): SWRResponse => useSWR(url, fetcherImage)

const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const getImage = (file: string) => {
    return new Promise(function (resolved) {
        const image = new Image()
        image.onload = () => resolved(image)
        image.src = file
    })
}