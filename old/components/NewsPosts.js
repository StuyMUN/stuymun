import NewsPost from './NewsPost';

export default function NewsPosts({ news }) {
 
    let newsElements = [], i = 0;
    for (let slug in news) {
        newsElements.push(<li key={i++}><NewsPost slug={slug} post={news[slug]}/></li>);
    }

    return (
        <ul>
            {newsElements}
        </ul>
    );
}
