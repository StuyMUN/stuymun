import { Site } from '../lib/data';
import Head from 'next/head';
import Link from '../components/Link';
import { Pill, Markdown } from '../components';


export default function AboutPage({ about }) {
    return <>
        <Head>
            <title>About | StuyMUN</title>
        </Head>

        <header className="text-center">
            <h1>About StuyMUN</h1>
        </header>

        <Pill>
            <Markdown content={about.content}/>
            <Link href={'/'}>Go back home</Link>
        </Pill>
    </>
}

export async function getStaticProps() {
    return {
        props: {
            about: await Site.getData('about')
        }
    };
}
