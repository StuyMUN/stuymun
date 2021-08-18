import Layout from '../components/Layout';
import { Site } from '../lib/util';

function createMarkup(about) {
    return {__html: about}
}

export default function AboutPage({about}) {
    return (
        <Layout title={'About Page'}>
            <div dangerouslySetInnerHTML={createMarkup(about)} />
        </ Layout>
    );
}

export async function getStaticProps() {
    let site = await Site.getData();
    return { props: { about: site['about'].content } };
}