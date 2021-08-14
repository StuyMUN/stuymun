import Layout from '../components/Layout.js';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout title={'StuyMUN'}>
            <div>Hello world!</div>
            <Link href={'/our-team'}><a>Our Team!</a></Link>
        </ Layout>
    );
}

