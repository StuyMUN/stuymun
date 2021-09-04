import Link from './Link';
import { Post } from './Post';
import Pill from './Pill';
import { isHttpLink } from '../lib/util';

function CommitteePreview({ committee }) {
    return <>
        <h2>{committee.name}</h2>
    </>;
}

export function StuyConference({ name, conference }) {
    return <>
        <Post
            title={name}
            content={conference.details.content}
            url={`/conference/${name}`}
            date={conference.details.date}
        />

        {conference.committees.map((committee, i) => {
            return <div key={i}>
                <CommitteePreview committee={committee} />
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