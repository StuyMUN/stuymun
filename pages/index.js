import { Layout } from '../components';
import { Conferences, News } from '../lib/data';
import Link from 'next/link';

export default function HomePage({news, others}) {
    return (
        <Layout>
            <div>Welcome to StuyMun</div>
            <div>Pages: </div>
            <ul>
                <li><Link href={'/about'}><a>About Us!</a></Link></li>
                <li><Link href={'/our-team'}><a>Our Team!</a></Link></li>
                <li><Link href={'/conferences'}><a>Conferences!</a></Link></li>
                <li><Link href={'/news'}><a>News!</a></Link></li>
            </ul>
            <br/>
        </ Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            news: await News.getPosts(),
            others: await Conferences.getOtherConferences()
        }
    };
}
