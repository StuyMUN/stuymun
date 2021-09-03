import { Layout } from '../old/components';
import { Site } from '../lib/data';

export default function AboutPage({about}) {
    return (
        <Layout title={'About Page'}>
            <div dangerouslySetInnerHTML={{__html: about.content}} />
        </ Layout>
    );
}

export async function getStaticProps() {
    return {
        props: { 
            about: await Site.getData('about') 
        } 
    };
}
