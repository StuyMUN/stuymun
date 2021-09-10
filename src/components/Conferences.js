import '../lib/object';
import { OtherConference, StuyConference } from './ConferenceTypes';

export const OtherFeed = (name, conference) => {
    return conference.type == 'other' ?
        <OtherConference name={name} conference={conference} /> :
        null;
};

export const StuyFeed = (name, conference) => {
    return conference.type == 'stuy' ?
        <StuyConference name={name} conference={conference} hideCommittees /> :
        null;
};

export const HybridFeed = (name, conference) => {
    if (conference.type === 'stuy') {
        return StuyFeed(name, conference);
    }
    if (conference.type === 'other') {
        return OtherFeed(name, conference);
    }
}

export function ConferenceFeed({ children, conferences, title, feed }) {

    function getConference([name, conference], i) {
        return <div key={i}>
            {feed(name, conference)}
        </div>;
    }

    return <section className="upcoming">
        <h2 className={"text-center conference-h2"} id={title ? 'conference-h2' : 'upcoming-h2'}>{title || 'Upcoming'}</h2>
        {conferences.map(getConference)}
        {children}
    </section>;
}