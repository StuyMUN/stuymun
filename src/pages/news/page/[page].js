import { NewsGroup } from '../../../components';
import { News } from '../../../lib/data';
import Head from 'next/head';

export default function NewsGroupPage(props) {
    return <>
        <Head>
            <title>News Page {props.page} | StuyMUN</title>
        </Head>

        <NewsGroup {...props} />
    </>;
}

export async function getStaticProps({ params }) {
    let page = Number(params.page);
    return {
        props: {
            posts: await News.getPostsOnPage(page),
            page: page,
            pages: await News.getPageCount()
        }
    };
}

export async function getStaticPaths() {
    let paths = [];

    for (let page = 1; page <= await News.getPageCount(); ++page) {
        paths.push({ params: { page: `${page}` } });
    }

    return {
        paths: paths,
        fallback: false
    }
}