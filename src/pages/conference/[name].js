import { Conferences } from '../../lib/data';
import { OtherConference, StuyConference } from '../../components';

import Link from "next/link";
import Head from 'next/head';

export default function ConferencePage({ name, conference }) {

    function getConferenceComponent(conference) {
        let ConferenceComponent;
        if (conference.type == 'stuy') {
            ConferenceComponent = StuyConference;
        }
        else if (conference.type == 'other') {
            ConferenceComponent = OtherConference;
        }

        return <ConferenceComponent name={name} conference={conference} />;
    }

    return <>
        <Head>
            <title>{name} | StuyMUN</title>
        </Head>

        <section>
            <div className="container bg-light-200">
                {getConferenceComponent(conference)}
                <br/><hr/>
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

import '../../lib/object';

export async function getStaticPaths() {
    const cnfs = await Conferences.getConferences();

    return {
        paths: cnfs.map(([name, _cnf], _i) => {
            return { params: { name : name }};
        }),
        fallback: false
    };
}