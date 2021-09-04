import Head from 'next/head';
import { News } from '../lib/data';
import { NewsFeed } from '../components';
import Link from 'next/link';

export default function NewsPage({posts}) {
    return <>
        <Head>
            <title>News | StuyMUN</title>
        </Head>

        <NewsFeed posts={posts} />

        <Link href={'/'}>Go Back Home</Link>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await News.getPosts()
        }
    };
}