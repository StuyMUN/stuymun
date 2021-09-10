import { NewsFeed, Pill } from "../../components";
import Head from 'next/head';
import { News } from "../../lib/data";

export default function NewsGroupFirstPage({ posts }) {
    return <>
        <Head>
            <title>News Page | StuyMUN</title>
        </Head>

        <Pill>
            <NewsFeed posts={posts} />
        </Pill>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await News.getPosts()
        }
    }
}