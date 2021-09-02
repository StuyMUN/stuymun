import Layout from "../../components/Layout";
import { Conferences} from '../../lib/data';

import { StuyConference, GenericConference } from "../../components/ConferenceTypes";
import Link from "next/link";

export default function ConferencePage({ name, conference }) {

    function getConferenceComponent(conference) {
        let ConferenceComponent;
        if (conference.type == 'stuy') {
            ConferenceComponent  = StuyConference;
        }
        else if (conference.type == 'other') {
            ConferenceComponent =  GenericConference;
        }

        return <ConferenceComponent name={name} conference={conference} />;
    }

    return (
        <Layout title={name}>
            <div><h1>{name}</h1></div>
            {getConferenceComponent(conference)}
            <br/><hr/>
            <Link href={'/conferences/'}>Go Back to Conferences</Link>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            name: params.name,
            conference: await Conferences.getConference(params.name)
        }
    };
}

export async function getStaticPaths() {
    const cnfs = 
        Object.keys(await Conferences.getConferences());
    
    return { 
        paths: cnfs.map(cnf => {
            return { params: {name: cnf} };
        }), 
        fallback: false 
    };
}