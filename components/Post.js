import Link from "./Link";

export function Markdown({ content }) {
    return <div dangerouslySetInnerHTML={{__html: content}} />
}

export function Date({ date }) {
    const { year, month, day } = date;

    return <div>
        <span>{year}</span>-
        <span>{month}</span>-
        <span>{day}</span> | 30d
    </div>;
}

export function Post({ title, content, date, url }) {

    let titleComponent = title && <h3>{title}</h3>;
    
    titleComponent = url ? 
        <Link href={url}>{titleComponent || <span>See More</span>}</Link> : 
        titleComponent;

    return <>
        { titleComponent }
        { date && <Date date={date} />}
        { content && <Markdown content={content} />}
    </>;
}