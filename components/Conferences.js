import '../lib/object';
import { OtherConference, StuyConference } from './ConferenceTypes';

export const OtherFeed = (name, conference) => {
    return <OtherConference name={name} conference={conference} />;
};

export const StuyFeed = (name, conference) => {
    return <StuyConference name={name} conference={conference} hideCommittees />;
};

export const HybridFeed = (name, conference) => {
    if (conference.type === 'stuy') {
        return StuyFeed(name, conference);
    } 
    if (conference.type === 'other') {
        return OtherFeed(name, conference);
    }
}

export function ConferenceFeed({ conferences, title, feed }) {

    function getConference([name, conference], i) {
        return <div key={i}>
            {feed(name, conference)} 
        </div>;
    }

    return <section className="upcoming">
        <h2 className={"text-center"} id="upcoming-h2">{title || 'Upcoming'}</h2>
        {conferences.map(getConference)}
    </section>;
}