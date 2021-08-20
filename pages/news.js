import Layout from '../components/Layout';
import { News } from '../lib/data';

export default function NewsPage({ news }) {

    // function getPost(post, i) {
    //     return <li key={i}>poop</li>
    // }

    let newsElements = [], i = 0;
    for (let slug in news) {
        let post = news[slug];

        const { year, month, day } = post.metadata.date;

        newsElements.push(
            <li style={{marginBottom: "25px"}} key={i++}>
                <div style={{backgroundColor: "lightpink"}}>
                    <h2>{post.metadata.title} ({slug})</h2>
                    <p>{year}-{month}-{day}</p>
                    <div dangerouslySetInnerHTML={{__html: post.content}} />
                </div>
            </li>
        );
    }

    return (
        <Layout title={'News'}>
            <ul>
                {newsElements}
            </ul>
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
