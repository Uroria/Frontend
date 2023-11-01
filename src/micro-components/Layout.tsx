'use client'

import {FunctionComponent, ReactNode, useEffect} from "react";
import Language from "./Language";
import {usePathname} from "next/navigation";
import i18nConfig from '../../i18nConfig';
import Navigation from "./Navigation";
import Footer from "../sections/Footer";
import { getProperties } from 'properties-file'
import useSWR from "swr";
import {useCurrentLocale} from "next-i18n-router/client";

interface LayoutProps {
    children: ReactNode
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.text())

const Layout: FunctionComponent<LayoutProps> = (props) => {

    useEffect(() => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)

        window.addEventListener("resize", ev => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        })
    });

    const {children} = props;
    const locale = useCurrentLocale(i18nConfig);
    const path = usePathname() || "";
    const { data, error } = useSWR(`${__dirname}./Language/Language_${locale}.properties`, fetcher);

    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>

    const languageProperties = getProperties(data)

    return <Language.Provider value={languageProperties}>
        <Navigation/>
        {children}
        {path.includes("/shop") ? <Footer/> : null}
    </Language.Provider>

}

export default Layout;