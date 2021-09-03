import Head from 'next/head';
import { Conferences, News } from '../lib/data';
import { NewsFeed, ConferenceFeed } from '../components';

export default function HomePage({posts, conferences}) {
    return <>
        <Head>
            <title>StuyMUN</title>
        </Head>

        <section className="content-container">
            <div className="content-split">
                <NewsFeed posts={posts}/>
                <ConferenceFeed conferences={conferences}/>
            </div>
        </section>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await News.getPosts(),
            conferences: await Conferences.getOtherConferences()
        }
    };
}
