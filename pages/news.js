import { NewsPosts } from '../old/components';
import Head from 'next/head';
import { News } from '../lib/data';

export default function NewsPage({news}) {
    return <>
        <Head>
            <title>News | StuyMUN</title>
        </Head>
        <NewsPosts news={news}/>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            news: await News.getPosts()
        }
    };
}