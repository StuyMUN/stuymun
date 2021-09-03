import { Post } from './Post';
import '../lib/object';

export default function ConferenceFeed({ conferences }) {

    function getConference(name, conference, i) {
        return <div key={i}>
            <Post
                title={name}
                content={conference.description}
                date={conference.date}
                url={`/conference/${name}`}
            />
        </div>;
    }

    return <section className="upcoming">
        <h2 className="text-center" id="upcoming-h2">Upcoming Conferences</h2>
        {conferences.map(getConference)}
    </section>;
}