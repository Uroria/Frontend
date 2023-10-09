import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/uroria.scss'
import 'swiper/css';
import "swiper/css/pagination";
import type {AppProps} from 'next/app'
import Script from "next/script";
import Layout from "../src/components/Layout";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {

    const router = useRouter();

    return <>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>
        <title>Uroria.com - Your Minecraft Network</title>
        <Layout footer={!router.route.includes("/shop")}>
            <Component {...pageProps} />
        </Layout>
    </>
}

export default MyApp
