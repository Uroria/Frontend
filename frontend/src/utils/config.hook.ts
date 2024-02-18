"use client"

import {useEffect, useState, useTransition} from "react";
import {fetchConfig} from "./config.fetcher";

const useConfig = (): any[] => {

    const [_, startRequest] = useTransition();
    const [error, setError] = useState<any | null>(null)
    const [data, setData] = useState<any | null>(null);

    useEffect(() => startRequest(async () => {
        try {
            const config = await fetchConfig();
            setData(config)
        } catch (e) {
            setData(e)
            setError(e)
        }
    }), []);


    return [
        data,
        error
    ]

}

export default useConfig;
