import Link from './Link';
import { Post, Markdown } from './Post';
import '../lib/object';
import { isHttpLink } from '../lib/util';

const MAX_CHARS = 1024;

function CommitteePreview({ name, slug, committee }) {
    let preview = committee.content.substring(0, MAX_CHARS);
    if (preview.length == MAX_CHARS) preview += '...';
    const committeeLink = `/conference/${name}/${slug}`;

    return <div className="committee-preview">
        <h3><Link href={committeeLink}>{committee.title}</Link></h3>
        <Markdown content={preview} />
    </div>;
}

export function StuyConference({ name, conference, hideCommittees }) {
    
    function getCommittees(conference) {
        // flatten the committees into an array
        let committees = conference.committees.map(
            ([slug, committee], _i) => {
                return [ slug, committee ];
            }
        );

        committees.sort((a, b) => {
            return a[1].ordering - b[1].ordering;
        });

        return committees;
    }

    return <>
        <Post
            title={name}
            content={conference.details.content}
            url={`/conference/${name}`}
            date={conference.details.date}
        />
    
        {!hideCommittees && getCommittees(conference).map(([slug, committee], i) => {
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