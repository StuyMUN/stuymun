import { NextLink } from "./Link";

export function Markdown({ content }) {
    return <div dangerouslySetInnerHTML={{__html: content}} />
}

export function Date({ date }) {
    const { year, month, day } = date;

    return <div className='dateline'>
        <span className='year'>{year}</span>-
        <span className='month'>{month}</span>-
        <span className='day'>{day}</span> | 30d
    </div>;
}

export function Post({ title, content, date, url }) {
    return <>
        <h3>{title}</h3>
        <Date date={date} />
        <Markdown content={content} />
        <NextLink href={url}>see more</NextLink>
    </>;
}