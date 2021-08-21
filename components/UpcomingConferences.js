import sortByDate from '../lib/date-sorter'
// import GenericConference from './ConferenceTypes'

export default function UpcomingConferences( conferences ){

    function getConferences(conferences, getDate) {
        conferences = sortByDate(conferences, { getDate: getDate });

        return (<div style={{marginBlock: "15px"}}>
            <ul>
                {conferences.map(([name, _], i) => 
                    <li key={i}>{Conference(name)}</li>
                )}
            </ul>
        </div>);
    }

    return (
        <div>
            {getConferences(conferences)}
        </div>
    )
}