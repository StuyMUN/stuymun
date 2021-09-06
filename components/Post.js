import { getNow, getTimeDifference } from "../lib/date";
import Link from "./Link";

export function Markdown({ content }) {
    return <div className={'__markdown'} dangerouslySetInnerHTML={{ __html: content }} />
}

export function Date({ date }) {
    const { year, month, day } = date;

    let countdown = null;

    // now - date is > 0, hasn't happened yet
    const now = getNow();
    const dv = 86400000;
    const secondsDiff = getTimeDifference(date, now);
    if (secondsDiff > 0) {
        countdown = ` | ${Math.floor(secondsDiff/dv)}d until`;
    } else {
        countdown = ` | ${Math.floor(Math.abs(secondsDiff)/dv)}d ago`
    }

    return <div className='date'>
        {year}-{month}-{day}{countdown}
    </div>;
}

export function Post({ title, content, date, url }) {

    // look away (update this if block)
    let titleComponent = null;
    if (title && url) {
        titleComponent = <h3 className={'post-title'}><Link href={url}>{title}</Link></h3>;
    }
    else if (title) {
        titleComponent = <h3 className={'post-title'}>{title}</h3>;
    }
    else {
        titleComponent = <h3 className={'post-title'}><Link href={url}>See More</Link></h3>
    }

    return <>
        {titleComponent}
        {date && <Date date={date} />}
        {content && <Markdown content={content} />}
    </>;
}