import Head from 'next/head';
import React from "react";

import { sortByDate } from '../lib/date-sorter';
import { Conferences } from '../lib/data';

import Link from 'next/link';
import { ConferenceFeed } from '../components';

export default function ConferencesPage({ stuy, other }) {
    function getConferenceLink(name) {
        return <Link href={`/conference/${name}`}>{name}</Link>
    }

    function getConferenceSection(conferences, getDate) {
        conferences = sortByDate(conferences, { getDate: getDate });

        return (<div style={{ marginBlock: "15px" }}>
            <ul>
                {conferences.map(([name, _], i) =>
                    <li key={i}>{getConferenceLink(name)}</li>
                )}
            </ul>
        </div>);
    }

    return <>
        <Head>
            <title>Conferences | StuyMUN</title>
        </Head>

        <section>
            <div className="container bg-light-200">
                <ConferenceFeed conferences={other} />
            </div>
        </section>
        {/* {getConferenceSection(stuy, e => e[1].details.metadata.date)} */}
        {/* {getConferenceSection(other, e => e[1].date)} */}
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            stuy: await Conferences.getStuyConferences(),
            other: await Conferences.getOtherConferences()
        }
    };
}