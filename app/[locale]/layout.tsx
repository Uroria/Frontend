import Head from "next/head";
import Script from "next/script";
import Layout from "../../src/micro-components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/uroria.scss'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
            <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
            <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>
            <title>Uroria.com - Your Minecraft Network</title>
        </Head>
        <body>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    )
}

