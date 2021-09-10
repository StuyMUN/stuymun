import { Post } from './Post';
import '../lib/object';

export default function NewsFeed({ children, posts }) {
    function getPost([slug, post], i) {
        const postProps = {
            title: post.title,
            date: post.date,
            url: `/news/post/${slug}`,
            content: post.content
        };

        return <div key={i}>
            <Post {...postProps} />
        </div>;
    }

    return <section className="news">
        <h2 className="text-center">News</h2>
        {posts.map(getPost)}
        {children}
    </section>;
}