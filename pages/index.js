import Head from 'next/head';
import { Conferences, News } from '../lib/data';
import { NewsFeed, ConferenceFeed, Link, OtherFeed, HybridFeed, StuyFeed } from '../components';

export default function HomePage({ posts, conferences }) {
    return <>
        <Head>
            <title>StuyMUN</title>
        </Head>

        <header>
            <div className="text-center">
                <h1>Countdown To StuyMUNC</h1>
                <Link href="/conference/MiniMUNC%202021"><button>Learn More</button></Link>
            </div>
        </header>

        <section className="content-container">
            <div className="content-split">
                <NewsFeed posts={posts} />
                <ConferenceFeed
                    conferences={conferences}
                    feed={OtherFeed}
                />
            </div>
        </section>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await News.getPosts(),
            conferences: await Conferences.getConferences()
        }
    };
}
