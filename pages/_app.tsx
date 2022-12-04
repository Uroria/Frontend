import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/uroria.scss'
import type {AppProps} from 'next/app'
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>
        <title>Uroria.com - Your Minecraft Network</title>
        <Component {...pageProps} />
    </>
}

export default MyApp
