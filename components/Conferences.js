import { Post } from './Post';
import Link from './Link';
import '../lib/object';
import { isHttpLink } from '../lib/util';

export default function ConferenceFeed({ conferences, title }) {

    function getSignupLink(conference) {
        const link = conference['signup-link'];
        if (isHttpLink(link)) {
            return <Link href={link}>Signup to the Conference!</Link>;
        } else {
            return <p>Signups opening soon!</p>;
        }
    }

    function getConference([name, conference], i) {
        return <div key={i}>
            <Post
                title={name}
                content={conference.content}
                date={conference.date}
                url={`/conference/${name}`}
            />
            {getSignupLink(conference)}
        </div>;
    }

    return <section className="upcoming">
        <h2 className={"text-center"} id="upcoming-h2">{title || 'Upcoming'}</h2>
        {conferences.map(getConference)}
    </section>;
}