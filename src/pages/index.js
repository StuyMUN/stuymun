import Head from 'next/head';
import { Conferences, News } from '../lib/data';
import { NewsFeed, ConferenceFeed, Link, OtherFeed, Pill, Countdown } from '../components';
import { isDateUpcoming } from '../lib/date';

export default function HomePage({ posts, conferences, upcoming }) {
    return <>
        <Head>
            <title>StuyMUN</title>
        </Head>

        {upcoming && isDateUpcoming(upcoming[1].details.date) && <header>
            <div className="text-center">
                <Pill>
                    <h1>Countdown To {upcoming[0]}</h1>
                    <Countdown date={upcoming[1].details.date} />
                    <Link href="/conference/MiniMUNC%202021"><button>Learn More</button></Link>
                </Pill>
            </div>
        </header>}

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
            conferences: await Conferences.getConferences(),
            upcoming: (await Conferences.getStuyConferences())[0]
        }
    };
}
