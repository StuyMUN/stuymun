import { NewsPost, Layout } from '../../old/components'
import { News } from '../../lib/data';

export default function PostPage({ slug, post }){
    return(
        <Layout title={slug}>
        <NewsPost slug={slug} post={post}/>
        </Layout>
    )
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