import sortByDate from '../lib/date-sorter'
import GenericConference from './ConferenceTypes'

export default function UpcomingConferences( conferences, getDate ){

    // let conferenceElements = [], i = 0;
    // for (let slug in news) {
    //     newsElements.push(<li key={i++}><GenericConference name={_} conferences={conferences}/></li>);
    // }
    // }

    conferences = sortByDate(conferences, { getDate: getDate });

    return (<div style={{marginBlock: "15px"}}>
         <ul>
             {conferences.map(([_, conferences], i) => 
                <li key={i}>
                    <GenericConference name={_} conferences={conferences}/>
                </li>
             )}
         </ul>
     </div>);
}