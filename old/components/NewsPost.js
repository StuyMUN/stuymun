import Link from "next/link";

export default function NewsPost({ slug, post }) {
    const { year, month, day } = post.metadata.date;

    return (
        <div style={{backgroundColor: "lightpink"}}>
            <h2>{post.metadata.title}</h2>
            <p><Link href={`/post/${slug}`}>Read more</Link></p>
            <p>{year}-{month}-{day}</p>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    );
}