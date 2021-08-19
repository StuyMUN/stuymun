import Layout from '../components/Layout.js'
import React from "react";

import { Conferences } from '../lib/data';

import Link from 'next/link';

export default function ConferencesPage({ stuy, other }) {
    function getConferenceLink(name) {
        return <Link href={`/conference/${name}`}>{name}</Link>
    }

    function getConferenceSection(conferences) {
        return (<div style={{marginBlock: "15px"}}>
            <ul>
                {conferences.map((name, i) => 
                    <li key={i}>{getConferenceLink(name)}</li>
                )}
            </ul>
        </div>);
    }

    return (
        <Layout title={'Conferences'}>
            <div>Conferences: </div>
            {getConferenceSection(stuy)}
            {getConferenceSection(other)}
        </Layout>
    );
}

export async function getStaticProps() {
    return { 
        props: { 
            stuy: Object.keys(await Conferences.getStuyConferences()),
            other: Object.keys(await Conferences.getOtherConferences())
        }
    }; 
}