import { NewsGroup, Pill } from "../../components";
import Head from 'next/head';
import { News } from "../../lib/data";

export default function NewsGroupFirstPage(props) {
    return <>
        <Head>
            <title>News Page {props.page} | StuyMUN</title>
        </Head>

        <NewsGroup {...props} />
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            posts: await News.getPostsOnPage(1),
            pages: await News.getPageCount(),
            page: 1
        }
    }
}