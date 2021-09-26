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

    let tc = null;

    // if url,
    if (url) {
        let text = title ? <>{title}</> : <>See More</>;
        let getLink = url.startsWith('http') ? 
            e => <a href={url} target="_blank" rel="noreferrer">{e}</a> :
            e => <Link href={url}>{e}</Link>;
        
        tc = getLink(text);
    }

    // if no url,
    else  {
        tc = <>{title}</>;
    }

    return <>
        {<h3 className='h2-title post-title'>{tc}</h3>}
        {date && <Date date={date} />}
        {content && <Markdown content={content} />}
    </>;
}