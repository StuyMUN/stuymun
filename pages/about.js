import { Site } from '../lib/data';
import Head from 'next/head';

export default function AboutPage({about}) {
    return <>
        <Head>
            <title>About us</title>
        </Head>
        <div dangerouslySetInnerHTML={{__html: about.content}} />
    </>
}

export async function getStaticProps() {
    return {
        props: { 
            about: await Site.getData('about') 
        } 
    };
}
