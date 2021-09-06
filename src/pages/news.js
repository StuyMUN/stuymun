import Head from 'next/head';
import { News } from '../lib/data';
import { NewsFeed, Pill } from '../components';
import Link from 'next/link';

export default function NewsPage({posts}) {
    return <>
        <Head>
            <title>News | StuyMUN</title>
        </Head>
        
        <Pill>
            <NewsFeed posts={posts} />
            <Link href={'/'}>Go Back Home</Link>
        </Pill>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await News.getPosts()
        }
    };
}