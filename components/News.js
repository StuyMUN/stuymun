import { Post } from './Post';
import '../lib/object';

export default function NewsFeed({ posts }) {
    function getPost(slug, post, i) {
        const postProps = {
            title: post.metadata.title,
            date: post.metadata.date,
            url: `/post/${slug}`,
            content: post.content
        };

        return <div key={i}>
            <Post {...postProps} />
        </div>;
    }

    return <section className="news">
        <h2 className="text-center">News</h2>
        {posts.map(getPost)}
    </section>;
}