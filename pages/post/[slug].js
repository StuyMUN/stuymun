import { Pill, Post, Link } from '../../components'
import { News } from '../../lib/data';
import Head from 'next/head';

export default function PostPage({ post }) {
    return <>
        <Head>
            <title>{post.title} | StuyMUN</title>
        </Head>

        <Pill>
            <Post
                title={post.title}
                content={post.content}
                date={post.date}
            />

            <div><Link href={'/'}>Go Back Home</Link></div>
            <div><Link href={'/news'}>Go To News Posts</Link></div>
        </Pill>
    </>;
}

export async function getStaticProps({ params }) {
    return {
        props: {
            post: await News.getPost(params.slug)
        }
    };
}

export async function getStaticPaths() {
    const posts = await News.getPostMap();

    return {
        paths: posts.map(([key, _v], _i) => {
            return { params: { slug: key } };
        }),
        fallback: false
    };
}