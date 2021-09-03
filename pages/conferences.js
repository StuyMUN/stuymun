import Head from 'next/head';
import React from "react";

import { sortByDate } from '../lib/date-sorter';
import { Conferences } from '../lib/data';

import Link from 'next/link';

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
        
        <div>Conferences: </div>
        {getConferenceSection(stuy, e => e[1].details.metadata.date)}
        {getConferenceSection(other, e => e[1].date)}
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            // these Object-dot calls are kinda whack cause they make big arrays
            // these can be replaced by some sort of iterator class
            stuy: Object.entries(await Conferences.getStuyConferences()),
            other: Object.entries(await Conferences.getOtherConferences())
        }
    };
}