import Link from './Link';
import NewsFeed from './News';
import Pill from './Pill';

function NewsNavigator({ page, pages }) {
    let max = Math.min(7, pages);
    let buttons = [
        <div key={pages + 1}><Link href={'/news/page/1'}>{'<<'}</Link></div>,
        <div key={pages + 2}><Link href={`/news/page/${Math.max(1, Math.round(pages - max / 2 - 1))}`}>{'<'}</Link></div>
    ];

    let start = Math.max(1, Math.round(page - max / 2));
    let end = Math.min(pages + 1, Math.max(start + max, Math.round(page + max / 2)));

    for (; start < end; ++start) {
        buttons.push(<div key={start}>
            <Link href={`/news/page/${start}`}>
                {start}
            </Link>
        </div>);
    }

    buttons.push(<div key={pages + 3}><Link href={`/news/page/${Math.min(pages, Math.round(page + max / 2 + 1))}`}>{'>'}</Link></div>);
    buttons.push(<div key={pages + 4}><Link href={`/news/page/${pages}`}>{'>>'}</Link></div>);

    return <div className='__page-navigator'>
        {buttons}
    </div>;
}

export default function NewsGroup({ page, pages, posts }) {
    return <Pill>
        <NewsFeed posts={posts}>
            <NewsNavigator page={page} pages={pages} />
        </NewsFeed>
    </Pill>;
}