import Link from 'next/link';

export function GenericConference({ name, conference }) {
    function hasSignupLink(conference) {
        return conference['signup-link'] !== undefined && 
            conference['signup-link'].startsWith("http");
    }

    function getSignupLink(conference) {
        if (hasSignupLink(conference)) {
            return <Link href={conference['signup-link']}>Signup Here!</Link>
        } else {
            return <p>Signups opening soon!</p>
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
    
    function createMarkup(html) {
        return {__html: html}
    }

    return (<div>
            <div dangerouslySetInnerHTML={createMarkup(conference.details.content)} />
            
            <ul>
                {conference.committees.map((entry, i) => 
                    <li key={i}>
                        {getCommitteeLink(name, entry.name)}
                    </li>
                )}
            </ul>
    </div>);
}