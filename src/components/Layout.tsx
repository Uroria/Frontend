import {FunctionComponent, ReactNode} from "react";
import Language from "./Language";
import {useRouter} from "next/router";
import Navigation from "./Navigation";
import Footer from "../sections/Footer";
import { propertiesToJson } from 'properties-file/content'
import useSWR from "swr";

interface LayoutProps {
    children: ReactNode
    footer?: boolean
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.text())

const Layout: FunctionComponent<LayoutProps> = (props) => {

    const {children, footer = true} = props;
    const locale = useRouter().locale;
    const { data, error } = useSWR(`${__dirname}./Language/Language_${locale}.properties`, fetcher);

    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        console.log(window.innerHeight)
    }
    appHeight()

    const languageProperties = propertiesToJson(data)

    return <Language.Provider value={languageProperties}>
        <Navigation/>
        {children}
        {footer ? <Footer/> : null}
    </Language.Provider>

}

export default Layout;