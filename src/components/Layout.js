import Head from "next/head";
import Navbar from "./Navbar";
import Feet from './Footer';

export default function Layout({ children }) {
    return <div className={'godamn-liberal-cucks'}>
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>StuyMUN</title>
        </Head>

        <Navbar />

        {children}

        <Feet />
    </div>;
}