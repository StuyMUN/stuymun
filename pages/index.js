import { Layout, NewsPosts} from '../components/';
import { News } from '../lib/data';
import Link from 'next/link';

export default function HomePage({news}) {
    return (
        <Layout title={'StuyMUN'} isRoot={true}>
            <div>Welcome to StuyMun</div>
            <div>Pages: </div>
            <ul>
                <li><Link href={'/about'}><a>About Us!</a></Link></li>
                <li><Link href={'/our-team'}><a>Our Team!</a></Link></li>
                <li><Link href={'/conferences'}><a>Conferences!</a></Link></li>
                <li><Link href={'/news'}><a>News!</a></Link></li>
            </ul>
            <br/>
            <NewsPosts news={news}/>
            {/* <UpcomingConferences conferences={others}/>             */}
        </ Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            news: await News.getPosts(),
        }
    };
}
