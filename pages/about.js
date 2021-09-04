import { Site } from '../lib/data';
import Head from 'next/head';

export default function AboutPage({ about }) {
    return <>
        <Head>
            <title>About us</title>
        </Head>

        <section>
            <div className="container bg-light-200">
                <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </div>
        </section>
    </>
}

export async function getStaticProps() {
    return {
        props: {
            about: await Site.getData('about')
        }
    };
}
