import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <>
            <Html lang='zxx'>
                <Head>
                    <link rel='preconnect' href='https://vitals.vercel-insights.com' />
                    <link rel='preconnect' href='https://ws.audioscrobbler.com' />
                    <meta name='title' content='albert' />
                    <meta name='og:title' content='albert' />
                    <meta name='description' content='system administrator' />
                    <meta name='og:description' content='system administrator' />
                    <meta name='theme-color' content='#000000' />
                    <meta property='og:image' content='/favicon.ico' />
                </Head>
                <Main />
                <NextScript />
            </Html>
        </>
    )
}

export default Document
