import { Layout } from '../components';
import { NewsPosts } from '../old/components';

import { News } from '../lib/data';

export default function NewsPage({news}) {

    return (
        <Layout>
            <NewsPosts news={news}/>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            news: await News.getPosts()
        }
    };
}