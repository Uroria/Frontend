import useSWR, {SWRResponse} from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const useAPI = (url: string): SWRResponse => useSWR(url, fetcher);