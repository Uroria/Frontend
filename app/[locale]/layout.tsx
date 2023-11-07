import Head from "next/head";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/uroria.scss'
import Navigation from "../../src/micro-components/Navigation";
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

const locales = ['en-US', 'de-DE'];

export default async function RootLayout({children, params: {locale}}: {
    children: React.ReactNode,
    params: { locale: string }
}) {

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        console.log(error)
        notFound();
    }

    return (
        <html lang={locale}>
        <Head>
            <Script src="https://unpkg.com/react/umd/react.production.min.js"/>
            <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
            <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>
            <title>Uroria.com - Your Minecraft Network</title>
        </Head>
        <body>
        <NextIntlClientProvider timeZone={"Europe/Berlin"} locale={locale} messages={messages}>
            <Navigation/>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    )
}

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then(res => res.text())

