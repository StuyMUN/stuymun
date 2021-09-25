import Link from './Link';
import { Post, Markdown } from './Post';
import '../lib/object';
import { isHttpLink } from '../lib/util';

const MAX_CHARS = 256;

function CommitteePreview({ name, slug, committee }) {
    const preview = committee.content.substring(0, MAX_CHARS) + '...';
    const committeeLink = `/conference/${name}/${slug}`;

    return <div className="committee-preview">
        <h3><Link href={committeeLink}>{committee.title}</Link></h3>
        <Markdown content={preview} />
    </div>;
}

export function StuyConference({ name, conference, hideCommittees }) {
    
    return <>
        <Post
            title={name}
            content={conference.details.content}
            url={`/conference/${name}`}
            date={conference.details.date}
        />
        
        {!hideCommittees && conference.committees.map(([slug, committee], i) => {
            return <div key={i}>
                <CommitteePreview name={name} slug={slug} committee={committee} />
            </div>;
        })}
    </>;
}

export function OtherConference({ name, conference }) {
    function getSignupLink(conference) {
        const link = conference['signup-link'];
        if (isHttpLink(link)) {
            return <a href={link} target="_blank" rel="noreferrer">Signup to the Conference!</a>;
        } else {
            return <p>Signups opening soon!</p>;
        }
    }

    return <>
        <Post
            title={name}
            content={conference.content}
            date={conference.date}
            url={conference['website-link'] || `/conference/${name}`}
        />
        {getSignupLink(conference)}
    </>;
}