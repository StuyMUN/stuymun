import { sortByDate } from '../../lib/date-sorter'
import { GenericConference } from './ConferenceTypes'

export default function UpcomingConferences({ conferences }){
    
    conferences = sortByDate(conferences, { getDate: e => e[1].date });

    return (<div style={{marginBlock: "15px"}}>
         <ul>
             {conferences.map(([name, conference], i) => 
                <li key={i}>
                    <GenericConference name={name} conference={conference} />
                </li>
             )}
         </ul>
    </div>);
}