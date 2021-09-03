import Link from 'next/link';
import { isHttpLink } from '../../lib/util';

export function GenericConference({ _, conference }) {

    function getSignupLink(conference) {
        const link = conference['signup-link'];

        if (isHttpLink(link)) {
            return <Link href={link}>Signup Here!</Link>;
        } else {
            return <p>Signups opening soon!</p>;
        }
    }

    let { year, month, day } = conference.date; 
    

    return (
        <div>
            <p>{year}-{month}-{day}</p>
            <p>{conference.description}</p>
            <Link href={conference['website-link']}>go to someting</Link>
            {getSignupLink(conference)}
        </div>
    );
}

export function StuyConference({ name, conference }) {
    function getCommitteeLink(conferenceName, committee) {
        return <Link href={`/conference/${conferenceName}/${committee}`}><a>{committee}</a></Link>
    }
    
    return (<div>
            <div dangerouslySetInnerHTML={{__html: conference.details.content}} />
            
            <ul>
                {conference.committees.map((entry, i) => 
                    <li key={i}>
                        {getCommitteeLink(name, entry.name)}
                    </li>
                )}
            </ul>
    </div>);
}