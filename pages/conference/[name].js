import { Conferences } from '../../lib/data';

import { StuyConference, GenericConference } from "../../old/components/ConferenceTypes";
import Link from "next/link";
import Head from 'next/head';

export default function ConferencePage({ name, conference }) {

    function getConferenceComponent(conference) {
        let ConferenceComponent;
        if (conference.type == 'stuy') {
            ConferenceComponent = StuyConference;
        }
        else if (conference.type == 'other') {
            ConferenceComponent = GenericConference;
        }

        return <ConferenceComponent name={name} conference={conference} />;
    }

    return <>
        <Head>
            <title>{name} | StuyMUN</title>
        </Head>

        <section>
            <div className="container bg-light-200">
                <div><h1>{name}</h1></div>
                {getConferenceComponent(conference)}
                <div><Link href={'/conferences/'}>Go Back to Conferences</Link></div>
                <div><Link href={'/'}>Go Back Home</Link></div>
            </div>
        </section>
    </>;
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
            return { params: { name: cnf } };
        }),
        fallback: false
    };
}