import {AppProps} from "next/app";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Boilerplate</title>
                <link rel="shorcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta
                    name="description"
                    content="A simple project starter to workwith Typescript, React, NextJS and StyledComponents"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
