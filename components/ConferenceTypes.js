import Link from './Link';
import { Post } from './Post';
import '../lib/object';
import { isHttpLink } from '../lib/util';

function CommitteePreview({ name, slug, committee }) {
    return <>
        <Link href={`/conference/${name}/${slug}`}>{committee.title}</Link>
    </>;
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
            return <Link href={link}>Signup to the Conference!</Link>;
        } else {
            return <p>Signups opening soon!</p>;
        }
    }

    return <>
        <Post
            title={name}
            content={conference.content}
            date={conference.date}
            url={`/conference/${name}`}
        />
        {getSignupLink(conference)}
    </>;
}