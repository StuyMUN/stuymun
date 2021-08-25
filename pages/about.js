import Layout from '../components/Layout';
import { getSiteData } from '../lib/data';

function createMarkup(about) {
    return {__html: about}
}

export default function AboutPage({about}) {
    return (
        <Layout title={'About Page'}>
            <h2>About Us!</h2>
            <div dangerouslySetInnerHTML={createMarkup(about)} />
        </ Layout>
    );
}

export async function getStaticProps() {
    let site = await getSiteData();
    return { props: { about: site['about'].html } };
}