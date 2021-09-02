import { Layout, NewsPosts } from '../components';

import { News } from '../lib/data';

export default function NewsPage({news}) {

    return (
        <Layout title={'News'}>
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