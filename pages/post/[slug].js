import { Pill, Post, Link } from '../../components'
import { News } from '../../lib/data';
import Head from 'next/head';

export default function PostPage({ slug, post }) {
    let p = {};
    p[slug] = post

    return <>
        <Head>
            <title>{post.metadata.title} | StuyMUN</title>
        </Head>

        <Pill>
            <Post
                title={post.metadata.title}
                content={post.content}
                date={post.metadata.date}
            />

            <Link href={'/'}>Go Back Home</Link>
            <Link href={'/news'}>Go To News Posts</Link>
        </Pill>
    </>;
}

export async function getStaticProps({ params }) {
    return {
        props: {
            slug: params.slug,
            post: await News.getPost(params.slug)
        }
    };
}

export async function getStaticPaths() {
    const posts = await News.getPosts();

    return {
        paths: posts.map(key => {
            return { params: { slug: key } };
        }),
        fallback: false
    };
}