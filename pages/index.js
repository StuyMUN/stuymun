import Layout from '../components/Layout.js';
import Link from 'next/link';

export default function HomePage() {
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
        </ Layout>
    );
}

