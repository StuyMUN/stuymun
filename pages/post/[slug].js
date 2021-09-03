import { NewsPost } from '../../old/components'
import { News } from '../../lib/data';
import Head from 'next/head';

export default function PostPage({ slug, post }){
    return <>
        <Head>
            <title>{post.title} | StuyMUN</title>
        </Head>
        <NewsPost slug={slug} post={post}/>
    </>;
}

export async function getStaticProps({ params }) {
    return {
        props: {
            slug: params.slug,
            post: await News.getPost(params.slug),
        }
    };
}

export async function getStaticPaths() {
    let slugs = Object.keys(await News.getPosts());

    return {
        paths: slugs.map(slug => { 
            console.log(slug);
            return { params: { slug: slug }};
        }),
        fallback: false
    };
}