import Head from "next/head";
import Navbar from "./Navbar";
import Feet from './Footer';
import getImg from "../lib/constants";

export default function Layout({ children }) {
    return <div className={'godamn-liberal-cucks'} style={{backgroundImage: `url(${getImg("/img/UN-blur-01.png")})`}}>
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